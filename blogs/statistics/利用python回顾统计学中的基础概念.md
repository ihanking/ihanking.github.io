---
title: 利用python回顾统计学中的基础概念
date: 2020-09-19
draft: false
categories: ["统计学"]
---

本文用到的相关python库

```python
import numpy as np
import pandas as pd
import matplotlib as mpl
import matplotlib.pyplot as plt
import seaborn as sns
import warnings
from sklearn.datasets import load_iris
from scipy import stats

sns.set(style="darkgrid")
mpl.rcParams["font.family"] = "SimHei"
mpl.rcParams["axes.unicode_minus"] = False
warnings.filterwarnings("ignore")
```

## 1.描述性统计

描述性统计，就是从总体数据中提取变量的主要信息，从而从总体层面上对数据进行统计性描述

在统计过程中，通常会配合绘制相关的统计图进行辅助

## 2.统计量

描述性统计所提取的含有总体性值的信息，称为统计量

### 2.1常用统计量

频数与频率
- 频数
- 频率

集中趋势分析
- 均值
- 中位数
- 众数
- 分位数

离散程度分析
- 极差
- 方差
- 标准差

分布形状
- 偏度
- 峰度

### 2.2变量的类型

类别变量
- 无序类别变量
- 有序类别变量

数值变量
- 连续变量
- 离散型变量


## 3.频率与频数

### 3.1概念

数据的频数与频率适用于类别变量

频数：指一组数据中类别变量的每个不同取值出现的次数

频率：指每个类别变量的频数与总次数的比值，通常采用百分数表示

### 3.2代码

>计算鸢尾花数据集中每个类别的频数和频率

```python
iris = load_iris()
# iris是一个类字典格式的数据，data、target、feature_names、target_names都是键
display(iris.data[:5],iris.target[:5])
# feature_names是每一列数据的特征名。target_names是鸢尾花的属种名
display(iris.feature_names,iris.target_names)

# reshape(-1,1)表示将原始数组变为1列，但是行数这里我写一个-1，表示系统
# 会根据我指定的列数，自动去计算出行数。reshape(1,-1)含义同理
dt = np.concatenate([iris.data,iris.target.reshape(-1,1)],axis=1)
df = pd.DataFrame(dt,columns=iris.feature_names + ["types"])
display(df.sample(5))

# 计算鸢尾花数据集中每个类别出现的频数
frequency = df["types"].value_counts()
display(frequency)
percentage = frequency / len(df)
display(percentage)

frequency.plot(kind="bar")
```


