---
title: "PyEcharts可视化入门"
date: 2020-09-01
draft: false
tags: ["pyecharts"]
categories: ["数据可视化"]
---

```python
from pyecharts.charts import Bar

bar=Bar()

#参数设置：x轴数据
bar.add_xaxis(['衬衫','羊毛衫','雪纺衫', "裤子", "高跟鞋", "袜子"])
#参数设置：y轴数据
bar.add_yaxis("商家A",[5,20,36,10,75,90])
#图标渲染：默认文件名：render.html,默认路径：当前路径
bar.render()
```

结果会生成一个`render.html`文件

浏览器打开显示如下

![pyecharts入门01](/images/202009/pyecharts入门01.png)

## 图表类型
```python
class _ChartType:
    BAR: str = "bar"
    BAR3D: str = "bar3D"
    BOXPLOT: str = "boxplot"
    EFFECT_SCATTER: str = "effectScatter"
    FUNNEL: str = "funnel"
    GAUGE: str = "gauge"
    GEO: str = "geo"
    GRAPH: str = "graph"
    HEATMAP: str = "heatmap"
    KLINE: str = "candlestick"
    LINE: str = "line"
    LINE3D: str = "line3D"
    LINES: str = "lines"
    LINES3D: str = "lines3D"
    LIQUID: str = "liquidFill"
    MAP: str = "map"
    MAP3D: str = "map3D"
    PARALLEL: str = "parallel"
    PICTORIALBAR: str = "pictorialBar"
    PIE: str = "pie"
    POLAR: str = "polar"
    RADAR: str = "radar"
    SANKEY: str = "sankey"
    SCATTER: str = "scatter"
    SCATTER3D: str = "scatter3D"
    SUNBURST: str = "sunburst"
    THEMERIVER: str = "themeRiver"
    TREE: str = "tree"
    TREEMAP: str = "treemap"
    WORDCLOUD: str = "wordCloud"
    CUSTOM: str = "custom"
```


## 配置参数

![配置参数](/images/202009/PyEcharts配置参数.jpg)

### 初始化配置项

**InitOpts**

```python
class InitOpts(
    # 图表画布宽度，css 长度单位。
    width: str = "900px",

    # 图表画布高度，css 长度单位。
    height: str = "500px",

    # 图表 ID，图表唯一标识，用于在多图表时区分。
    chart_id: Optional[str] = None,

    # 渲染风格，可选 "canvas", "svg"
    # # 参考 `全局变量` 章节
    renderer: str = RenderType.CANVAS,

    # 网页标题
    page_title: str = "Awesome-pyecharts",

    # 图表主题
    theme: str = "white",

    # 图表背景颜色
    bg_color: Optional[str] = None,

    # 远程 js host，如不设置默认为 https://assets.pyecharts.org/assets/"
    # 参考 `全局变量` 章节
    js_host: str = "",

    # 画图动画初始化配置，参考 `global_options.AnimationOpts`
    animation_opts: Union[AnimationOpts, dict] = AnimationOpts(),
)
```

接下来，我们通过一个案例，来具体了解初始化配置项的设置。首先来看一下案例执行之后的效果，初始化配置项的设置效果如下所示：

```python
from pyecharts import options as opts
from pyecharts.charts import Bar
from pyecharts.faker import Faker


from pyecharts.globals import ThemeType

c = (
    Bar(init_opts=opts.InitOpts(theme=ThemeType.LIGHT,
                                width="1024px",
                                height="600px",

                                bg_color="#d9d6c3"
                                ))
    .add_xaxis(Faker.choose())
    .add_yaxis("商家 A", Faker.values())
    .add_yaxis("商家 B", Faker.values())
    .render("demo_bar_01.html")
)
```
