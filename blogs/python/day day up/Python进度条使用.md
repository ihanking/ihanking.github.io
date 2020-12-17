---
title: Python进度条使用
date: 2020-09-18
draft: false
tags: ["python"]
categories: ["Python系列"]
---

## 普通进度条

```python
import sys
import time
def progress_bar():
    for i in range(1, 101):
        print("\r", end="")
        print("Download progress: {}%: ".format(i), "▋" * (i // 2), end="")
        sys.stdout.flush()
        time.sleep(0.05)

progress_bar()
```
![普通进度条](/images/202009/18/普通进度条.gif)


## 时间进度条

```python
import time
scale = 50
start = time.perf_counter()
for i in range(scale + 1):
    a = "*" * i
    b = "." * (scale - i)
    c = (i / scale) * 100
    dur = time.perf_counter() - start
    print("\r{:^3.0f}%[{}->{}]{:.2f}s".format(c,a,b,dur),end = "")
    time.sleep(0.1)
```
![时间进度条](/images/202009/18/时间进度条.gif)


## tqdm进度条

```python
from time import sleep
from tqdm import tqdm

for i in tqdm(range(1,500)):
    sleep(0.01)
sleep(0.5)
```
![tpdm进度条](/images/202009/18/tpdm进度条.gif)

相关文档：https://tqdm.github.io/


## progress进度条

```python
import time
from progress.bar import IncrementalBar

mylist=[1,2,3,4,5,6,7,8]
bar=IncrementalBar("Countdown", max=len(mylist))
for item in mylist:
    bar.next()
    time.sleep(1)
    bar.finish()
```
![progress进度条](/images/202009/18/progress进度条.gif)


## alive_progress进度条

```python
import time
from alive_progress import alive_bar

items=range(100)

with alive_bar(len(items)) as bar:
    for item in items:
        bar()
        time.sleep(0.1)
```
![alive_progress进度条](/images/202009/18/alive_progress进度条.gif)

## 可视化进度条

```python
import PySimpleGUI as sg
import time
mylist = [1,2,3,4,5,6,7,8]
for i, item in enumerate(mylist):
    sg.one_line_progress_meter('This is my progress meter!', i+1, len(mylist), '-key-')
    time.sleep(1)
```
![可视化进度条](/images/202009/18/可视化进度条.gif)
