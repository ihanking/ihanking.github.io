---
title: Pyecharts之地图绘制
date: 2020-09-09
draft: false
tags: ["pyecharts"]
categories: ["数据可视化"]
---

## 静态图

```python
#导入包
from pyecharts.faker import Faker
from pyecharts import options as opts
from pyecharts.charts import Map
```

### 导出数据

```python
provinces='''北京
广东
上海
江苏
山东
浙江
湖南
湖北
辽宁
天津
河北
四川
河南
重庆
福建
江西
陕西
吉林
广西
安徽
黑龙江
山西
云南
新疆
海南
内蒙古
贵州
甘肃
宁夏
青海
西藏
广州
哈尔滨
香港
'''
value='''236
227
190
183
118
110
101
93
82
81
76
71
68
67
56
53
49
48
45
38
38
37
33
30
29
28
26
23
10
9
4
1
1
1
'''
```

### 将数据转为列表

```python
provinces=provinces.split('\n')
value=value.split('\n')
```

### 作图

```python
# 连续性数据显示，不同颜色不同省份
def map_visualmap() -> Map:
    c = (
        Map(init_opts=opts.InitOpts(width = '1200px', height='600px'))
        .add("", [list(z) for z in zip(provinces, value)], "china",
            label_opts=opts.LabelOpts(formatter="{b}\n {c}"))
        .set_global_opts(
            title_opts=opts.TitleOpts(title="xxx省市分布"),
            visualmap_opts=opts.VisualMapOpts(max_= 300),
            
        )
    )
    return c
 
city_ = map_visualmap()
# city_.render(path="./xxx省市分布.html")
# 在 Jupyter Notebook 中渲染图表
city_.render_notebook()
```

### 效果图

![xxx省市分布图](/images/202009/09/xxx省市分布图.png)


## 动态图

主要用到Timeline,Map库函数，具体步骤如下：

### 1.导入数据

```python
import pyecharts.options as opts
from pyecharts.globals import ThemeType
from pyecharts.commons.utils import JsCode
from pyecharts.charts import Timeline,Map
data = [
    {
        "time": 1980,
        "data": [
            {"name": "台湾", "value": [633.76, 12.28, "台湾"]},
            {"name": "香港", "value": [432.47, 8.38, "香港"]},
            {"name": "江苏", "value": [319.8, 6.2, "江苏"]},
            {"name": "上海", "value": [311.89, 6.05, "上海"]},
            {"name": "山东", "value": [292.13, 5.66, "山东"]},
            {"name": "辽宁", "value": [281, 5.45, "辽宁"]},
            {"name": "广东", "value": [249.65, 4.84, "广东"]},
            {"name": "四川", "value": [229.31, 4.44, "四川"]},
            {"name": "河南", "value": [229.16, 4.44, "河南"]},
            {"name": "黑龙江", "value": [221, 4.28, "黑龙江"]},
        ],
    },
]
```

### 2.绘制基本地图

```python
map_data = [
        [[x["name"], x["value"]] for x in d["data"]] for d in data if d["time"] == 1980
    ][0]
print(map_data)
min_data, max_data = (
    min([d[1][0] for d in map_data]),
    max([d[1][0] for d in map_data]),
)
map_chart = (
    Map()
    .add(
        series_name="",
        data_pair=map_data,
    )
)
map_chart.render_notebook()
```

### 3.为地图添加样式

LabelOpts：设置地图省市文字的大小和颜色

itemstyle_opts：设置地图底色和边界颜色

TitleOpts：设置标题和副标题样式

TooltipOpts：设置文本格式，鼠标触摸会显示

```python
map_data = [
        [[x["name"], x["value"]] for x in d["data"]] for d in data if d["time"] == 1980
    ][0]
min_data, max_data = (
    min([d[1][0] for d in map_data]),
    max([d[1][0] for d in map_data]),
)
map_chart = (
    Map()
    .add(
        series_name="",
        data_pair=map_data,
        label_opts=opts.LabelOpts(is_show=True,      #是否显示省市名字
                                  color='#EE1289',   #名字颜色
                                  font_size=10),     #名字大小

        is_map_symbol_show=True,                     #标记被选中的图形
        itemstyle_opts={
            "normal": {"areaColor": "#473C8B", "borderColor": "#404a59"},  #设置区域和边界颜色
            "emphasis": {
                "label": {"show": Timeline},
                "areaColor": "rgba(255,255,255, 0.5)",
            },
        },
    )
    .set_global_opts(
        title_opts=opts.TitleOpts(
            title="1980年以来中国各省GDP排名变化情况",   #设置标题
            subtitle="GDP单位:亿元",                  #设置副标题
            pos_left="center",                       #设置标题左右位置
            pos_top="top",                           #设置标题垂直位置
            title_textstyle_opts=opts.TextStyleOpts(
                font_size=25, color="rgba(238,0,238, 0.9)"  #设置标题字体和颜色
            ),
        ),
        tooltip_opts=opts.TooltipOpts(              #设置文本格式
            is_show=True,
            formatter=JsCode(
                """function(params) {
                if ('value' in params.data) {
                    return params.data.value[2] + ': ' + params.data.value[0];
                }
            }"""
            ),
        ),
        visualmap_opts=opts.VisualMapOpts(
            is_calculable=True,    #是否显示拖拽用的手柄
            dimension=0,           #组件映射维度
            pos_left="10",         #地图左右位置
            pos_top="center",      #地图上下位置
            range_text=["High", "Low"],
            range_color=["lightskyblue", "yellow", "orangered"],  #左侧视觉映射图形颜色
            textstyle_opts=opts.TextStyleOpts(color="#FFAEB9"),   #左侧视觉映射文本颜色
            min_=min_data,
            max_=max_data,
        ),
    )
)
map_chart.render_notebook()
```
![静态地图](/images/202010/02/静态地图.png)

### 4.导入timeline函数，让地图动起来

主要是将根据上述基本地图代码构造get_year_chart()函数，然后遍历时间列表，将返回结果依次导入timeline函数，就可以让地图动起来了

```python
def get_year_chart(year: int):
    map_data = [
        [[x["name"], x["value"]] for x in d["data"]] for d in data if d["time"] == year
    ][0]
    min_data, max_data = (
        min([d[1][0] for d in map_data]),
        max([d[1][0] for d in map_data]),
    )
    map_chart = (
        Map()
        .add(
            series_name="",
            data_pair=map_data,
            label_opts=opts.LabelOpts(is_show=True,      #是否显示省市名字
                                      color='#EE1289',   #名字颜色
                                      font_size=10),     #名字大小
             
            is_map_symbol_show=True,                     #标记被选中的图形
            itemstyle_opts={
                "normal": {"areaColor": "#473C8B", "borderColor": "#404a59"},  #设置区域和边界颜色
                "emphasis": {
                    "label": {"show": Timeline},
                    "areaColor": "rgba(255,255,255, 0.5)",
                },
            },
        )
        .set_global_opts(
            title_opts=opts.TitleOpts(
                title="1980年以来中国各省GDP排名变化情况",   #设置标题
                subtitle="GDP单位:亿元",                  #设置副标题
                pos_left="center",                       #设置标题左右位置
                pos_top="top",                           #设置标题垂直位置
                title_textstyle_opts=opts.TextStyleOpts(
                    font_size=25, color="rgba(238,0,238, 0.9)"  #设置标题字体和颜色
                ),
            ),
            tooltip_opts=opts.TooltipOpts(              #设置文本格式
                is_show=True,
                formatter=JsCode(
                    """function(params) {
                    if ('value' in params.data) {
                        return params.data.value[2] + ': ' + params.data.value[0];
                    }
                }"""
                ),
            ),
            visualmap_opts=opts.VisualMapOpts(
                is_calculable=True,    #是否显示拖拽用的手柄
                dimension=0,           #组件映射维度
                pos_left="10",         #地图左右位置
                pos_top="center",      #地图上下位置
                range_text=["High", "Low"],
                range_color=["lightskyblue", "yellow", "orangered"],  #左侧视觉映射图形颜色
                textstyle_opts=opts.TextStyleOpts(color="#FFAEB9"),   #左侧视觉映射文本颜色
                min_=min_data,
                max_=max_data,
            ),
        )
    )

    return map_chart

time_list = [1980, 2000, 2005, 2010, 2015]
timeline = Timeline(
    init_opts=opts.InitOpts(theme=ThemeType.LIGHT)
)
for y in time_list:
    m = get_year_chart(year=y)
    timeline.add(m, time_point=str(y))
timeline.add_schema(
    orient="vertical",
    is_auto_play=True,
    is_inverse=True,
    play_interval=1000,
    pos_left="null",
    pos_right="5",
    pos_top="20",
    pos_bottom="20",
    width="50",
    label_opts=opts.LabelOpts(is_show=True, color="#fff"),
)

timeline.render_notebook()
```
![动态地图](/images/202010/02/动态地图.gif)

