---
title: Python批量运行py文件
date: 2020-09-24
draft: false
tags: ["python","办公自动化"]
---

方法一：

```python
import os

path="E:\\python"  #批量的py文件路径

for root,dirs,files in os.walk(path): #进入文件夹目录
    for f in files: #文件夹下的文件
        if os.path.splitext(f)[1]=='.py': #只运行py文件
            os.chdir(root)
            os.system('python {}'.format(f))  #终端运行 python main.py
```

方法二：

```python
# -*- coding: utf-8 -*-
import os
import xlrd
import time
from os import path
from os import listdir
from loguru import logger

#设置日志格式
logger.add("file_{time}.log")

#打开excel读取要运行的sku
f = xlrd.open_workbook('./review自动化计划200728.xlsm')
table = f.sheets()[2]
sku_list = table.col_values(0)

#找到对应sku的文件夹
for sku in sku_list:
    print(sku)
    path="/Users/Hank/Desktop/Python/pythonAuto/project/"+str(sku)
    os.chdir(path) #进入文件夹
    # os.system("python3.8 {}")
    for root , dirs,files in os.walk(path):
        for f in files:
            if os.path.splitext(f)[1]=='.py':
                os.chdir(root)
                os.system("python3.8 {}".format(f))
    time.sleep(2)
```