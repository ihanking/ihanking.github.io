---
title: Pyecharts之漏斗图
date: 2020-09-22
draft: false
tags: ["pyecharts"]
categories: ["数据可视化"]
---

>漏斗图适用于业务流程比较长、环节比较多、周期比较长的单流程单向分析通过漏斗各环节业务数据的比较能够直观地发现和说明问题所在的环节，进而做出决策漏斗图用梯形面积表示某个环节业务量与上一个环节之间的差异。漏斗图从上到下，有逻辑上的顺序关系，表现了随着业务流程的推进业务目标完成的情况。

## 基本漏斗图

```python
from pyecharts import options as opts
from pyecharts.charts import Funnel
x=['浏览网站','加入购物车','下单','支付','完成交易']
y=[8000,3000,2000,800,600]
c = (
    Funnel()
    .add("", [[i,j] for i,j in zip(x,y)])
    .set_global_opts(title_opts=opts.TitleOpts(title="基本漏斗图"))
)
c.render_notebook()
```

![基本漏斗图](/images/202009/22/基本漏斗图.png)

## 倒置漏斗图

add内sort参数可以改变漏斗图的顺序，默认是'descending'，表示从大到下；'ascending'表示从小到大；
LabelOpts可以设置标签位置，有以下可选：

'top'，'left'，'right'，'bottom'，'inside'，'insideLeft'，'insideRight'
'insideTop'，'insideBottom'， 'insideTopLeft'，'insideBottomLeft'
'insideTopRight'，'insideBottomRight'


```python
from pyecharts import options as opts
from pyecharts.charts import Funnel
x=['浏览网站','加入购物车','下单','支付','完成交易']
y=[8000,3000,2000,1500,1200]
c = (
    Funnel()
    .add("", 
         [[i,j] for i,j in zip(x,y)],
         sort_="ascending",
         label_opts=opts.LabelOpts(position="inside"))
    .set_global_opts(title_opts=opts.TitleOpts(title="基本漏斗图"))
)
c.render_notebook()
```

![倒置漏斗图](/images/202009/22/倒置漏斗图.png)


## 设置数据图形的颜色和距离

>color='auto'代表颜色自动变化, gap=5代表设置图形间隔

```python
from pyecharts import options as opts
from pyecharts.charts import Funnel
x=['浏览网站','加入购物车','下单','支付','完成交易']
y=[8000,3000,2000,800,600]
c = (
    Funnel()
    .add("", 
         [[i,j] for i,j in zip(x,y)],
         color='auto',
         label_opts=opts.LabelOpts(position="top"),
         gap=2
)
    .set_global_opts(title_opts=opts.TitleOpts(title="基本漏斗图"))
)
c.render_notebook()
```
![设置数据图形的颜色和距离](/images/202009/22/设置数据图形的颜色和距离.png)

## 设置标签显示格式

TooltipOpts参数介绍：

trigger：触发类型，'item'表示数据项图形触发；formatter：标签内容格式器，{a}代表系列名，{b}代表数据名，{c}代表数据值，
是换行符；

trigger_on：提示框触发的条件，'mousemove'代表鼠标移动时触发

```python
from pyecharts import options as opts
from pyecharts.charts import Funnel
x=['浏览网站','加入购物车','下单','支付','完成交易']
y=[8000,3000,2000,800,600]
c = (
    Funnel()
    .add("流量", 
         [[i,j] for i,j in zip(x,y)],
         tooltip_opts=opts.TooltipOpts(trigger="item", 
                                       formatter="{a} <br/>{b} : {c}",
                                       trigger_on="mousemove",  #鼠标移动时触发
                                       is_show=True)
                                       )
    .set_global_opts(title_opts=opts.TitleOpts(title="基本漏斗图"))
)
c.render_notebook()
```
![设置标签显示格式](/images/202009/22/设置标签显示格式.png)


