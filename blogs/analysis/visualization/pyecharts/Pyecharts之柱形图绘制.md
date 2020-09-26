---
title: Pyecharts之柱形图绘制
date: 2020-09-24
draft: false
tags: ["pyecharts"]
categories: ["数据可视化"]
---

## 优雅柱形图

```python
import pyecharts.options as opts
from pyecharts.charts import Bar, Line, Grid
from pyecharts.globals import ThemeType

x_data = [str(i)+"月份" for i in range(1, 13)]
y_data = [709, 1917, 2455, 2610, 1719, 1433,1544, 3285, 5208, 3372, 2484, 4078]
y2_data = [327, 1776, 507, 1200, 800, 482, 204, 1390, 1001, 951, 381, 220]
y3_data = [1036, 3693, 2962, 3810, 2519,1915, 1748, 4675, 6209, 4323, 2865, 4298]

# 折线图对象
bar = Bar(opts.InitOpts(bg_color="#344b58"))

# 设置图形的全局参数
(
    bar.set_global_opts(title_opts=opts.TitleOpts(
        title="本年银行客户人数统计",
        subtitle="BY xxx",
        title_textstyle_opts=opts.TextStyleOpts(
            color="#90979c",
            font_size="16"
        )
    ),
        legend_opts=opts.LegendOpts(
            pos_top="8%",
            textstyle_opts=opts.TextStyleOpts(
                color='#90979c'
            )
        ),
        tooltip_opts=opts.TooltipOpts(
            trigger="axis",
            axis_pointer_type="shadow",
            textstyle_opts=opts.TextStyleOpts(
                color="#fff"
            )
        ),
        xaxis_opts=opts.AxisOpts(
            type_="category",
            axisline_opts=opts.AxisLineOpts(
                linestyle_opts=opts.LineStyleOpts(
                    color="#90979c"
                )
            ),
            splitline_opts=opts.SplitLineOpts(
                is_show=False
            ),
            axistick_opts=opts.AxisTickOpts(
                is_show=False
            ),
            splitarea_opts=opts.SplitAreaOpts(
                is_show=False
            ),
            axislabel_opts=opts.LabelOpts(
                interval=0
            )
        ),
        yaxis_opts=opts.AxisOpts(
            type_="value",
            axistick_opts=opts.AxisTickOpts(
                is_show=False
            ),
            splitline_opts=opts.SplitLineOpts(
                is_show=False
            ),
            axisline_opts=opts.AxisLineOpts(
                linestyle_opts=opts.LineStyleOpts(
                    color="#90979c"
                )
            ),
            axislabel_opts=opts.LabelOpts(
                interval=0
            ),
            splitarea_opts=opts.SplitAreaOpts(
                is_show=False
            )
        ),
        datazoom_opts=opts.DataZoomOpts(
            is_show=True,
            xaxis_index=[0],
            pos_bottom=30,
            start_value=10,
            end_value=80
        )
    )
    .add_xaxis(xaxis_data=x_data)
    .add_yaxis(
        series_name="女",
        y_axis=y_data,
        stack="总量",
        label_opts=opts.LabelOpts(
            is_show=True,
            color="#fff",
            position="inside"
        ),
        itemstyle_opts=opts.ItemStyleOpts(
            color="rgba(255,144,128,1)"
        )
    )
    .add_yaxis(
        series_name="男",
        y_axis=y2_data,
        stack="总量",
        label_opts=opts.LabelOpts(
            is_show=True,
            color="#fff",
            position="inside"
        ),
        itemstyle_opts=opts.ItemStyleOpts(
            color="rgba(0,191,183,1)"
        )
    )
)

# 折线图对象
line = Line()
# 设置图形的全局参数
(
    line.set_global_opts()
    .add_xaxis(xaxis_data=x_data)
    .add_yaxis(
        series_name="总数",
        y_axis=y3_data,
        symbol="circle",
        symbol_size=10,
        is_symbol_show=True,
        itemstyle_opts=opts.ItemStyleOpts(
            color="rgba(252,230,48,1)",
            border_width=0,

        ),
        label_opts=opts.LabelOpts(
            is_show=True,
            position="top"
        ),
        linestyle_opts=opts.LineStyleOpts(
            width=2,
        )
    )
)

bar.overlap(line)
(
    Grid(opts.InitOpts(bg_color="#344b58"))
    .add(
        bar,
        opts.GridOpts()
    )
).render_notebook()
```

![柱形图](/images/202009/24/柱形图.png)

## 渐变柱形图

```python
import pyecharts.options as opts
from pyecharts.charts import Bar, Line, Grid
from pyecharts.globals import ThemeType
from pyecharts.commons.utils import JsCode

x_data = ['2012','2013','2014','2015','2016','2017','2018','2019']
y1_data = [200, 400, 300, 300, 300, 400, 400, 600, 300]
y2_data = [350, 500, 500, 500, 500, 400,200, 500, 500]
y3_data = [400, 600, 700, 700, 1000, 100, 400, 900, 700]


# 折线图对象
bar = Bar(opts.InitOpts(bg_color="#323a5e"))
# 设置图形的全局参数
(
    bar.set_global_opts(
        legend_opts=opts.LegendOpts(
            pos_top=12,
            pos_right=10,
            textstyle_opts=opts.TextStyleOpts(
                color='#fff'
            )
        ),
        tooltip_opts=opts.TooltipOpts(
            trigger="axis",
            axis_pointer_type="shadow",
            textstyle_opts=opts.TextStyleOpts(
                color="#fff"
            )
        ),
        xaxis_opts=opts.AxisOpts(
            type_="category",
            axisline_opts=opts.AxisLineOpts(
                linestyle_opts=opts.LineStyleOpts(
                    color="white"
                )
            ),
            axislabel_opts=opts.LabelOpts(
            )
        ),
        yaxis_opts=opts.AxisOpts(
            type_="value",
            max_=1200,
            axistick_opts=opts.AxisTickOpts(
                is_show=False
            ),
            splitline_opts=opts.SplitLineOpts(
                is_show=True,
                linestyle_opts=opts.LineStyleOpts(
                    color='rgba(255,255,255,0.3)'
                ),
            ),
            axisline_opts=opts.AxisLineOpts(
                is_show=False,
                linestyle_opts=opts.LineStyleOpts(
                    color="white"
                )
            ),
            axislabel_opts=opts.LabelOpts()
        ),
        datazoom_opts=opts.DataZoomOpts(
            is_show=True,
            pos_bottom='2%',
            pos_top='94%'        
        )
    )
    .add_xaxis(xaxis_data=x_data)
    .add_yaxis(
        series_name="1",
        y_axis=y1_data,
        label_opts=opts.LabelOpts(
            is_show=False
        ),
        bar_width='15%',
        itemstyle_opts={
            "normal": {
                "color": JsCode(
                    """new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#fccb05'
                }, {
                    offset: 1,
                    color: '#f5804d'
                }])"""
                ),
                "barBorderRadius": 11,
            }
        }
    )
    .add_yaxis(
        series_name="2",
        y_axis=y2_data,
        label_opts=opts.LabelOpts(
            is_show=False
        ),
        bar_width='15%',
        itemstyle_opts={
            "normal": {
                "color": JsCode(
                    """new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#8bd46e'
                }, {
                    offset: 1,
                    color: '#09bcb7'
                }])"""
                ),
                "barBorderRadius": 11,
            }
        }
    )
    .add_yaxis(
        series_name="3",
        y_axis=y3_data,
        label_opts=opts.LabelOpts(
            is_show=False
        ),
        bar_width='15%',
        itemstyle_opts={
            "normal": {
                "color": JsCode(
                    """new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#248ff7'
                }, {
                    offset: 1,
                    color: '#6851f1'
                }])"""
                ),
                "barBorderRadius": 11,
            }
        }
    )

).render_notebook()
```
![渐变柱形图](/images/202009/24/渐变柱形图.png)


