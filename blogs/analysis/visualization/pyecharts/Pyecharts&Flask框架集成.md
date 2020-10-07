---
title: Pyecharts&Flask框架集成
date: 2020-10-05
draft: false
tags: ["pyecharts","flask"]
categories: ["数据可视化"]
---



## 渲染图表

前后端混合模式的图表渲染，是 Flask 应用创建过程和 PyEcharts 图表创建过程的整合。一个简单的示例程序如下：

```python
from flask import Flask
from jinja2 import Markup,Environment,FileSystemLoader
from pyecharts.globals import CurrentConfig

#实例1：前后端混合模式
#设置模板文件环境变量
CurrentConfig.GLOBAL_ENV=Environment(loader=FileSystemLoader("./templates"))

from pyecharts import options as opts
from pyecharts.charts import Bar

#创建flask对象
app=Flask(__name__, static_folder="templates")

#参数配置
def bar_base()->Bar:
    c=(
        Bar()
        .add_xaxis(["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"])
        .add_yaxis("商家A", [5, 20, 36, 10, 75, 90])
        .add_yaxis("商家B", [15, 25, 16, 55, 48, 8])
        .set_global_opts(title_opts=opts.TitleOpts(title="Bar-柱状图", subtitle="Flask整合：前后端混合模式"))
    )
    return c

#路由设置
@app.route("/")
def index():
    #图表渲染：内置模式
    c=bar_base()
    return Markup(c.render_embed())

#主函数
if __name__ == "__main__":
    app.run()
```

结果展示：
<!-- ![pyecharts&flask01](/images/202010/05/pyecharts&flask01.png) -->

![pyecharts&flask01](http://note.youdao.com/yws/public/resource/cfed69977211a7df0122a51ffe1f460a/xmlnote/WEBRESOURCE3e1b85e34692feae6e16875fc8fcff4d/28623)
