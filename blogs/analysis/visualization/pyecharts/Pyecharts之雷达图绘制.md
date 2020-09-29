---
title: Pyecharts之雷达图绘制
date: 2020-09-24
draft: false
tags: ["pyecharts"]
categories: ["数据可视化"]
---

## 年份雷达图

```python
from pyecharts.globals import ThemeType
import pyecharts.options as opts
from pyecharts.charts import Radar, Timeline

vdata = [[[85, 65, 55, 90, 82]],[[50, 20, 45, 30, 75]],[[37, 80, 12, 50, 25]]]
series=['2016','2017','2018']
c = ['#00c2ff','#f9cf67','#e92b77'] 

tl = Timeline(init_opts=opts.InitOpts(theme=ThemeType.DARK)) # pyecharts 的bug ，bg_color 不起作用

for i in range(3):
    rad = (
        Radar()
        .set_global_opts(
            legend_opts=opts.LegendOpts(
                is_show=True,
                pos_bottom=45,
                item_width=14,
                item_height=14,
                textstyle_opts=opts.TextStyleOpts(
                    font_size=14,
                    color='#ade3ff'
                ) 
            )
        )
        .add_schema(
            schema=[
                opts.RadarIndicatorItem(name="灵活性", max_=100,color='#98F5FF'),
                opts.RadarIndicatorItem(name="功能性", max_=100,color='#98F5FF'),
                opts.RadarIndicatorItem(name="平稳性", max_=100,color='#98F5FF'),
                opts.RadarIndicatorItem(name="安全性", max_=100,color='#98F5FF'),
                opts.RadarIndicatorItem(name="耐用性", max_=100,color='#98F5FF'),
            ],
            center=['50%', '50%'],
            textstyle_opts=opts.TextStyleOpts(
                color='red',
            ),
            splitline_opt=opts.SplitLineOpts(
                    is_show= True,
                    linestyle_opts=opts.LineStyleOpts(
                        color='#98F5FF',
                        width=1,
                        type_='dotted'
                    )
                ),
            axisline_opt=opts.AxisLineOpts(
                    linestyle_opts=opts.AxisLineOpts(
                        linestyle_opts=opts.LineStyleOpts(
                        color='#98F5FF',
                        )
                    )
                ),
            splitarea_opt=opts.SplitAreaOpts(
                is_show=True,
                areastyle_opts=opts.AreaStyleOpts(
                    color=['#141c42', '#141c42']
                )
            )
        )
        .add(
            series_name=series[i],
            data=vdata[i],
            color=c[i],
            label_opts=opts.LabelOpts({                                               
                    "normal": {  
                    "show": True,            
                    "position": 'top',       
                    "distance": 2,            
                    "color": '#6692e2',         
                    "fontSize": 14,            
                    }  
                }
            ),  
        )
        .set_series_opts(
            linestyle_opts=opts.LineStyleOpts(
                width=2
            )
        )
    )
    tl.add(rad, "{}年".format(series[i]))

tl.render_notebook()
```

效果图如下：

![雷达图](/images/202009/24/雷达图.gif)

## 比较汽车性能

参数介绍：

1.通过设置InitOpts的bg_color参数，可以改变背景颜色

2.通过设置add_schema的schema参数，可以添加更多纬度变量

3.通过设置LineStyleOpts的color参数，可以设置线的颜色和宽度


```python
import pyecharts.options as opts
from pyecharts.charts import Radar

v1=[[110,9.7,6.2,56,150,1610]]
v2=[[174,6.9,6.8,66,237,1540]]
v3=[[154,8.9,7.8,76,250,1340]]

c=(
    Radar(init_opts=opts.InitOpts(bg_color="white")) #设置背景颜色
    .add_schema(
        schema=[
            opts.RadarIndicatorItem(name="最大功率(KW)",max_=200,color="black"),
            opts.RadarIndicatorItem(name="百米提速(秒)",max_=12,color="black"),
            opts.RadarIndicatorItem(name="综合油耗(L/100KM)",max_=20,color="black"),
            opts.RadarIndicatorItem(name="油箱容积(L)",max_=100,color="black"),
            opts.RadarIndicatorItem(name="马力(Ps)",max_=300,color="black"),
            opts.RadarIndicatorItem(name="整车质量KG()",max_=2000,color="black"),
        ],
        splitarea_opt=opts.SplitAreaOpts(
            is_show=True,
            areastyle_opts=opts.AreaStyleOpts(opacity=1) #是否显示分割区域，透明度设置为1
        ),
        textstyle_opts=opts.TextStyleOpts(color="#fff"),
    )
    .add(
        series_name="奥迪A4L时尚动感型",
        data=v1,
        linestyle_opts=opts.LineStyleOpts(color="red",width=2),#线的颜色、宽度
    )
    .add(
        series_name="凯迪拉克CT4精英型",
        data=v2,
        linestyle_opts=opts.LineStyleOpts(color="blue",width=2),
    )
    .add(
        series_name="沃尔沃560智行豪华版",
        data=v3,
        linestyle_opts=opts.LineStyleOpts(color="green",width=2),
    )
    .set_series_opts(label_opts=opts.LabelOpts(is_show=False))
    .set_global_opts(
        title_opts=opts.TitleOpts(title="汽车性能比较"),legend_opts=opts.LegendOpts()
    )
)

c.render_notebook()
```
![汽车性能比较](/images/202009/29/汽车性能比较.jpg)

## 比较不同城市近期天气状况

```python
from pyecharts import options as opts
from pyecharts.charts import Radar

value_bj = [
    [55, 9, 56, 0.46, 18, 6, 1],
    [25, 11, 21, 0.65, 34, 9, 2],
    [56, 7, 63, 0.3, 14, 5, 3],
    [33, 7, 29, 0.33, 16, 6, 4],
    [42, 24, 44, 0.76, 40, 16, 5],
    [82, 58, 90, 1.77, 68, 33, 6],
    [74, 49, 77, 1.46, 48, 27, 7],
    [78, 55, 80, 1.29, 59, 29, 8],
    [267, 216, 280, 4.8, 108, 64, 9],
    [185, 127, 216, 2.52, 61, 27, 10],
    [39, 19, 38, 0.57, 31, 15, 11],
    [41, 11, 40, 0.43, 21, 7, 12],
]
value_sh = [
    [91, 45, 125, 0.82, 34, 23, 1],
    [65, 27, 78, 0.86, 45, 29, 2],
    [83, 60, 84, 1.09, 73, 27, 3],
    [109, 81, 121, 1.28, 68, 51, 4],
    [106, 77, 114, 1.07, 55, 51, 5],
    [109, 81, 121, 1.28, 68, 51, 6],
    [106, 77, 114, 1.07, 55, 51, 7],
    [89, 65, 78, 0.86, 51, 26, 8],
    [53, 33, 47, 0.64, 50, 17, 9],
    [80, 55, 80, 1.01, 75, 24, 10],
    [117, 81, 124, 1.03, 45, 24, 11],
    [99, 71, 142, 1.1, 62, 42, 12],
]
c_schema = [
    {"name": "AQI", "max": 300, "min": 5,"color":"black"},
    {"name": "PM2.5", "max": 250, "min": 20,"color":"black"},
    {"name": "PM10", "max": 300, "min": 5,"color":"black"},
    {"name": "CO", "max": 5,"color":"black"},
    {"name": "NO2", "max": 200,"color":"black"},
    {"name": "SO2", "max": 100,"color":"black"},
]
c = (
    Radar(init_opts=opts.InitOpts(bg_color="white"))
    .add_schema(schema=c_schema, shape="polygon")
    .add("北京", value_bj,color="red",linestyle_opts=opts.LineStyleOpts(width=2))
    .add("上海", value_sh,color="green",linestyle_opts=opts.LineStyleOpts(width=2))
    .set_series_opts(label_opts=opts.LabelOpts(is_show=False))
    .set_global_opts(title_opts=opts.TitleOpts(title="一线城市空气质量比较"))
)

c.render_notebook()
```
![一线城市空气质量比较](/images/202009/29/一线城市空气质量比较.jpg)

分析：如上图所示，上海的空气质量比北京的质量好

