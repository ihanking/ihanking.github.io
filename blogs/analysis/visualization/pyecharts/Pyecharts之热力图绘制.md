---
title: Pyecharts之热力图绘制
date: 2020-09-24
draft: false
tags: ["pyecharts"]
categories: ["数据可视化"]
---

```python
from pyecharts import options as opts
from pyecharts.charts import Geo
from pyecharts.faker import Faker
from pyecharts.globals import GeoType

c = (
    Geo()
    .add_schema(maptype="广东", label_opts=opts.LabelOpts(is_show=True))
    .add(
        "热力图",
        [list(z) for z in zip(Faker.guangdong_city, Faker.values())],
        type_=GeoType.HEATMAP,
    )
    .set_series_opts(label_opts=opts.LabelOpts(is_show=True))
    .set_global_opts(
        visualmap_opts=opts.VisualMapOpts(), title_opts=opts.TitleOpts(title="广东地图")
    )
)
c.render_notebook()
```
![热力图](/images/202009/24/热力图.png)
