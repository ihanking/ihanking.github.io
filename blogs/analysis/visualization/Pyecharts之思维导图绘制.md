---
title: Pyecharts之思维导图绘制
date: 2020-09-22
draft: false
tags: ["pyecharts"]
categories: ["数据可视化"]
---

## 基本思维导图

>整个数据是1个列表，列表内只有1个字典元素，字典以“name”为键的值为思维导图的起点，以“children”为键的值为name的下一节点，其值仍为列表格式，依次类推。

```python
from pyecharts import options as opts
from pyecharts.charts import Tree
data = [
    {
        "name": "python变量",
        "children": [
            {"name": "字符串",
            "children": [{"name": "实例1：'abc'"}, {"name": "实例2：'123abc'"}]},
            {"name": "列表",
            "children": [{"name": "实例1：[a,b,c]"}, {"name": "实例2：'[1,2,3]"}]},
            {"name": "字典",
            "children": [{"name": "实例1：{1:'a','2':'b'}}"}, {"name": "实例2：'{a:[1,2,3],'2':(1,2))}"}]},
            {"name": "元组",
             "children": [{"name": "实例1：(1,2,3)}"}, {"name": "实例2：(a,b,c)"}]}
]}
]
c = (
    Tree()
    .add("", data)
)
c.render_notebook()
```
![基本思维导图](/images/202009/22/基本思维导图.png)

## 向左发散思维导图

>collapse_interval：代表分支之间的间隔,orient：正交布局，对应有 水平 方向的 从左到右，从右到左；以及垂直方向的从上到下，从下到上。取值分别为 'LR' , 'RL', 'TB', 'BT'。

```python
from pyecharts import options as opts
from pyecharts.charts import Tree
data = [
    {
        "name": "python变量",
        "children": [
            {"name": "字符串",
            "children": [{"name": "实例1：'abc'"}, {"name": "实例2：'123abc'"}]},
            {"name": "列表",
            "children": [{"name": "实例1：[a,b,c]"}, {"name": "实例2：'[1,2,3]"}]},
            {"name": "字典",
            "children": [{"name": "实例1：{1:'a','2':'b'}}"}, {"name": "实例2：'{a:[1,2,3],'2':(1,2))}"}]},
            {"name": "元组",
             "children": [{"name": "实例1：(1,2,3)}"}, {"name": "实例2：(a,b,c)"}]}
]}
]
c = (
    Tree()
    .add("", 
        data,
        collapse_interval=3,
        layout = "orthogonal",
        orient="RL",)
)
c.render_notebook()
```
![向左发散思维导图](/images/202009/22/向左发散思维导图.png)

## 径向分布思维导图

>所谓径向，即是不像上面那种垂直或者水平分布，而是以根节点为圆心，每一层节点为环，一层层向外发散绘制而成的布局

>layout:代表布局，有2种形式，上述两种为'orthogonal'正交分布，'radial'代表径向分布，请大家注意，径向分布下orient参数是没有意义的

```python
from pyecharts import options as opts
from pyecharts.charts import Tree
data = [
    {
        "name": "python变量",
        "children": [
            {"name": "字符串",
            "children": [{"name": "实例1：'abc'"}, {"name": "实例2：'123abc'"}]},
            {"name": "列表",
            "children": [{"name": "实例1：[a,b,c]"}, {"name": "实例2：'[1,2,3]"}]},
            {"name": "字典",
            "children": [{"name": "实例1：{1:'a','2':'b'}}"}, {"name": "实例2：'{a:[1,2,3],'2':(1,2))}"}]},
            {"name": "元组",
             "children": [{"name": "实例1：(1,2,3)}"}, {"name": "实例2：(a,b,c)"}]}
]}
]
c = (
    Tree()
    .add("", 
        data,
        collapse_interval=3,
        layout="radial",)
)
c.render_notebook()
```
![径向分布思维导图](/images/202009/22/径向分布思维导图.png)

## 圆形思维导图

>pos_top：tree组件离容器上侧的距离,pos_bottom：tree 组件离容器下侧的距离  ,symbol：标记的图形,symbol_size：标记的大小

```python
from pyecharts import options as opts
from pyecharts.charts import Tree
import requests,json
response=requests.get('https://echarts.apache.org/examples/data/asset/data/flare.json')
data=json.loads(response.text)
c = (
    Tree()
    .add("", 
        data=[data],
        pos_top="18%",
        pos_bottom="14%",
        layout="radial",
        symbol="emptyCircle",
        symbol_size=7,)
    .set_global_opts(
        tooltip_opts=opts.TooltipOpts(trigger="item", trigger_on="mousemove")
    )
)
c.render_notebook()
```
![圆形思维导图](/images/202009/22/圆形思维导图.png)

