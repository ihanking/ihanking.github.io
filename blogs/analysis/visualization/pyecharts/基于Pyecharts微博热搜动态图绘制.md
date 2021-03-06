---
title: 基于Pyecharts微博热搜动态图绘制
date: 2020-09-18
draft: false
tags: ["pyecharts"]
categories: ["数据可视化"]
---

## 微博数据获取

网址为 `https://s.weibo.com/top/summary`

![微博热搜](/images/202009/18/微博热搜.jpg)

完整代码如下:

```python
import time
import json
import shutil
import random
import requests
import re,os,csv
import traceback
import pandas as pd
from lxml import etree
from loguru import logger
from parsel import Selector
from dataclasses import dataclass
from copyheaders import headers_raw_to_dict
session=requests.Session()
requests.packages.urllib3.disable_warnings()

@dataclass
class Spider(object):
    sku = os.path.splitext(os.path.basename(__file__))[0]
    r_h=b'''
    Host: s.weibo.com
    User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36
    '''
    headers=headers_raw_to_dict(r_h)
    data_list = []
    base_url='https://s.weibo.com/top/summary'
    keys=['datetime','rank','title','num','status']

    def get_data(self):
        try:
            resp=session.get(url=self.base_url,headers=self.headers,verify=False).content.decode()
            sel=Selector(resp)
            time_stamp=time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
            all_tr=sel.xpath("//div[@class='data']//tbody/tr")
            for i in all_tr:
                rank=i.xpath("./td[@class='td-01 ranktop']/text()").get()
                title=i.xpath("./td[@class='td-02']/a/text()").get()
                num=i.xpath("./td[@class='td-02']/span/text()").get()
                status=i.xpath("./td[@class='td-03']/i/text()").get()
                result=time_stamp,rank,title,num,status
                self.data_list.append(result)
                logger.info(result)
        except Exception:
            traceback.print_exc()

    def save_store(self):
        all_data=sorted(list(set(self.data_list)),key=self.data_list.index)
        data = pd.DataFrame(all_data,columns=[h.title() for h in self.keys])
        dirname=time.strftime("%Y%m%d",time.localtime())
        os.makedirs(dirname,exist_ok=True)
        skufile='./{0}/'.format(dirname)+self.sku+dirname
        os.makedirs(skufile,exist_ok=True)
        shutil.copy(self.sku+'.py',skufile+'/'+self.sku+'.py')
        data.to_excel(skufile+'/{0}{1}.xlsx'.format(self.sku,dirname),index=False)
        logger.info("data saved successfully")

    def start(self):
        t=1
        while t<11:
            self.get_data()
            t=t+1
            time.sleep(60)
        self.save_store()

if __name__=='__main__':
    Spider().start()
```

这里每隔一分钟抓取一次，共抓了10分钟的数据

完成后的数据如下图所示：

![微博热搜数据](/images/202009/18/微博热搜数据.jpg)

## 动图绘制

### 导入数据

```python
import pandas as pd

data=pd.read_excel("data.xlsx")
```

### 绘制动态图

代码如下

```python
from pyecharts.charts import Bar, Timeline,Grid
tl = Timeline()
# tl = Timeline({"theme": ThemeType.MACARONS})
for i in range(30):
    bar = (
        Bar() #{"theme": ThemeType.MACARONS}
        .add_xaxis(list(data['Title'])[i*10:i*10+10][::-1])
        .add_yaxis("微博热搜榜", list(data['Num'])[i*10:i*10+10][::-1])
        .reversal_axis()
        .set_global_opts(
            title_opts=opts.TitleOpts("{}".format(list(data['Datetime'])[i*10]),pos_right='0%',pos_bottom='15%'),
            xaxis_opts=opts.AxisOpts(
                splitline_opts=opts.SplitLineOpts(is_show=True)),
            yaxis_opts=opts.AxisOpts(splitline_opts=opts.SplitLineOpts(is_show=True),
                                     axislabel_opts=opts.LabelOpts(color='#FF7F50')),)
        .set_series_opts(label_opts=opts.LabelOpts(position="right",color='#9400D3'))
    )
    grid = (
        Grid()
        .add(bar, grid_opts=opts.GridOpts(pos_left="25%",pos_right="0%"))
    )
    tl.add(grid, "{}年".format(i))  #设置标签
    tl.add_schema(
        play_interval=500,   #播放速度
        is_timeline_show=False,  #是否显示 timeline 组件
        is_auto_play=True,
    )
tl.render_notebook()
```

结果动态图如下：

![微博热搜](/images/202009/18/微博热搜.gif)
