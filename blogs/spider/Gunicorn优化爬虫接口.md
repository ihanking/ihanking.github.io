---
title: Gunicorn优化爬虫接口
date: 2020-11-12
draft: false
tags: ["gunicorn"]
categories: ["爬虫系列"]
---

>

安装 `pip install gunicorn`

### 简单应用

```python
from flask import Flask
import time

app=Flask(__name__)
app.config['SECRET_KEY']='you-never-know'

@app.route('/', methods=['GET'])

def run():
    time.sleep(15)
    return 'hello world'
```

终端运行命令 `gunicorn -b 127.0.0.1:5000 demo:app`

输出结果如下：
```
[2020-11-12 15:09:37 +0800] [9209] [INFO] Starting gunicorn 20.0.4
[2020-11-12 15:09:37 +0800] [9209] [INFO] Listening at: http://127.0.0.1:5000 (9209)
[2020-11-12 15:09:37 +0800] [9209] [INFO] Using worker: sync
[2020-11-12 15:09:37 +0800] [9212] [INFO] Booting worker with pid: 9212
```

浏览器访问 `127.0.0.1:5000`,返回结果 `hello world`

### 配置参数

创建`config.py`作为配置文件启动

```python
import multiprocessing

bind='0.0.0.0:5000'

preload_app=True

workers=multiprocessing.cpu_count()*2+1

threads=multiprocessing.cpu_count()*2

backlog=2048

worker_class="sync"

daemon=True

proc_name='gunicorn.pid'

loglevel='debug'

logfile='debug.log'

accesslog='access.log'

access_log_format='%(h)s %(t)s %(U)s %(q)s'
```

在终端输入命令 `gunicorn -c config.py demo:app`

浏览器访问 `127.0.0.1:5000`,返回结果 `hello world`

