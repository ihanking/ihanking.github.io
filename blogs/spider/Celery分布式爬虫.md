---
title: Celery分布式爬虫
date: 2020-11-10
draft: false
tags: ["celery"]
categories: ["爬虫系列"]
---

>Celery是一个简单、灵活分布式系统，可用来快速管理分布式的任务队列

### 入门

先从一个简单例子开始

新建一个`tasks.py`文件

```python
from celery import Celery

app=Celery("tasks",broker="redis://localhost/0", backend="redis://localhost/1")

#连接redis,创建app
@app.task
def hello(x,y):
    return x+y
```

在tasks目录终端下运行命令 `celery -A tasks worker --loglevel=info`

返回内容

```
 -------------- celery@hanks-mac.local v5.0.2 (singularity)
--- ***** ----- 
-- ******* ---- Darwin-18.6.0-x86_64-i386-64bit 2020-11-10 20:33:32
- *** --- * --- 
- ** ---------- [config]
- ** ---------- .> app:         tasks:0x105e4a750
- ** ---------- .> transport:   redis://localhost:6379/0
- ** ---------- .> results:     redis://localhost/1
- *** --- * --- .> concurrency: 4 (prefork)
-- ******* ---- .> task events: OFF (enable -E to monitor tasks in this worker)
--- ***** ----- 
 -------------- [queues]
                .> celery           exchange=celery(direct) key=celery
                

[tasks]
  . tasks.hello

[2020-11-10 20:33:33,295: INFO/MainProcess] Connected to redis://localhost:6379/0
[2020-11-10 20:33:33,320: INFO/MainProcess] mingle: searching for neighbors
[2020-11-10 20:33:34,352: INFO/MainProcess] mingle: all alone
[2020-11-10 20:33:34,385: INFO/MainProcess] celery@hanks-mac.local ready.
```

在同一目录下新建`test.py`文件

```python
from tasks import hello

result=hello.delay(2,3)
print(result.get())
```

同时运行两个文件会返回结果 `5`

### 分布式爬虫

`master.py`文件负责爬取url

```python
import requests

from bs4 import BeautifulSoup

from slave import crawler#从slave中引入爬虫函数crawler

url='http://docs.celeryproject.org/en/latest/'#目标网页

res = requests.get(url).text#发送请求

soup = BeautifulSoup(res,'html.parser')#使用beautifulsoup解析网页

for i in soup.find_all('a'):#找到网页中所有的a标签，获取链接

	link = i.get('href')

	if 'www' not in i.get('href'):

		link = 'http://docs.celeryproject.org/en/latest/' + i.get('href')#拼接完整的url

		result = crawler.delay(link)#将url传入任务中，执行爬虫

```

`slave.py`文件负责接收url并进行异步爬取

```python
from celery import Celery

import requests

import time

from bs4 import BeautifulSoup

app = Celery('slave',broker='redis://localhost/0',backend='redis://localhost/1')#和上面例子一样，连接redis，创建一个app

@app.task#将爬虫函数注册为一个任务

def crawler(url):#爬虫函数，入参为URL，根据入参进行爬取
    res = requests.get(url).text#发送请求
    soup = BeautifulSoup(res,'html.parser')#使用beautifulsoup对网页进行解析
    title = soup.find('h1').get_text() #解析获取标题
    f = open('%s.txt'%title,'w+')#新建txt文件，以标题命名
    f.write(url)#将url作为内容写进txt文件
    f.close()#关闭

```

在当前目录终端下运行命令 `celery -A salve worker --loglevel=info`

