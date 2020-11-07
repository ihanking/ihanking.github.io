---
title: "Excel合并"
date: 2020-09-01
draft: false
tags: ["python","办公自动化","excel"]
---

方法一：

```python
# -*- coding: utf-8 -*-

import pyexcel as pe

e1 = pe.get_book_dict(file_name = "1.xlsx") #读取表1为字典e1
e2 = pe.get_book_dict(file_name = "2.xlsx") #读取表2为字典e2

e1.update(e2) #合并两个表的内容

v=[] #初始化列表

#两个表的内容转换为列表

for key in e1: #我想把这两行改为一个列表推导式，但是不成功：v = [e1[key] for key in e1]，还请帮忙，多谢
    v += e1[key]

#保存文件
pe.save_as(array = v, dest_file_name = "3.xlsx") 

```

方法二：

```python
#1、引入模块
import os
import pandas as pd

#2、取出指定目录下的全部excel文件路径
path="C:\\TEST"
dirlist=[]
for dirpath,dirname,filename in os.walk(path):
    for i in filename:
        dirlist.append(os.path.join(dirpath,i))

#3、创建一个df对象列表，并进行合并操作
dflist=[]
for i in dirlist:
    dflist.append(pd.read_excel(i))

#4、利用pd.concat函数来合并excel,涉及excel数据列数量不一致的、有空值等情况均没有影响合并效果
mydf=pd.concat(dflist)

#5、导出合并后的excel，因为此方法合并后index存在重复，可选择去除index
mydf.to_excel("mydf.xlsx",index=None)

#6、查看合并后的excel文件
print(pd.read_excel("mydf.xlsx"))
```