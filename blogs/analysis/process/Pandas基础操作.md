---
title: Pandas基础操作
date: 2020-09-02
draft: false
tags: ["pandas"]
categories: ["数据处理"]
---

## 行列操作

1.修改列名
```python
data.columns=["columns1","columns2","columns3"]
```

2.找出空值所在行

```python
data[data['column1'].isnull()]
#或者
result=data[data.isnull().T.any()]
```
注意`isnull()`的结果需要求转置之后，才能进行`any()`操作

非转置: `data.isnull().any()`，得到的每一列求any()计算的结果，输出为**列**的Series

转置: `frame3.isnull().T.any()`，得到的每一行求any()计算的结果，输出为**行**的Series


3.找出某列非空所在行
```python
result=data[data['column1'].notnull()]
```

4.找出含有特定字符所在行
```python
res=data[data['choice'].str.contains("<img")]
```


## 时间操作

1.将字符串转为日期
```python
brand['Date2']=pd.to_datetime(brand['Date'],format="%Y%m%d")
```

2.将年份和月份组合在一起的一种方法是对它们进行整数编码，例如：2014年8月的201408。在整个列中，您可以这样做：
```python
df['YearMonth'] = df['ArrivalDate'].map(lambda x: 100*x.year + x.month)
```

3.提取月份和年份`pandas.Series.dt.year()` 和 `pandas.Series.dt.month()`
```python
df['Year'] = df['Joined date'].dt.year 
df['Month'] = df['Joined date'].dt.month 
```

4.日期时间间隔运算
使用datetime里的`timedelta`函数
```python
import datetime
from datetime import timedelta

#相加天数
df['time_list']+timedelta(days=1)

#相减天数
df['time_list']-timedelta(days=1)

#相加小时
df['time_list']+timedelta(hours=5)

#按周计算
df['time_list']-timedelta(weeks=5)
```

**月份和年份数据不能直接计算因每年和每月的天数不一样**


## 合并操作

1.merge
```python
result=pd.merge(table1,table2,how='left',on='column1')
```
**how参数**
`left`为左连接
`right`为右连接
`inner`为内连接,合并公有的
`outer`为全连接

2.concat

相同字段的表首尾相接
```python
frames = [df1, df2, df3]
result = pd.concat(frames)
```
