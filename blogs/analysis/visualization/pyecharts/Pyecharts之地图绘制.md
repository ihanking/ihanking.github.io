---
title: Pyecharts之地图绘制
date: 2020-09-09
draft: false
tags: ["pyecharts"]
categories: ["数据可视化"]
---

## 导入包

```python
from pyecharts.faker import Faker
from pyecharts import options as opts
from pyecharts.charts import Map
```

## 导出数据

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

## 作图

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
