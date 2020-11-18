---
title: SQL学习笔记
date: 2020-11-13
draft: false
tags: ["sql"]
categories: ["数据库系列"]
---

1.绑定变量

>sql语句中使用变量，通过不同的变量值来改变sql的执行结果

优点：减少硬解析，减少oracle的工作量

缺点：参数不同导致执行效率不同，优化比较难做


2.MyISAM的使用场景为读写分离的读库，而InnoDB为写库

3.解析后的SQL语句在Oracle的共享池中进行缓存

**profiling**

查看SQL执行时所使用的资源情况：`select @@profiling`, 如果profiling=0代表关闭，需要把profiling打开，即设置为1 `set profiling=1`

查看当前会话所产生的所有profiles `show profiles;`

查看上一条会话 `show profile`

查看sql版本情况 `select version();`

**了解数据库**

查看所有与库相关的信息 `select * from information_schema.SCHEMATA;`

查看所有表信息 `select * from information_schema.TABLES;`

查看所有列信息 `select * from information_schema.COLUMNS;`

### 常见索引类型

>索引可分为普通索引、唯一索引、主键索引、联合索引、全文索引

**普通索引**

新建表时设置索引
```sql
create table table_name(
	filed1 data_type1 filed_attr1,
	filed2 data_type2 filed_attr2,
	filed3 data_type3 filed_attr3,
	...
	index index_name(filed1)
)
```

对已有表设置索引
```sql
create index index_name on table_name(filed_list)
alter table table_name add index index_name on(filed_list)
```

案例应用
```sql
-- 创建索引
create index date_index
on stu_card(custom_date);
-- 查询
select *
from stu_card
```

**唯一索引**

新建表设置索引
```sql
create table table_name(
	filed1 data_type1 filed_attr1,
	filed2 data_type2 filed_attr2,
	filed3 data_type3 filed_attr3,
	...
	unique index_name(filed1,filed2)
)
```

对已有表设置索引
```sql
create unique index index_name on table_name(filed_list)
alter table table_name add unique index_name on(filed_list)
```

案例应用
```sql
-- 创建索引
create unique index id_idx
on tourism_orders(userid,orderid);
-- 查询
select *
from tourism_orders
```

**主键索引**

新建表设置索引
```sql
create table table_name(
	filed1 data_type1 filed_attr1,
	filed2 data_type2 filed_attr2,
	filed3 data_type3 filed_attr3,
	...
	primary key index_name(filed1,filed2)
)
```

对已有表设置索引
```sql
alter table table_name add primary key index_name on(filed_list)
```

案例
```sql
-- 设置索引
alter table regit_info ass primary key (uid);
alter table RFM add primary key (uid);
-- 查询
select *
from regit_info as t1
inner join RFM as t2
on t1.uid=t2.uid
limit 1000;
```

**删除索引**

```sql
-- regit_info表
show index from regit_info
alter table regit_info drop primary key

-- tourism_orders表
show index from tourism_orders
drop index id_idx on tourism_orders
```