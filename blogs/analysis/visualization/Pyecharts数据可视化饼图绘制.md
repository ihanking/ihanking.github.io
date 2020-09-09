---
title: Pyecharts数据可视化饼图绘制
date: 2020-09-09
draft: false
tags: ["pyecharts"]
categories: ["数据可视化"]
---

## 导入包

```python
from pyecharts import options as opts
from pyecharts.charts import Pie
from pyecharts.faker import Faker
```

## 绘制图表

```python

p = (
    Pie()
    .add("", [list(z) for z in zip(Faker.choose(), Faker.values())])
    .set_colors(["blue", "green", "yellow", "red", "pink", "orange", "purple"])
    .set_global_opts(title_opts=opts.TitleOpts(title="Pie-设置颜色"))
    .set_series_opts(label_opts=opts.LabelOpts(formatter="{b}: {c}"))
    #.render("pie_set_color.html")
)
```

## 输出结果

```python
p.render_notebook()
```

![饼图绘制01](/images/202009/09/饼图绘制01.png)

