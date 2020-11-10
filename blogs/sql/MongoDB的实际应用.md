---
title: "MongoDB的实际应用"
date: 2019-12-05
draft: false
tags: ["mongodb"]
categories: ["数据库系列"]
---

### MongoDB基本操作

**1.数据库操作**

使用use DATABASE_NAME创建数据库 `use maitian`

如果数据库不存在，就创建数据库，否则切换到指定的数据库

使用show dbs查看所有数据库 `show dbs`

使用`db.dropDatabase()`删除数据库


**2.集合操作**

在maitian数据库中创建名为zufang的集合 `db.createCollection("zufang")`

查看所有集合

`show collections`

`show tables`

**3.文档操作**

(1)使用db.collection_name.insert(document)在集合中插入文档

`db.zufang.insert({"title":"xxxx","price":"8888","area":"233","district":"xxx"})`

(2)使用db.collection_name.find()查询文档

`db.zufang.find()`

可以使用.pretty()方法来使输出数据更易读

`db.zufang.fin().pretty()`

**4.Mac上操作MongoDB**

MongoDB启动和关闭

**启动** `mongod --dbpath /usr/local/mongodb/data`

**关闭** `use admin, db.shutdownServer()`


### 爬虫项目

```python
import traceback
import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient

client=MongoClient("mongodb://localhost:27017")
db=client['test']

url="https://www.qiushibaike.com/"
res=requests.get(url)
soup=BeautifulSoup(res.text,'lxml')
data=[]
for i in soup.find("div",class_="recommend-article").find("ul").find_all("li"):
    try:
        content=i.find("a",class_="recmd-content").get_text().strip()
        db.qiushi.insert({'content':content})
        print(content)
    except Exception:
        traceback.print_exc()
```


