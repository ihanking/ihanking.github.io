---
title: Redis的实际使用
date: 2020-11-10
draft: false
tags: ["redis"]
categories: ["数据库系列"]
---

### python操作redis

**安装**

`pip install redis`


**连接数据库**
```python
import redis
 
pool = redis.ConnectionPool(host='localhost', port=6379,encoding="UTF-8",decode_responses=True)
r = redis.Redis(connection_pool=pool)
result = r.keys("*")

#遍历所有元素
for res in result:
    print(res)

#查看长度
print(len(result)) 
```

### 爬虫项目

```python
import redis
import requests
from bs4 import BeautifulSoup
 
pool = redis.ConnectionPool(host='localhost', port=6379,encoding="UTF-8",decode_responses=True,db=0)
r = redis.Redis(connection_pool=pool)

def crawl():
    url="https://www.qiushibaike.com/"
    if not r.get("qiushibaike"):
        res=requests.get(url)
        soup=BeautifulSoup(res.text,'lxml')
        r.setex("qiushibaike",60,res.text)
    else:
        res=r.get("qiushibaike").decode("utf-8")
        soup=BeautifulSoup(res,"lxml")
        print("从缓存中读取".center(50,"="))
    for i in soup.find("div",class_="recommend-article").find("ul").find_all("li"):
        try:
            content=i.find("a",class_="recmd-content").get_text().strip()
            print(content)
        except Exception:
            pass
crawl()
```

### 其他

mac系统下的操作

1.启动服务

`sudo redis-server /usr/local/etc/redis.conf`

2.查看日志

`tail -f /usr/local/redis-3.2.5/log-redis.log`

3.关闭服务

`redis-cli shutdown`

