---
title: Pyecharts之玫瑰图绘制
date: 2020-09-24
draft: false
tags: ["pyecharts"]
categories: ["数据可视化"]
---

## 玫瑰图

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

## 南丁格尔玫瑰图

```python
import pandas as pd
from pyecharts.charts import Pie
from pyecharts import options as opts

# 准备数据
provinces = ['北京','上海','黑龙江','吉林','辽宁','内蒙古','新疆','西藏','青海','四川','云南','陕西','重庆',
             '贵州','广西','海南','澳门','湖南','江西','福建','安徽','浙江','江苏','宁夏','山西','河北','天津']

num = [1,1,1,17,9,22,23,42,35,7,20,21,16,24,16,21,37,12,13,14,13,7,22,8,16,13,13]

color_series = ['#FAE927','#E9E416','#C9DA36','#9ECB3C','#6DBC49',
                '#37B44E','#3DBA78','#14ADCF','#209AC9','#1E91CA',
                '#2C6BA0','#2B55A1','#2D3D8E','#44388E','#6A368B'
                '#7D3990','#A63F98','#C31C88','#D52178','#D5225B',
                '#D02C2A','#D44C2D','#F57A34','#FA8F2F','#D99D21',
                '#CF7B25','#CF7B25','#CF7B25']
             
 # 创建数据框
df = pd.DataFrame({'provinces': provinces, 'num': num})
# 降序排序
df.sort_values(by='num', ascending=False, inplace=True)

# 提取数据
v = df['provinces'].values.tolist()
d = df['num'].values.tolist()

# 实例化Pie类
pie1 = Pie(init_opts=opts.InitOpts(width='1000px', height='850px'))

# 设置颜色
pie1.set_colors(color_series)

# 添加数据，设置饼图的半径，是否展示成南丁格尔图
pie1.add("", [list(z) for z in zip(v, d)],
        radius=["30%", "135%"],
        center=["50%", "65%"],
        rosetype="area"
        )

# 设置全局配置项
pie1.set_global_opts(
    title_opts=opts.TitleOpts(title='玫瑰图示例'
    ),
    legend_opts=opts.LegendOpts(is_show=False
    ),
    toolbox_opts=opts.ToolboxOpts()
)

# 设置系列配置项
pie1.set_series_opts(label_opts=opts.LabelOpts(
    is_show=True, position="inside", font_size=12,
    formatter="{b}:{c}天", font_style="italic",
    font_weight="bold", font_family="Microsoft YaHei"
    ),
)
# 生成html文档
# pie1.render('南丁格尔玫瑰图.html')
pie1.render_notebook()
```
![南丁格尔玫瑰图](/images/202009/26/南丁格尔玫瑰图.png)


## 玫瑰花图

### 基本极坐标图

>数据data是1个列表，列表内的元素为元组，单个元组有2个数据，第一个数据为半径，第二个数据相当于角度

```python
import random
from pyecharts import options as opts
from pyecharts.charts import Polar

data=[(i, random.randint(1, 100)) for i in range(101)]
c=(
    Polar()
    .add("", data, type_="scatter", label_opts=opts.LabelOpts(is_show=False))
    .set_global_opts(title_opts=opts.TitleOpts(title="基本极坐标图"))
)

c.render_notebook()
```
![基本极坐标图1](/images/202009/26/基本极坐标图1.png)

把type改为bar

```python
c=(
    Polar()
    .add("", data, type_="bar", label_opts=opts.LabelOpts(is_show=False))
    .set_global_opts(title_opts=opts.TitleOpts(title="基本极坐标图"))
)

c.render_notebook()
```
![基本极坐标图2](/images/202009/26/基本极坐标图2.png)

改为折线line

```python
c=(
    Polar()
    .add("", data, type_="line", label_opts=opts.LabelOpts(is_show=False))
    .set_global_opts(title_opts=opts.TitleOpts(title="基本极坐标图"))
)

c.render_notebook()
```
![基本极坐标图3](/images/202009/26/基本极坐标图3.png)

### 极半径图

>RadiusAxisOpts：极坐标系径向轴配置项; AngleAxisOpts：极坐标系角度轴配置项

```python
from pyecharts import options as opts
from pyecharts.charts import Polar
from pyecharts.faker import Faker

c=(
    Polar()
    .add_schema(
        radiusaxis_opts=opts.RadiusAxisOpts(
            data=Faker.week, #数据项
            type_="category", #坐标轴类型
        ),
        angleaxis_opts=opts.AngleAxisOpts(
            is_clockwise=True, #是否顺时针排布
            max_=10, #坐标轴刻度最大值
        ),
    )
    .add("A",[1,2,3,4,3,5,1],type_='bar')
    .set_global_opts(
        title_opts=opts.TitleOpts(
            title="Polar-RadiusAxis"
        )
    )
)

c.render_notebook()
```
![极半径图](/images/202009/26/极半径图.png)

### 玫瑰花图

>首先我们要引入数学中的sin函数，假设角度为theta，则长度为n(m+sin(theta)),n和m都为常量，那么元组（长度，角度）就可以在极坐标中确定一个点，把一系列的点放入列表中，并用折线图连接起来，就可以画出漂亮的数学图形。

```python
import math
import pyecharts.options as opt
from pyecharts.charts import Polar

data=[]
for i in range(0,101):
    theta=i/100 * 360
    r = 5 * (1+math.sin(theta/180*math.pi))
    data.append([r,theta])

c=(
    Polar()
    .add(series_name='line', data=data, label_opts=opts.LabelOpts(is_show=False))
    .add_schema(
        angleaxis_opts=opts.AngleAxisOpts(
            start_angle=0,
            type_='value',
            is_clockwise=True
        )
    )
    .set_global_opts(
        tooltip_opts=opts.TooltipOpts(
            trigger='axis',
            axis_pointer_type='cross'
        ),
        title_opts=opts.TitleOpts(
            title='极坐标双数值轴'
        ),
    )
)

c.render_notebook()
```
![玫瑰花图1](/images/202009/26/玫瑰花图1.png)

**AngleAxisOpts参数介绍：**

start_angle：极坐标开始的角度

type_：坐标轴类型，'value'表示数值轴，适用于连续数据

is_clockwise：是否为顺时针

**TooltipOpts参数介绍：**

trigger：触发类型，'axis'表示坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用

axis_pointer_type：指示器类型，'cross'表示十字准星指示器

开始绘制完整的玫瑰花图

```python
import math
from pyecharts import options as opts
from pyecharts.charts import Polar

data=[]
for i in range(401):
    t=i/180 * math.pi
    r=math.sin(9*t)
    data.append([r, i])

c=(
    Polar()
    .add_schema(angleaxis_opts=opts.AngleAxisOpts(start_angle=0,min_=0))
    .add('flower', data, label_opts=opts.LabelOpts(is_show=False))
    .set_global_opts(title_opts=opts.TitleOpts(title='Polar-Flower'))
)

c.render_notebook()
```
![玫瑰花图2](/images/202009/26/玫瑰花图2.png)
