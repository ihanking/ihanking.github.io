---
title: "MySQL的实际应用"
date: 2020-11-10
draft: false
tags: ["mysql"]
categories: ["数据库系列"]
---

**安装** `pip install pymysql`

### 数据库连接

```python
import pymysql

#链接 数据库  链接对象 connection()
conn = pymysql.Connect(
    host="localhost",
    port=3306,
    db='test',
    user='root',
    passwd="123456789",
    charset='utf8'
)
#创建 游标对象 cursor()
cur = conn.cursor()

#如果存在表则删除
cur.execute("drop table if exists employee")

#创建数据表
sql="""
create table employee(
    first_name char(20) not null,
    last_name char(20),
    age int,
    sex char(1),
    income float
)"""

#运行程序
cur.execute(sql)

# 提交事务
conn.commit()

# 关闭游标
cur.close()

# 关闭链接
conn.close()
```

### 插入操作

```python
import pymysql

conn = pymysql.Connect(
    host="localhost",
    port=3306,
    db='test',
    user='root',
    passwd="123456789",
    charset='utf8'
)

cur = conn.cursor()

#sql插入语句
sql="""
insert into employee values('mac', 'mohan', 20, 'm', 2000)
"""

try:
    #执行
    cur.execute(sql)
    #提交
    conn.commit()
except:
    #发生错误时回滚
    conn.rollback()

#关闭
conn.close()
```

### 查询操作

```python
import pymysql

conn = pymysql.Connect(
    host="localhost",
    port=3306,
    db='test',
    user='root',
    passwd="123456789",
    charset='utf8'
)

cur = conn.cursor()

#sql插入语句
sql="""
select * from employee
"""

try:
    #执行
    cur.execute(sql)
    results=cur.fetchall()
    for row in results:
        print(row)
    #提交
    conn.commit()
except:
    #发生错误时回滚
    conn.rollback()

#关闭
conn.close()
```

### 更新操作

```python
import pymysql

conn = pymysql.Connect(
    host="localhost",
    port=3306,
    db='test',
    user='root',
    passwd="123456789",
    charset='utf8'
)

cur = conn.cursor()

#sql插入语句
sql="""
update employee set income="3000" where first_name="mac"
"""

try:
    #执行
    cur.execute(sql)
    #提交
    conn.commit()
except:
    #发生错误时回滚
    conn.rollback()

#关闭
conn.close()
```

### 爬虫项目

```python
import pymysql
import requests
import traceback
from bs4 import BeautifulSoup

conn = pymysql.Connect(
    host="localhost",
    port=3306,
    db='test',
    user='root',
    passwd="123456789",
    charset='utf8'
)

cur = conn.cursor()
cur.execute("drop table if exists qiubai")
sql="""create table qiubai(content TEXT)"""
cur.execute(sql)

#爬取数据
url="https://www.qiushibaike.com/"
res=requests.get(url)
soup=BeautifulSoup(res.text,'lxml')
for i in soup.find("div",class_="recommend-article").find("ul").find_all("li"):
    try:
        data=i.find("a",class_="recmd-content").get_text().strip()
        #写入数据库
        sql2="""insert into qiubai(content) values("%s");"""%pymysql.escape_string(data)
        cur.execute(sql2)
        print(data)
    except Exception:
        traceback.print_exc()

#提交数据
conn.commit()
#关闭
cur.close()
conn.close()
```

**遇到的问题**

报错一：
`pymysql.err.ProgrammingError`

解决：添加`pymysql.escape_string`

报错二：
`pymysql.err.InternalError: (1054, "Unknown column 'xxx in 'field list'")`

解决：添加引号
`"""insert into qiubai(content) values(%s);"""%pymysql.escape_string(data)`
改为
`"""insert into qiubai(content) values("%s");"""%pymysql.escape_string(data)`

