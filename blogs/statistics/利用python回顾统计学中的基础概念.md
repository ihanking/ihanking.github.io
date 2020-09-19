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

## 4.集中趋势

### 4.1均值、中位数、众数

均值：即平均值，其为一组数据的总和除以数据的个数。

中位数：将一组数据升序排列，位于该组数据最中间位置的值，就是中位数。如果数据个数为偶数，则取中间两个数值的均值。

众数：一组数据中出现次数对多的值。

### 4.2均值、中位数、众数三者区别

”数值变量”通常使用均值与中值表示集中趋势。

“类别变量”通常使用众数表示集中趋势。

计算均值的时候，因此容易受到极端值的影响。中位数与众数的计算不受极端值的影响，因此会相对稳定。

众数在一组数据中可能不是唯一的。但是均值和中位数都是唯一的。

在正态分布下，三者是相同的。在偏态分布下，三者会所有不同。

### 4.3不同分布下，均值、中位数、众数三者之间的关系

![分布](/images/202009/19/分布.png)

**记忆方法**：哪边的尾巴长，就叫做 “X偏”。左边的尾巴长，就叫做“左偏”；右边的尾巴长，就叫做“右偏”。并且均值离着尾巴最近，中位数总是在最中间，众数离着尾巴最远。

```python
mean = df["sepal length (cm)"].mean()
display(mean)
```

```python
median = df["sepal length (cm)"].median()
display(median)
```

```python
# 由于series中没有专门计算众数的函数，因此需要我们统计频数最大的那些值
s = df["sepal length (cm)"].value_counts()
s = s[s.values == s.values[0]]
s.index.tolist()
t = s.index[0]
t
```


```python
# scipy的stats模块中，可以计算众数
from scipy import stats
t = stats.mode(df["sepal length (cm)"])
# 注意：t展示的类字典格式的数据类型，mode展示众数，count用于展示众数出现的次数
display(t.mode,t.count)
```


```python
sns.distplot(df["sepal length (cm)"])

plt.axvline(mean,ls="-",color="r",label="均值")
plt.axvline(median,ls="-",color="g",label="中值")
plt.axvline(t,ls="-",color="indigo",label="众数")
plt.legend(loc="best")
```

## 5.分为数

### 5.1概念

分位数：将数据从小到大排列，通过n-1个分位数将数据分为n个区间，使得每个区间的数值的个数相等(近似相等)。

以四分位数为例，通过3个分位数，将数据划分为4个区间。(十分位数含义相同)

第一个分位数成为1/4分位数(下四分位数)，数据中有1/4的数据小于该分位数。

第二个分位数成为2/4分位数(中四分位数，也叫中位数)，数据中有2/4的数据小于该分位数。

第三个分位数成为3/4分位数(下四分位数)，数据中有3/4的数据小于该分位数。

![分位数](/images/202009/19/分位数.png)



