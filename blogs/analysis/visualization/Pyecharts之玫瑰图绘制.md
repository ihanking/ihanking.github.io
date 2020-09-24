---
title: Pyecharts之玫瑰图绘制
date: 2020-09-24
draft: false
tags: ["pyecharts"]
categories: ["数据可视化"]
---

```python
from pyecharts import options as opts
from pyecharts.charts import Pie
from pyecharts.faker import Faker

labels = ['可乐', '雪碧', '橙汁', '奶茶', '冰啤酒', '柠檬水']
values = [6, 12, 28, 52, 72, 96]
v = Faker.choose()
c = (
    Pie()
    .add(
        "",
        [list(z) for z in zip(v, Faker.values())],
        radius=["40%", "75%"],
        center=["22%", "50%"],
        rosetype="radius",
        label_opts=opts.LabelOpts(is_show=False),
    )
    .add(
        "",
        [list(z) for z in zip(labels, values)],
        radius=["40%", "75%"],
        center=["70%", "50%"],
        rosetype="area",
    )
    .set_global_opts(title_opts=opts.TitleOpts(title="玫瑰图"),
                     legend_opts=opts.LegendOpts(is_show=False)
                     )
)
c.render_notebook()
```
![玫瑰图](/images/202009/24/玫瑰图.png)
