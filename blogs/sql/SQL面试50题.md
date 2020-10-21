---
title: SQL面试50题
date: 2020-09-11
draft: false
categories: ["数据库系列"]
---

为了准备面试，重新再刷一遍sql实战题

**1.1查询"01"课程比"02"课程成绩高的学生的信息及课程分数**

解法1:
```sql
select student.*,t1.cid,t1.cscore,t2.cid,t2.cscore
from student
inner join (select * from score where cid='01') t1
on student.sid=t1.sid
inner join (select * from score where cid='02') t2
on t1.sid=t2.sid
where t1.cscore>t2.cscore
```

解法2:
```sql
select distinct t1.sid as sid 
from (select * from sc where cid='01') t1 
left join (select * from sc where cid='02') t2
on t1.sid=t2.sid
where t1.score > t2.score
```

1.2查询同时上过"01"课程和"02"课程的学生
```sql
select t1.sid,t1.cid,t2.cid
from (select * from score where score.cid='01') t1
inner join (select * from score where score.cid='02') t2
on t1.sid=t2.sid;
```

1.3查询上过"01"课程但可能没上过"02"课程的学生 (这种情况显示为 null)


1.4查询没上过"01"课程，只上过"02"课程的学生

2.查询平均成绩大于等于 60 分的同学的学生编号、学生姓名和平均成绩

3.查询在 SC 表存在成绩的学生信息

4.查询所有同学的学生编号、学生姓名、选课总数、所有课程的总成绩（没成绩的显示为 null）

5.查询「李」姓老师的数量

6.查询学过张三老师授课的同学的信息

7.查询没有学全所有课程的同学的信息

8.查询至少有一门课与学号为"01"的同学所学相同的同学的信息

9.查询和"01"号的同学学习的课程完全相同的其他同学的信息

10.查询没学过"张三"老师讲授的任一门课程的学生姓名

11.查询两门及其以上不及格课程的同学的学号，姓名及其平均成绩

12.检索"01"课程分数小于 60，按分数降序排列的学生信息

13.按平均成绩从高到低显示所有学生的所有课程的成绩以及平均成绩

14.查询各科成绩最高分、最低分和平均分，以如下形式显示：
>课程 ID，课程 name，最高分，最低分，平均分，及格率，中等率，优良率，优秀率（及格为>=60，中等为：70-80，优良为：80-90，优秀为：>=90）要求输出课程号和选修人数，查询结果按人数降序排列列，若人数相同，按课程号升序排列

15.1按各科成绩进行排序，并显示排名， 成绩重复时保留名次空缺

15.2按各科成绩进行排序，并显示排名， 成绩重复时合并名次

16.查询学生的总成绩，并进行排名，总分重复时保留名次空缺

17.统计各科成绩各分数段人数：课程编号，课程名称，[100-85]，[85-70]，[70-60]，[60-0] 及所占百分比

18.查询各科成绩前三名的记录

19.查询每门课程被选修的学生数

20.查询出只选修两门课程的学生学号和姓名

21.查询男生、女生人数

22.查询名字中含有「风」字的学生信息

23.查询同名同性学生名单，并统计同名人数

24.查询 1990 年年出生的学生名单

25.查询每门课程的平均成绩，结果按平均成绩降序排列，平均成绩相同时，按课程编号升序排列

26.查询平均成绩大于等于 85 的所有学生的学号、姓名和平均成绩

27.查询课程名称为「数学」，且分数低于 60 的学生姓名和分数

28.查询所有学生的课程及分数情况（存在学生没成绩，没选课的情况）

29.查询任何一门课程成绩在 70 分以上的姓名、课程名称和分数

30.查询不及格的课程

31.查询课程编号为 01 且课程成绩在 80 分及以上的学生的学号和姓名

32.求每门课程的学生人数

33.成绩不重复，查询选修「张三」老师所授课程的学生中，成绩最高的学生信息及其成绩

34.成绩有重复的情况下，查询选修「张三」老师所授课程的学生中，成绩最高的学生信息及其成绩

35.查询不同课程成绩相同的学生的学生编号、课程编号、学生成绩

36.查询所有课程成绩第二名到第三名的学生信息及课程成绩

37.统计每门课程的学生选修人数（超过 5 人的课程才统计）

38.检索至少选修两门课程的学生学号

39.查询选修了全部课程的学生信息

40.查询各学生的年龄，只按年份来算

41.按照出生日期来算，如果当前月日 < 出生年月的月日，年龄减一

42.查询本周过生日的学生

43.查询下周过生日的学生

44.查询本月过生日的学生

45.查询下月过生日的学生

**表格结构**

学生表字段
* Student(Sid, Sname, Sage, Ssex)
* Sid学生编号, Sname学生姓名, Sage出生年月, Ssex学生性别
```sql
mysql> desc Student;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| Sid   | varchar(10) | YES  |     | NULL    |       |
| Sname | varchar(10) | YES  |     | NULL    |       |
| Sage  | datetime    | YES  |     | NULL    |       |
| Ssex  | varchar(10) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
4 rows in set (0.00 sec)

mysql> select * from Student;
+------+--------+---------------------+------+
| Sid  | Sname  | Sage                | Ssex |
+------+--------+---------------------+------+
| 01   | 赵雷   | 1990-01-01 00:00:00 | 男   |
| 02   | 钱电   | 1990-12-21 00:00:00 | 男   |
| 03   | 孙风   | 1990-05-20 00:00:00 | 男   |
| 04   | 李云   | 1990-08-06 00:00:00 | 男   |
| 05   | 周梅   | 1991-12-01 00:00:00 | 女   |
| 06   | 吴兰   | 1992-03-01 00:00:00 | 女   |
| 07   | 郑竹   | 1989-07-01 00:00:00 | 女   |
| 08   | 王菊   | 1990-01-20 00:00:00 | 女   |
+------+--------+---------------------+------+
8 rows in set (0.00 sec)
```

课程表字段
* Course(Cid, Cname, Tid)
* Cid课程编号, Cname课程名称, Tid教师编号
```sql
mysql> desc Course;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| cid   | varchar(10) | YES  |     | NULL    |       |
| cname | varchar(10) | YES  |     | NULL    |       |
| tid   | varchar(10) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
3 rows in set (0.04 sec)

mysql> select * from Course;
+------+--------+------+
| cid  | cname  | tid  |
+------+--------+------+
| 01   | 语文   | 02   |
| 02   | 数学   | 01   |
| 03   | 英语   | 03   |
+------+--------+------+
3 rows in set (0.00 sec)
```

教师表字段
* Teacher(Tid, Tname)
* Tid教师编号, Tname教师姓名
```sql
mysql> desc Teacher;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| tid   | varchar(10) | YES  |     | NULL    |       |
| tname | varchar(10) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.01 sec)

mysql> select * from Teacher;
+------+--------+
| tid  | tname  |
+------+--------+
| 01   | 张三   |
| 02   | 李四   |
| 03   | 王五   |
+------+--------+
3 rows in set (0.00 sec)
```

成绩表字段
* Score(Sid, Cid, Cscore)
* Sid学生编号, Cid课程编号, Cscore分数
```sql
mysql> desc Score;
+--------+---------------+------+-----+---------+-------+
| Field  | Type          | Null | Key | Default | Extra |
+--------+---------------+------+-----+---------+-------+
| sid    | varchar(10)   | YES  |     | NULL    |       |
| cid    | varchar(10)   | YES  |     | NULL    |       |
| cscore | decimal(10,1) | YES  |     | NULL    |       |
+--------+---------------+------+-----+---------+-------+
3 rows in set (0.01 sec)

mysql> select * from Score;
+------+------+--------+
| sid  | cid  | cscore |
+------+------+--------+
| 01   | 01   |   80.0 |
| 01   | 02   |   90.0 |
| 01   | 03   |   99.0 |
| 02   | 01   |   70.0 |
| 02   | 02   |   60.0 |
| 02   | 03   |   80.0 |
| 03   | 01   |   80.0 |
| 03   | 02   |   80.0 |
| 03   | 03   |   80.0 |
| 04   | 01   |   50.0 |
| 04   | 02   |   30.0 |
| 04   | 03   |   20.0 |
| 05   | 01   |   76.0 |
| 05   | 02   |   87.0 |
| 06   | 01   |   31.0 |
| 06   | 03   |   34.0 |
| 07   | 02   |   89.0 |
| 07   | 03   |   98.0 |
+------+------+--------+
18 rows in set (0.00 sec)
```


**最后附上建表代码：**

```sql
create database SQL50;

#学生表
create table Student(Sid varchar(10),Sname varchar(10),Sage datetime,Ssex nvarchar(10));
insert into Student values('01' , '赵雷' , '1990-01-01' , '男');
insert into Student values('02' , '钱电' , '1990-12-21' , '男');
insert into Student values('03' , '孙风' , '1990-05-20' , '男');
insert into Student values('04' , '李云' , '1990-08-06' , '男');
insert into Student values('05' , '周梅' , '1991-12-01' , '女');
insert into Student values('06' , '吴兰' , '1992-03-01' , '女');
insert into Student values('07' , '郑竹' , '1989-07-01' , '女');
insert into Student values('08' , '王菊' , '1990-01-20' , '女');

#课程表
create table Course(cid varchar(10),cname varchar(10),tid varchar(10));
insert into Course values('01' , '语文' , '02');
insert into Course values('02' , '数学' , '01');
insert into Course values('03' , '英语' , '03');

#教师表
create table Teacher(tid varchar(10),tname varchar(10));
insert into Teacher values('01' , '张三');
insert into Teacher values('02' , '李四');
insert into Teacher values('03' , '王五');

#成绩表
create table Score (sid varchar(10),cid varchar(10),cscore decimal(10,1));
insert into Score values('01' , '01' , 80);
insert into Score values('01' , '02' , 90);
insert into Score values('01' , '03' , 99);
insert into Score values('02' , '01' , 70);
insert into Score values('02' , '02' , 60);
insert into Score values('02' , '03' , 80);
insert into Score values('03' , '01' , 80);
insert into Score values('03' , '02' , 80);
insert into Score values('03' , '03' , 80);
insert into Score values('04' , '01' , 50);
insert into Score values('04' , '02' , 30);
insert into Score values('04' , '03' , 20);
insert into Score values('05' , '01' , 76);
insert into Score values('05' , '02' , 87);
insert into Score values('06' , '01' , 31);
insert into Score values('06' , '03' , 34);
insert into Score values('07' , '02' , 89);
insert into Score values('07' , '03' , 98);
```