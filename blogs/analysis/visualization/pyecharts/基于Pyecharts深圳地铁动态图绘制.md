---
title: 基于Pyecharts深圳地铁动态图绘制
date: 2020-09-19
draft: false
tags: ["pyecharts"]
categories: ["数据可视化"]
---

>为了更为直观的了解深圳地铁运行情况，本文简单绘制地铁路线动态图。

## 数据获取

首先准备数据，在高德地图地铁页面抓包，地址为： `http://map.amap.com/subway/index.html?&1100`

![高德地图地铁](/images/202009/19/高德地图地铁.jpg)


然后找到后台json入口地址：`http://map.amap.com/service/subway?_1600487806499&srhdata=4403_drw_shenzhen.json`

对json数据进行解析

```python
import requests
import json
url='http://map.amap.com/service/subway?_1600485871646&srhdata=4403_drw_shenzhen.json'
response=requests.get(url)
result=json.loads(response.text)
stations=[]
for i in result['l']:
    station=[]
    for j in i['st']:
        station.append([float(k) for k in j['sl'].split(',')])
    stations.append(station)
print(stations)
```

结果数据如下图所示：

![深圳地铁数据](/images/202009/19/深圳地铁数据.jpg)

## 地铁动态图

在百度地图开放平台申请key `http://lbsyun.baidu.com/apiconsole/key?application=key`



完整代码如下：
```python
from pyecharts.charts import BMap
from pyecharts import options as opts
from pyecharts.globals import BMapType, ChartType

c=(
    BMap(init_opts=opts.InitOpts(width="1600px", height="800px"))
    .add_schema(
        baidu_ak="",  #百度秘钥ak
        center=[114.02583, 22.536247],      #当前视角的中心点，用经纬度表示
        zoom=14,                            #当前视角的缩放比例
        is_roam=True,                       #是否开启鼠标缩放和平移漫游
    )
    .add(
        series_name="",
        type_=ChartType.LINES,
        data_pair=stations,
        is_polyline=True,     #是否是多段线
        is_large=True,        #是否启用大规模线图的优化，在数据图形特别多的时候（>=5k）可以开启
        linestyle_opts=opts.LineStyleOpts(color="purple", opacity=0.6, width=1),
        effect_opts=opts.EffectOpts(trail_length=0.5),
    )
    .add_control_panel(
        copyright_control_opts=opts.BMapCopyrightTypeOpts(position=3),
        maptype_control_opts=opts.BMapTypeControlOpts(
            type_=BMapType.MAPTYPE_CONTROL_DROPDOWN
        ),
        scale_control_opts=opts.BMapScaleControlOpts(),
        overview_map_opts=opts.BMapOverviewMapControlOpts(is_open=True),
        navigation_control_opts=opts.BMapNavigationControlOpts(),
        geo_location_control_opts=opts.BMapGeoLocationControlOpts(),
    )
)
c.render_notebook()
```

效果如下图所示：

![地铁动态图](/images/202009/19/地铁动态图.gif)