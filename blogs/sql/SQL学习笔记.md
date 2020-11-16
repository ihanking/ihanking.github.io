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

**读书笔记**

```sql
#limit
-- select * from chapter5 limit 2,3;

#筛选条件
-- select * from chapter5
-- where age=18;

-- select * from chapter5
-- where age=18 and class="一班";

-- select id,name
-- from chapter5
-- where age=18 and class="一班";

-- select id,name,"age<20" as label
-- from chapter5
-- where age<20

#json列解析

-- select id,json_extract(score,'$.数学') as "数学成绩"
-- from chapter5;

-- select id,json_keys(score) as "科目"
-- from chapter5

#排序
-- select *
-- from chapter5
-- order by class asc,age desc

#缺失值处理
-- select *
-- from chapter6
-- where profession !=""

#coalesce函数
-- select order_id,memberid,coalesce(profession,"其他")
-- from chapter6

-- select coalesce(null,"填充值"

-- select 1+1

#重复值处理
-- select * from chapter6

-- select distinct *
-- from chapter6

-- select distinct order_id,memberid
-- from chapter6

#使用group by删除重复值
-- select order_id,memberid
-- from chapter6
-- group by order_id,memberid

#cast()函数和convert()函数更改数据类型
-- select age,
-- cast(age as decimal) as decimal_age,
-- convert(age,char) as char_age
-- from chapter6

#重命名
-- select 
-- order_id as "订单ID",
-- date as "下单日期",
-- value as "订单金额(元)",
-- memberid as "会员ID",
-- age as "年龄",
-- sex as "性别",
-- profession as "行业"
-- from chapter6

-- select id,
-- (sales_a+sales_b) as all_sales,
-- (sales_a-sales_b) as sales_a_b,
-- (sales_a*price_a+sales_b*price_b) as gmv,
-- (price_a/price_b) as price_a_b,
-- sales_a*2 as 2_sales_a
-- from chapter7

#算术运算
-- select 7 div 2
-- select 7 % 2
-- select 7 mod 2

-- select 1+null,
-- 1-null,
-- 1*null,
-- 1/null

#比较运算
-- select id,
-- sales_a,
-- sales_b,
-- sales_a>sales_b as "大于",
-- sales_a<sales_b as "小于",
-- sales_a != sales_b as "不等于",
-- sales_a is null as "空值",
-- sales_a is not null as "非空值"
-- from chapter7


-- select id,sales_a
-- from chapter7
-- where sales_a BETWEEN 15 and 20

-- select id,sales_a
-- from chapter7
-- where sales_a > 15

#逻辑运算
-- select id,sales_a,sales_b,
-- ((sales_a>15) and (sales_b>15)) as "双优",
-- ((sales_a>15) or (sales_b>15)) as "单优"
-- from chapter7


#绝对值
-- select id,
-- sales_a,
-- sales_b,
-- (sales_a-sales_b) as "差值",
-- abs(sales_a-sales_b) as "绝对差值"
-- from chapter7

#最小整数值
-- select ceil(2.9)

#最大整数值
-- select floor(2.1)

#随机数
-- select rand()

#排序和筛选
-- select id,
-- rand() as "随机数"
-- from chapter7
-- order by rand()
-- limit 3

#小数点位数调整
-- select round(1.111,2)

#正负判断
-- select id,
-- sales_a,
-- sales_b,
-- (sales_a-sales_b) as sales_a_b,
-- sign(sales_a-sales_b) as "正负"
-- from chapter7
-- 

#字符串替换
-- select id,
-- replace(id,"E","e") as replace_id
-- from chapter7

#字符串合并
-- select concat("hank","leo")

-- select id,name,concat(id,name) as id_name
-- from chapter7

#concat_ws()函数
-- select id,name,concat_ws("-",id,name) as id_name
-- from chapter7

#字符串截取
-- select left("2019-10-01 12:30:21",10)

-- select right("2019-10-01 12:30:21",8)

-- select substring("2019-10-01 12:30:21",6,5)

#字符串匹配
-- select *
-- from chapter7
-- where name like "张%"

-- select *
-- from chapter7
-- where name like "张_"

-- select *
-- from chapter7
-- where name not like "张%"

#字符串计数
-- select length("sql")
-- select char_length("hankleo")

#去除字符串空格
-- select 
-- length("abcdef") as str_length,
-- length(ltrim("abcdef")) as lstr_length,
-- length(rtrim("abcdef")) as rstr_length,
-- length(trim("abcdef")) as tstr_length

#字符串重复
-- select repeat("sql",3)

#聚合运算

#针对id列非空值的计数
-- select count(id)
-- from chapter7

#对整张表计数
-- select count(*)
-- from chapter7

#空格算1个
-- select count(" ")

#null算0个
-- select count(null)

#删除后再计数
-- select count(distinct sales_a)
-- from chapter7

#sum
-- select 
-- sum(sales_a) as sum_a,
-- sum(sales_b) as sum_b
-- from chapter7

#avg
-- select
-- avg(sales_a) as avg_a,
-- avg(sales_b) as avg_b
-- from chapter7

#max
-- select 
-- max(sales_a) as max_a,
-- max(sales_b) as max_b
-- from chapter7

#min
-- select
-- min(sales_a) as min_a,
-- min(sales_b) as min_b
-- from chapter7

#方差
#总体方差var_pop()/样本方差var_samp()
-- select
-- var_pop(sales_a),
-- var_samp(sales_a)
-- from chapter7

#标准差
#总体标准差std()/样本标准差stddev_samp()
-- select
-- std(sales_a) as std_a,
-- stddev_samp(sales_a) as stddev_a
-- from chapter7

#聚合函数运算
-- select
-- sum(sales_a) as sum_a,
-- sum(sales_b) as sum_b,
-- (sum(sales_a)+sum(sales_b)) as sum_all
-- from chapter7

#控制函数
-- select * from chapter8

#if()
-- select id,
-- score,
-- if(score<60,"不及格",if(score<80,"良好","优秀")) as score_result
-- from chapter8

#case when
-- select id,class,
-- (case class 
-- when "一班" then "class1"
-- when "二班" then "class2"
-- when "三班" then "class3"
-- else "其他"
-- end) as class_result
-- from chapter8

#比较运算
-- select id,score,
-- (case
-- when score<60 then "不及格"
-- when score<80 then "良好"
-- else "优秀"
-- end) as score_result
-- from chapter8

#between
-- select id,score,
-- (case 
-- when score between 0 and 59 then "不及格"
-- when score between 60 and 79 then "良好"
-- else "优秀"
-- end) as score_result
-- from chapter8

#日期和时间

#当前日期和时间
-- select now()

#当前日期
-- select curdate()

#当前日期
-- select date(now())

#年
-- select year(now())

#月
-- select month(now())

#日
-- select day(now())

#当前时间
-- select curtime()

-- select time(now())

-- select hour(now())

-- select minute(now())

-- select second(now())

#全年第几周数
-- select weekofyear(now())

#当前星期几
-- select dayofweek(now())

#当前季度
-- select 
-- quarter("2020-01-01") as quarter_1,
-- quarter("2020-04-01") as quarter_2,
-- quarter("2020-07-01") as quarter_3,
-- quarter("2020-10-01") as quarter_4,

#日期和时间的转换

#date_format()
-- select date_format("2020-11-15 12:05:11","%Y-%m-%d")

-- select date_format("2020-1-1 12:05:11","%Y-%m-%d")

-- select date_format("2020-11-15 12:05:11","%H:%i:%S")

#extract()
-- select
-- extract(year from "2020-11-15 12:09:11") as col1,
-- extract(month from "2020-1-10 12:09:11") as col2,
-- extract(day from "2020-10-11 12:09:11") as col3

#date_add() 向后偏移
-- select
-- "2020-01-01" as col1,
-- date_add("2020-01-01",interval 7 year) as col2,
-- date_add("2020-01-01",interval 7 month) as col3,
-- date_add("2020-01-01",interval 7 day) as col4


-- select
-- "2020-01-01 01:01:01" as col1,
-- date_add("2020-01-01 01:01:01",interval 7 hour) as col2,
-- date_add("2020-01-01 01:01:01",interval 7 minute) as col3,
-- date_add("2020-01-01 01:01:01",interval 7 second) as col4

#date_sub() 向前偏移
-- select
-- "2020-01-01" as col1,
-- date_sub("2020-01-01", interval 7 year) as col2,
-- date_sub("2020-01-01", interval 7 month) as col3,
-- date_sub("2020-01-01", interval 7 day) as col4

#结果同上
-- select
-- "2020-01-01" as col1,
-- date_add("2020-01-01", interval -7 year) as col2,
-- date_add("2020-01-01", interval -7 month) as col3,
-- date_add("2020-01-01", interval -7 day) as col4

#两日期之间做差
#datediff(end_date,start_date)
-- select datediff("2020-11-11","2020-01-01")

#日期比较
-- select
-- "2020-01-01" > "2020-01-02" as col1,
-- "2020-01-01" < "2020-01-02" as col2,
-- "2020-01-01" = "2020-01-02" as col3,
-- "2020-01-01" != "2020-01-02" as col4


#数据分组

#group by
-- select province,
-- sum(sales) as sum_sales
-- from chapter10_1
-- group by province

-- select province,
-- city,
-- sum(sales) as sum_sales
-- from chapter10_1
-- group by province,city

-- select province,
-- city,
-- sum(sales) as sum_sales,
-- count(shop) as count_shop
-- from chapter10_1
-- group by province,city

#聚合后进行条件筛选
-- select province,
-- sum(sales) as sum_sales
-- from chapter10_1
-- group by province
-- having sum(sales)>10

#group_concat()
-- select id,group_concat(score) as score_group
-- from chapter10_11
-- group by id

#rollup
-- select
-- province,
-- null as city,
-- sum(sales) as sum_sales
-- from chapter10_1
-- group by province
-- union all
-- select province,
-- city,
-- sum(sales) as sum_sales
-- from chapter10_1
-- group by province,city

-- select province,
-- city,
-- sum(sales) as sum_sales
-- from chapter10_1
-- group by province,city with rollup

#透视表
-- select deal_date,
-- count(case when area="A区" then order_id end) as "A区",
-- count(case when area="B区" then order_id end) as "B区",
-- count(case when area="C区" then order_id end) as "C区"
-- from chapter10_7
-- group by deal_date


#窗口函数

-- select 
-- shopname,
-- sales,
-- sale_date,
-- (select avg(sales) from chapter11) as avg_sales
-- from chapter11

#over()
-- select 
-- shopname,
-- sales,
-- sale_date,
-- avg(sales) over() as avg_sales
-- from chapter11

#partition by
-- select 
-- chapter11.shopname,
-- chapter11.sales,
-- chapter11.sale_date,
-- avg_table.avg_sales
-- from chapter11
-- left join
-- (select shopname,
-- avg(sales) as avg_sales
-- from chapter11
-- group by shopname as avg_table
-- on chapter11.shopname=avg_table.shopname

-- select 
-- shopname,
-- sales,
-- sale_date,
-- avg(sales) over(partition by shopname) as avg_sales
-- from chapter11

-- select shopname,
-- sales,
-- sale_date,
-- avg(sales) over(partition by shopname order by sale_date) as avg_sales
-- from chapter11

#序列函数
#ntile()函数
-- select
-- shopname,
-- sales,
-- sale_date,
-- ntile(3) over() as cut_group
-- from chapter11

-- select
-- shopname,
-- sales,
-- sale_date,
-- ntile(3) over(partition by shopname) as cut_group
-- from chapter11

-- select
-- shopname,
-- sales,
-- sale_date,
-- ntile(3) over(partition by shopname order by sales) as cut_group
-- from chapter11

#row_number()函数
-- select 
-- shopname,
-- sales,
-- sale_date,
-- row_number() over(order by sales) as rank_num
-- from chapter11

-- select
-- shopname,
-- sales,
-- sale_date,
-- row_number() over(partition by shopname order by sales) as rank_num
-- from chapter11

#lag()
-- select
-- shopname,
-- sales,
-- sale_date,
-- lag(sales,1) over(partition by shopname order by sale_date) as lag_value
-- from chapter11

#lead()函数
-- select
-- shopname,
-- sales,
-- sale_date,
-- lead(sales,1) over(partition by shopname order by sale_date) as lead_value
-- from chapter11


#first_value()/last_value()
-- select shopname,
-- sale_date,
-- sales,
-- first_value(sale_date) over(partition by shopname order by sale_date) as first_date,
-- last_value(sale_date) over(partition by shopname order by sale_date) as last_date
-- from chapter11


#多表连接

#left join
-- select 
-- user_table.userid,
-- user_table.sex,
-- user_table.city_name,
-- user_table.level,
-- order_table.first_time,
-- order_table.orders_7,
-- order_table.orders_14
-- from chapter12_user as user_table
-- left join
-- chapter12_order as order_table
-- on user_table.userid=order_table.userid

#right join
-- select 
-- user_table.userid,
-- user_table.sex,
-- user_table.city_name,
-- user_table.level,
-- order_table.first_time,
-- order_table.orders_7,
-- order_table.orders_14
-- from chapter12_user as user_table
-- right join
-- chapter12_order as order_table
-- on user_table.userid=order_table.userid

#inner join
-- select 
-- user_table.userid,
-- user_table.sex,
-- user_table.city_name,
-- user_table.level,
-- order_table.first_time,
-- order_table.orders_7,
-- order_table.orders_14
-- from chapter12_user as user_table
-- inner join
-- chapter12_order as order_table
-- on user_table.userid=order_table.userid

-- select 
-- user_table.userid,
-- user_table.sex,
-- user_table.city_name,
-- user_table.level,
-- order_table.first_time,
-- order_table.orders_7,
-- order_table.orders_14
-- from 
-- chapter12_user as user_table,
-- chapter12_order as order_table
-- where
-- user_table.userid=order_table.userid


#outer join
-- select
-- user_table.userid,
-- user_table.sex,
-- user_table.level,
-- order_table.userid,
-- order_table.first_time,
-- order_table.orders_7,
-- order_table.orders_14
-- from chapter12_user as user_table
-- left join chapter12_order as order_table
-- on user_table.userid=order_table.userid
-- union
-- select user_table.userid,
-- user_table.sex,
-- user_table.level,
-- order_table.userid,
-- order_table.orders_7,
-- order_table.orders_14
-- from chapter12_user as user_table
-- right join chapter12_order as order_table
-- on user_table.userid=order_table.userid


-- select *
-- from chapter12_user as user_table
-- left join
-- chapter12_order_info as order_info
-- on user_table.userid=order_info.userid
-- order by user_table.userid

#多表连接
-- select 
-- order_info.orderid,
-- order_info.userid,
-- order_info.gmv,
-- user_table.level,
-- order_table.first_time
-- from 
-- chapter12_order_info as order_info
-- left join
-- chapter12_user as user_table
-- on order_info.userid=user_table.userid
-- left join
-- chapter12_order as order_table
-- on order_info.userid=order_table.userid

#自查询

#select子查询
-- select 
-- chapter13_score.id,
-- chapter13_score.score,
-- (select avg(score) as avg_score from chapter13_score) as avg_score
-- from chapter13_score

#from子查询
#方法一
-- select 
-- avg_table.id,
-- avg_table.avg_score,
-- user_info.name,
-- user_info.sex,
-- user_info.class
-- from 
-- (select id,avg(score) as avg_score from chapter13_score group by id) as avg_table
-- left join
-- chapter13_user as user_info
-- on avg_table.id=user_info.id
-- where avg_table.avg_score>600

#方法二
-- select 
-- avg_table.id,
-- avg_table.avg_score,
-- user_info.name,
-- user_info.sex,
-- user_info.class
-- from 
-- (select id,avg(score) as avg_score from chapter13_score group by id having avg_score>600) as avg_table
-- left join
-- chapter13_user as user_info
-- on avg_table.id=user_info.id

#where子查询
-- select id,score,month_num
-- from chapter13_score
-- where id in (
-- select id from chapter13_score group by id having avg(score)>600
-- )

-- select id from chapter13_score group by id having avg(score)>600

-- select id,score,month_num
-- from chapter13_score
-- where score>(
-- select avg(score)
-- from chapter13_score
-- )

#with临时表
-- select avg_table.id,
-- avg_table.avg_score,
-- "大于600" as score_bin
-- from (
-- select id,avg(score) as avg_score
-- from chapter13_score
-- group by id
-- having avg_score>600
-- ) as avg_table
-- union all
-- select avg_table.id,
-- avg_table.avg_score,
-- "小于600" as score_bin
-- from (
-- select id,avg(score) as avg_score
-- from chapter13_score
-- group by id
-- having avg_score<600
-- ) as avg_table

#一个临时表
-- with avg_score_table as (
-- select id,avg(score) as avg_score
-- from chapter13_score
-- group by id)
-- select id,avg_score,
-- "大于600" as score_bin
-- from avg_score_table
-- where avg_score > 600
-- union all
-- select id,avg_score,
-- "小于600" as score_bin
-- from avg_score_table
-- where avg_score < 600

#多个临时表
-- with avg_score_table as (
-- select id,avg(score) as avg_score
-- from chapter13_score
-- group by id
-- ),
-- user_table as (
-- select id,name,sex
-- from chapter13_user
-- where sex="男"
-- )
-- select avg_score_table.id,
-- avg_score_table.avg_score,
-- user_table.name,
-- user_table.sex
-- from avg_score_table
-- left join user_table
-- on avg_score_table.id=user_table.id
-- where user_table.sex is not null


#执行顺序
-- select 
-- catid,
-- count(orderid) as sales
-- from t
-- where catid<>"c666"
-- group by catid
-- having count(orderid)>10
-- order by count(orderid) desc
-- limit 3

#顺序：from-where-group by -having-select-order by limit

#变量设置
-- set @day="2019-08-01";
-- select order_id,
-- time1,
-- time2,
-- time3,
-- time4
-- from chapter14_1
-- where time1=@day
-- and time2=@day
-- and time3=@day
-- and time4=@day

#全量表
#增量表
#快照表
#拉链表
#流水表

#数据回溯

#数据仓库分层：ODS(操作性数据)/DW(数据仓库)/DM(数据集市)

#代码规范

#1.代码缩进
-- select
-- 	catid,
-- 	count(orderid) as sales
-- from
-- 	t
-- where
-- 	catid <> "c666"
-- group by
-- 	catid
-- having
-- 	count(orderid)>10
-- order by
-- 	count(orderid) desc
-- limit 3

#2.逗号位置
#3.注释
/*
员工信息表
销售表
*/

-- select
-- 	col1 -- 销售人员id

#梳理数据库逻辑

#创建表
-- create table test
-- (
-- 	id int comment "学号",
-- 	name varchar(50) comment "姓名",
-- 	primary key (id)
-- )

#插入数据
-- insert into test values
-- 	(1,"李华"),
-- 	(2,"张三"),
-- 	(3,"李明")

#修改
-- alter table test add class varchar(50)

#删除
-- drop table test

-- select * from test



#实战

#查询每个区人数
-- select class,count(id) as stu_num
-- from stu_table
-- group by class

#查询姓张用户数
-- select count(id) as stu_num
-- from stu_table
-- where name like "张%"

#筛选出id3-id5的用户
-- select * 
-- from stu_table
-- order by id asc
-- limit 2,3

#不合格人员信息
-- select *
-- from score_table
-- where score < 60

#姓张且不合格的信息
-- select * 
-- from score_table
-- where score < 60
-- and name like "张%"

#获得两次冠军的人员信息
-- select id,name,count(month_num) as num
-- from month_table
-- group by id,name
-- having count(month_num)>2

#查询每个区人数
-- select class,count(id) as stu_num
-- from stu_table
-- group by class

#查询姓张用户数
-- select count(id) as stu_num
-- from stu_table
-- where name like "张%"

#筛选出id3-id5的用户
-- select * 
-- from stu_table
-- order by id asc
-- limit 2,3

#不合格人员信息
-- select *
-- from score_table
-- where score < 60

#姓张且不合格的信息
-- select * 
-- from score_table
-- where score < 60
-- and name like "张%"

#获得两次冠军的人员信息
-- select id,name,count(month_num) as num
-- from month_table
-- group by id,name
-- having count(month_num)>2

#周环比数据
-- select count(order_id) as order_cnt,
-- count(if(date_sub(curdate(),interval 1 day)=order_date,order_id,null)) last_order_cnt
-- from order_table

#获奖员工信息
-- select table1.*
-- from table1
-- left join table2
-- on table1.id=table2.id
-- where table2.id is not null

#计算用户留存情况
-- select (
-- case when t3.day_value=1 then "次日留存"
-- when t3.day_value=3 then "三日留存"
-- when t3.day_value=7 then "七日留存"
-- else "其他"
-- end) as type,
-- count(t3.uid) uid_cnt
-- from (
-- select t1.uid,t1.first_time,t2.last_time,datediff(t2.last_time,t1.first_time) day_value
-- from (select uid,date(min(login_time)) as first_time
-- from user_login
-- group by uid) t1
-- left join(
-- select uid,date(max(login_time)) as last_time
-- from user_login
-- group by uid) t3
-- group by (
-- case when t3.day_value=1 then "次日留存"
-- when t3.day_value=3 then "三日留存"
-- when t3.day_value=7 then "七日留存"
-- else "其他"
-- end)

#筛选最受欢迎的课程（包括不同课程有相同学生数）
-- select course,count(id) as stu_num
-- from course_table
-- group by course
-- having count(id)=(
-- select max(stu_num)
-- from (
-- select course,count(id) as stu_num
-- from course_table
-- group by course
-- )a
-- )

#筛选出每个年级最受欢迎的三门课
-- select *
-- from(
-- select grade,course,stu_num,
-- row_number() over(partition by grade order by stu_num desc) as course_rank
-- from (select grade,course,count(id) as stu_num
-- from course_table
-- group by grade,course
-- )a
-- )b
-- where b.course_rank<4

#求累积和
-- select count(uid)
-- from (
-- select uid,amount,sum(amount) over(order by amount desc) as consum_amount,
-- (sum(amount) over(order by amount desc))
-- )

#获取借款到期名单
-- select 
-- count(id) as loan_cnt,
-- sum(amount) as loan_amount,
-- avg(DATEDIFF(reback_time,loan_time)) as avg_day
-- from loan_table
-- where expire_time="2020-01-05"

#获取即将到期的借款信息
-- select
-- count(id) as loan_cnt,
-- count(if(status=1,id,null)) as reback_cnt
-- from loan_table
-- where expire_time between curdate() and date_sub(curdate(),interval 6 day)

#历史逾期借款信息
select
	count(id) as loan_cnt,
	sum(amount) as loan_amount,
	count(if(status=0,id,null)) as no_reback_cnt,
	sum(if(status=0,amount,0)) as no_reback_amount
from
	loan_table
where
	(reback_time>expire_time)
	or
	(reback_time is null and expire_time<curdate())
```