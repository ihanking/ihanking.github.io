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