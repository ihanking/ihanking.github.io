---
title: "利用PyQt5交互导出数据"
date: 2020-08-26
draft: false
tags: ["pyqt5",'pandas','xlwings']
categories: ["Python实战"]
---


### 项目说明

#### MainFunc.py

主文件功能
1. 选取文件(xlsm,csv)
2. 导出match、减少、新增、更新部分的数据
3. 各个部分新开窗口操作

[源文件](https://hank-leo.github.io/post/spider/pyqt/MainFunc.py)

---

#### SubPart.py
减少部分操作文件

状态确认：

1. 关店、装修、尚未开业的数据

2. 做过reconcile的数据

3. exc1部分的数据

4. exc2部分的数据

5. VDR新增数据

6. 来源harv数据

7. 最后导出到csv表

[源文件](https://hank-leo.github.io/post/spider/pyqt/SubPart.py)

---

#### UpdatePart.py

更新部分操作文件

[源文件](https://hank-leo.github.io/post/spider/pyqt/UpdatePart.py)

---

#### AddPart.py

新增部分操作文件

[源文件](https://hank-leo.github.io/post/spider/pyqt/AddPart.py)

---

#### 优化功能

20200819

修改old数据poi不是lsku问题