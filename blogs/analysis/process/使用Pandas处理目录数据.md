---
title: 使用Pandas处理文件夹数据
date: 2020-09-06
draft: false
tags: ["requests","pandas"]
categories: ["数据处理"]
---

## 前言

本文目标是为了处理文件夹数据

主要用到`pandas`，分如下几点流程：

1.抓取数据

2.读取数据

3.清洗数据

4.将csv和xlsm格式的文件名字放在同一列

5.与Brandlist表进行联合匹配，找出对应sku和operator

6.以csv和xlsm格式文件为条件，找出哪些已经放好了不用补

7.找出18年前的数据

8.找出哪些是客户需求的数据

9.对不同地区的数据进行划分

10.针对没有匹配到operator的数据进行分析，并做对应处理

## 数据获取

关于如何获取文件夹数据，查看代码可以戳[这里](https://ihanking.github.io/blogs/python/使用异步函数获取文件名.html)


## 预处理数据

### 分列

因为获取的数据文件夹目录路径不能直接使用，首先需将其分割出来，这里采用了excel分列的功能

其中包含`sku`,`日期`,`文件名`等多个关键字段

为方便整理，这里为分列后数据加了列名(1,2,3,4...)

查看整体数据
```python
df.head()
df.info()
```

文件夹目录不规范，导致路径长短不一，需要进一步处理

## 规整数据

### 第一步

拷贝数据,找出不为空的数据,
```python
df_nan=df.copy()
df_nan.iloc[2,0]=float('nan')
```

找出第9列包含csv和xlsm格式的文件
```python
cx_data=df[df_nan[9].str.contains('csv|xlsm',na=False)]
```

找出csv格式的文件
```python
csv_data=df[df_nan[9].str.endswith('.csv',na=False)] #.contains('.csv',na=False)
```

找出xlsm格式的文件
```python
xlsm_data=df[df_nan[9].str.endswith('.xlsm',na=False)]
```


将两种格式的文件聚合

```python
def ab(df):
    return ','.join(df.values)
```

csv格式聚合,生成csv列
```python
csv_data2=csv_data.groupby([7,8])[9].apply(ab).to_frame('csv').reset_index()
```

xlsm格式聚合,生成xlsm列
```python
xlsm_data2=xlsm_data.groupby([7,8])[9].apply(ab).to_frame('xlsm').reset_index()
```

合并两个格式数据
```python
data2=pd.merge(csv_data2,xlsm_data2,how='left',on=[7,8])
```

再跟总表合并，导出到cx.xlsx文件
```python
data3=pd.merge(df,data2,how='left',on=[7,8])
data3.to_excel("cx.xlsx", index=False)
```

### 第二步

读取第一步骤的数据
```python
import pandas as pd
data=pd.read_excel("cx.xlsx")
df=pd.DataFrame(data)
```

找出第10列包含csv格式的文件名

```python
csv_data=df[df[10].str.endswith('.csv',na=False)] #.contains('.csv',na=False)
```

找出第10列包含xlsm格式的文件名
```python
xlsm_data=df[df[10].str.endswith('.xlsm',na=False)]
```

和上一步一样，进行聚合操作
```python
def ab(df):
    return ','.join(df.values)
```

csv格式聚合,生成csv2列
```python
csv_data2=csv_data.groupby([7,8])[10].apply(ab).to_frame('csv2').reset_index()
```

xlsm格式聚合,生成xlsm2列
```python
xlsm_data2=xlsm_data.groupby([7,8])[10].apply(ab).to_frame('xlsm2').reset_index()
```

合并数据
```python
data2=pd.merge(csv_data2,xlsm_data2,how='left',on=[7,8])
```

与总表合并
```python
data3=pd.merge(df,data2,how='left',on=[7,8])
```

保存到cx2.xlsx文件
```python
data3.to_excel("cx2.xlsx", index=False)
```

### 第三步

读取第二步骤的数据
```python
import pandas as pd
data=pd.read_excel("cx2.xlsx")
df=pd.DataFrame(data)
```

找出第11列包含csv格式的文件名
```python
csv_data=df[df[11].str.endswith('.csv',na=False)] #.contains('.csv',na=False)
```

找出第11列包含xlsm格式的文件名
```python
xlsm_data=df[df[11].str.endswith('.xlsm',na=False)]
```

聚合操作
```python
def ab(df):
    return ','.join(df.values)
```

csv格式聚合,生成csv3列
```python
csv_data2=csv_data.groupby([7,8])[11].apply(ab).to_frame('csv3').reset_index()
```

xlsm格式聚合,生成xlsm3列
```python
xlsm_data2=xlsm_data.groupby([7,8])[11].apply(ab).to_frame('xlsm3').reset_index()
```

合并操作
```python
data2=pd.merge(csv_data2,xlsm_data2,how='left',on=[7,8])
```

与总表合并
```python
data3=pd.merge(df,data2,how='left',on=[7,8])
```

保存到cx3.xlsx文件
```python
data3.to_excel("cx3.xlsx", index=False)
```

依次按照第一步、第二步、第三步，对12、13列进行同样操作

### 第四步

接下来就合并各个csv列和xlsm列，如果含有多列数据，则以逗号组合在同一单元格内

读取数据
```python
import pandas as pd

data=pd.read_excel("demo2.xlsx")
df=pd.DataFrame(data)
```

合并所有csv列
```python
df["csv_all"] = df['csv'].map(str)+","+df['csv2'].map(str)+","+df['csv3'].map(str)+","+df['csv4'].map(str)
```

合并所有xlsm列
```python
df["xlsm_all"] = df['xlsm'].map(str)+","+df['xlsm2'].map(str)+","+df['xlsm3'].map(str)+","+df['xlsm4'].map(str)
```

合并生成新的列后，删除原有列，这里在excel操作完成了

### 第五步

下面对合并多列后数据进行操作

聚合查询
```python
df.groupby([7,8])['csv_all','xlsm_all'].count()
```

```python
def get(df,n=5,column=['csv_all','xlsm_all']):
    return df.sort_values(by=column)[-n:]
```

```python
result=df.groupby([7,8],group_keys=False).apply(get,n=1,column='csv_all')
```

保存
```python
result.to_excel("Chains.xlsx",index=False)
```


## 匹配数据

这一节要对Chains表和Brandlist表联合匹配

特别说明：Brandlist表结构是`sku`,`biz_name`,`operator`,`date`


### 整理chains表日期

新增列YearMonth数据

特别说明：新增列日期可以是当月、第二个月的年月信息，只要能匹配到`operator`即可

```python
chains['YearMonth'] = chains['DATE3'].map(lambda x: 100*x.year + x.month)
```

### 整理Brandlist表日期

新增列YearMonth数据，保持当年月信息不变
```python
brand['YearMonth'] = brand['Date'].map(lambda x: 100*x.year + x.month)
```

### 合并

```python
result=pd.merge(chains,brand,on=['SKU','YearMonth'])
```

保存数据
```python
result.to_excel("result.xlsx",index=False)
```