---
title: 一日一技|python批量运行py文件
date: 2020-09-24
draft: false
tags: ["python"]
categories: ["办公自动化"]
---

```python
import os

path="E:\\python"  #批量的py文件路径

for root,dirs,files in os.walk(path): #进入文件夹目录
    for f in files: #文件夹下的文件
        if os.path.splitext(f)[1]=='.py': #只运行py文件
            os.chdir(root)
            os.system('python {}'.format(f))  #终端运行 python main.py
```