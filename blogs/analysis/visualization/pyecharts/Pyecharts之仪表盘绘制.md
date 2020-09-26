---
title: Pyecharts之仪表盘绘制
date: 2020-09-14
draft: false
tags: ["pyecharts"]
categories: ["数据可视化"]
---

>仪表盘 (Gauge) 是一种拟物化的图表，刻度表示度量，指针表示维度，指针角度表示数值。仪表盘图表就像汽车的速度表一样，有一个圆形的表盘及相应的刻度，有一个指针指向当前数值。目前很多的管理报表或报告上都是用这种图表，以直观的表现出某个指标的进度或实际情况。

## 一、基本型仪表盘

```python
from pyecharts import options as opts
from pyecharts.charts import Gauge

c=(
    Gauge()
    .add("",[("工作进展状况", 78)])
    .set_global_opts(title_opts=opts.TitleOpts(title="基本型仪表盘"))
)
c.render_notebook()
```

![基本型仪表盘](/images/202009/14/基本型仪表盘.png)

## 二、给仪表盘设置颜色

将仪表盘划分为0-0.3、0.3-0.7、0.7-1三个段，并设置不同的颜色

```python
from pyecharts import options as opts
from pyecharts.charts import Gauge

c = (
    Gauge()
    .add(
        "业务指标",
        [("完成率", 66)],
        axisline_opts=opts.AxisLineOpts(
            linestyle_opts=opts.LineStyleOpts(
                color=[(0.3, "#67e0e3"), (0.7, "#37a2da"), (1, "#fd666d")], width=30
            )
        ),
    )
    .set_global_opts(
        title_opts=opts.TitleOpts(title="设置不同颜色"),
        legend_opts=opts.LegendOpts(is_show=False),
    )
)
c.render_notebook()
```
![设置不同颜色](/images/202009/14/设置不同颜色.png)

## 三、改变仪表盘刻度

如果想让仪表盘的刻度变成5，那么我们可以把它分成20份（split_number=20）

```python
from pyecharts import options as opts
from pyecharts.charts import Gauge

c = (
    Gauge()
    .add(
        "业务指标",
        [("完成率", 55.5)],
        split_number=20,
        axisline_opts=opts.AxisLineOpts(
            linestyle_opts=opts.LineStyleOpts(
                color=[(0.3, "#00CDCD"), (0.7, "#CDBE70"), (1, "#00EE00")], width=30
            )
        ),
        detail_label_opts=opts.LabelOpts(formatter="{value}"),
    )
    .set_global_opts(
        title_opts=opts.TitleOpts(title="Gauge-分割段数-Label"),
        legend_opts=opts.LegendOpts(is_show=False),
    )
)
c.render_notebook()
```
![仪表盘刻度](/images/202009/14/仪表盘刻度.png)

## 四、改变仪表盘大小

如果想让仪表盘的刻度变成5，那么我们可以把它分成20份（split_number=20）

```python
from pyecharts import options as opts
from pyecharts.charts import Gauge

c = (
    Gauge()
    .add("", [("完成率", 66.6)], radius="60%")
    .set_global_opts(title_opts=opts.TitleOpts(title="半径改为 60%"))
)
c.render_notebook()
```
![仪表盘大小](/images/202009/14/仪表盘大小.png)

## 五、改变仪表盘内文字字体

可以分别设置大小（font_size）、颜色（color）和字体（font_family）

```python
from pyecharts import options as opts
from pyecharts.charts import Gauge

c=(
    Gauge()
    .add(
        "",
        [("完成率", 66.6)],
        title_label_opts=opts.LabelOpts(
            font_size=40, color="blue", font_family="Microsoft YaHei"
        ),
    )
    .set_global_opts(title_opts=opts.TitleOpts(title="Gauge-改变轮盘内的字体"))
)
c.render_notebook()
```

![仪表盘内文字字体](/images/202009/14/仪表盘内文字字体.png)
