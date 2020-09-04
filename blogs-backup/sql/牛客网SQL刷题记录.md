---
title: "牛客网SQL刷题记录"
date: 2020-08-26
draft: false
categories: ["数据库学习"]
---


[1.查找最晚入职员工的所有信息](https://www.nowcoder.com/practice/218ae58dfdcd4af195fff264e062138f?tpId=82&rp=1&ru=%2Fta%2Fsql&qru=%2Fta%2Fsql%2Fquestion-ranking)
```sql
select * from employees
order by hire_date desc limit 0,1;
```

[2.查找入职员工时间排名倒数第三的员工所有信息](https://www.nowcoder.com/practice/ec1ca44c62c14ceb990c3c40def1ec6c?tpId=82&rp=1&ru=%2Fta%2Fsql&qru=%2Fta%2Fsql%2Fquestion-ranking)
```sql
select * from employees
order by hire_date desc limit 2,1;
```

[3.查找当前薪水详情以及部门编号dept_no](https://www.nowcoder.com/practice/c63c5b54d86e4c6d880e4834bfd70c3b?tpId=82&rp=1&ru=%2Fta%2Fsql&qru=%2Fta%2Fsql%2Fquestion-ranking)
```sql
select salaries.*,dept_manager.dept_no from salaries,dept_manager
on salaries.emp_no = dept_manager.emp_no
where salaries.to_date='9999-01-01' and dept_manager.to_date='9999-01-01';
```

[4.查找所有已经分配部门的员工的last_name和first_name以及dept_no](https://www.nowcoder.com/practice/6d35b1cd593545ab985a68cd86f28671?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select employees.last_name,employees.first_name,dept_emp.dept_no
from employees,dept_emp
on employees.emp_no = dept_emp.emp_no;
```

[5.查找所有员工的last_name和first_name以及对应部门编号dept_no，也包括暂时没有分配具体部门的员工](https://www.nowcoder.com/practice/dbfafafb2ee2482aa390645abd4463bf?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select employees.last_name,employees.first_name,dept_emp.dept_no
from employees
left join dept_emp
on dept_emp.emp_no=employees.emp_no;
```

[6.查找所有员工入职时候的薪水情况，给出emp_no以及salary， 并按照emp_no进行逆序](https://www.nowcoder.com/practice/23142e7a23e4480781a3b978b5e0f33a?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select employees.emp_no,salaries.salary from employees
left join salaries
where employees.emp_no=salaries.emp_no
and employees.hire_date = salaries.from_date
order by employees.emp_no desc;
```

[7.查找薪水变动超过15次的员工号emp_no以及其对应的变动次数t](https://www.nowcoder.com/practice/6d4a4cff1d58495182f536c548fee1ae?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select emp_no,count(emp_no) as t
from salaries
group by emp_no
having count(emp_no)>15;
```

[8.找出所有员工当前(to_date='9999-01-01')具体的薪水salary情况，对于相同的薪水只显示一次,并按照逆序显示](https://www.nowcoder.com/practice/ae51e6d057c94f6d891735a48d1c2397?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select distinct salary from salaries
where to_date='9999-01-01'
order by salary desc;
```

[9.获取所有部门当前(dept_manager.to_date='9999-01-01')manager的当前(salaries.to_date='9999-01-01')薪水情况，给出dept_no, emp_no以及salary](https://www.nowcoder.com/practice/4c8b4a10ca5b44189e411107e1d8bec1?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select d.dept_no,s.emp_no,s.salary
from dept_manager d,salaries s
where d.to_date='9999-01-01'
and s.to_date='9999-01-01'
and d.emp_no=s.emp_no;
```

[10.获取所有非manager的员工emp_no](https://www.nowcoder.com/practice/32c53d06443346f4a2f2ca733c19660c?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select emp_no
from employees
where emp_no
not in (select emp_no from dept_manager);
```

[11.获取所有员工当前的(dept_manager.to_date='9999-01-01')manager，如果员工是manager的话不显示(也就是如果当前的manager是自己的话结果不显示)。输出结果第一列给出当前员工的emp_no,第二列给出其manager对应的emp_no](https://www.nowcoder.com/practice/e50d92b8673a440ebdf3a517b5b37d62?tpId=82&&tqId=29763&rp=1&ru=/ta/sql&qru=/ta/sql/question-ranking)
```sql
select de.emp_no,dm.emp_no as manager_no
from dept_emp as de
inner join dept_manager as dm
on de.dept_no=dm.dept_no
where dm.to_date='9999-01-01'
and de.to_date='9999-01-01'
and de.emp_no <> dm.emp_no;
```

[12.获取所有部门中当前(dept_emp.to_date = '9999-01-01')员工当前(salaries.to_date='9999-01-01')薪水最高的相关信息，给出dept_no, emp_no以及其对应的salary，按照部门升序排列](https://www.nowcoder.com/practice/4a052e3e1df5435880d4353eb18a91c6?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select e.dept_no,e.emp_no,MAX(s.salary)
from dept_emp e inner join salaries s
on e.emp_no = s.emp_no 
where s.to_date='9999-01-01' and e.to_date = '9999-01-01'
GROUP BY e.dept_no
```

[13.从titles表获取按照title进行分组，每组个数大于等于2，给出title以及对应的数目t](https://www.nowcoder.com/practice/72ca694734294dc78f513e147da7821e?tpId=82&&tqId=29765&rp=1&ru=/ta/sql&qru=/ta/sql/question-ranking)
```sql
select title,count(title) t
from titles
group by title
having t >= 2
```

[14.从titles表获取按照title进行分组，每组个数大于等于2，给出title以及对应的数目t。
注意对于重复的emp_no进行忽略(即emp_no重复的title不计算，title对应的数目t不增加)。](https://www.nowcoder.com/practice/c59b452f420c47f48d9c86d69efdff20?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select title,count(distinct emp_no) t
from titles
group by title
having t>= 2
```

[15.查找employees表所有emp_no为奇数，且last_name不为Mary(注意大小写)的员工信息，并按照hire_date逆序排列(题目不能使用mod函数)](https://www.nowcoder.com/practice/a32669eb1d1740e785f105fa22741d5c?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select * from employees
where emp_no%2=1
and last_name<>"Mary"
order by hire_date desc
```

[16.统计出当前(titles.to_date='9999-01-01')各个title类型对应的员工当前(salaries.to_date='9999-01-01')薪水对应的平均工资。结果给出title以及平均工资avg。](https://www.nowcoder.com/practice/c8652e9e5a354b879e2a244200f1eaae?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select t.title,avg(s.salary)
from titles t
join salaries s
on t.emp_no=s.emp_no
where t.to_date='9999-01-01'
and s.to_date='9999-01-01'
group by t.title
```

[17.获取当前（to_date='9999-01-01'）薪水第二多的员工的emp_no以及其对应的薪水salary](nowcoder.com/practice/8d2c290cc4e24403b98ca82ce45d04db?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select emp_no,salary
from salaries
order by salary desc limit 1,1
```

[18.查找当前薪水(to_date='9999-01-01')排名第二多的员工编号emp_no、薪水salary、last_name以及first_name，你可以不使用order by完成吗](https://www.nowcoder.com/practice/c1472daba75d4635b7f8540b837cc719?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select e.emp_no,max(s.salary) as salary,e.last_name,e.first_name
from employees e
join salaries s
on e.emp_no=s.emp_no
where s.salary not in (
select max(salary)
    from salaries
```

[19.查找所有员工的last_name和first_name以及对应的dept_name，也包括暂时没有分配部门的员工](https://www.nowcoder.com/practice/5a7975fabe1146329cee4f670c27ad55?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select e.last_name,e.first_name,d.dept_name
from employees e
left join dept_emp de
on e.emp_no=de.emp_no
left join departments d
on de.dept_no=d.dept_no
```

[20.查找员工编号emp_no为10001其自入职以来的薪水salary涨幅(总共涨了多少)growth(可能有多次涨薪，没有降薪)](https://www.nowcoder.com/practice/c727647886004942a89848e2b5130dc2?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select max(salary)-min(salary) growth
from salaries
where emp_no="10001"
```

[21.查找所有员工自入职以来的薪水涨幅情况，给出员工编号emp_no以及其对应的薪水涨幅growth，并按照growth进行升序](https://www.nowcoder.com/practice/fc7344ece7294b9e98401826b94c6ea5?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select a.emp_no,(b.salary-c.salary) growth
from employees as a
inner join salaries as b
on a.emp_no=b.emp_no
and b.to_date="9999-01-01"
inner join salaries as c
on a.emp_no=c.emp_no
and a.hire_date=c.from_date
order by growth asc
```

[22.统计各个部门的工资记录数，给出部门编码dept_no、部门名称dept_name以及部门在salaries表里面有多少条记录sum](https://www.nowcoder.com/practice/6a62b6c0a7324350a6d9959fa7c21db3?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select d.dept_no,d.dept_name,count(*)sum
from departments d
inner join dept_emp de
on d.dept_no=de.dept_no
inner join salaries s
on s.emp_no=de.emp_no
group by de.dept_no
```

[23.对所有员工的当前(to_date='9999-01-01')薪水按照salary进行按照1-N的排名，相同salary并列且按照emp_no升序排列](https://www.nowcoder.com/practice/b9068bfe5df74276bd015b9729eec4bf?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select emp_no,salary,dense_rank() over (order by salary desc) as rank
from salaries
where to_date='9999-01-01'
```

[24.获取所有非manager员工当前的薪水情况，给出dept_no、emp_no以及salary ，当前表示to_date='9999-01-01'](https://www.nowcoder.com/practice/8fe212a6c71b42de9c15c56ce354bebe?tpId=82&&tqId=29776&rp=1&ru=/ta/sql&qru=/ta/sql/question-ranking)
```sql
select de.dept_no,e.emp_no,s.salary
from dept_emp de
inner join employees e
on e.emp_no=de.emp_no
inner join salaries s
on de.emp_no=s.emp_no
where s.to_date="9999-01-01"
and de.emp_no not in (
select emp_no from dept_manager
)
```

[25.获取员工其当前的薪水比其manager当前薪水还高的相关信息](https://www.nowcoder.com/practice/f858d74a030e48da8e0f69e21be63bef?tpId=82&&tqId=29777&rp=1&ru=/ta/sql&qru=/ta/sql/question-ranking)
```sql
获取员工其当前的薪水比其manager当前薪水还高的相关信息，当前表示to_date='9999-01-01',
结果第一列给出员工的emp_no，
第二列给出其manager的manager_no，
第三列给出该员工当前的薪水emp_salary,
第四列给该员工对应的manager当前的薪水manager_salary
CREATE TABLE `dept_emp` (
`emp_no` int(11) NOT NULL,
`dept_no` char(4) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`dept_no`));
CREATE TABLE `dept_manager` (
`dept_no` char(4) NOT NULL,
`emp_no` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`dept_no`));
CREATE TABLE `salaries` (
`emp_no` int(11) NOT NULL,
`salary` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`from_date`));
```
答案：
```sql
SELECT sem.emp_no AS emp_no, sdm.emp_no AS manager_no, sem.salary AS emp_salary, sdm.salary AS manager_salary
FROM (
    SELECT s.salary, s.emp_no, de.dept_no
    FROM salaries s
    INNER JOIN dept_emp de 
    ON s.emp_no = de.emp_no
    AND s.to_date = '9999-01-01') AS sem, 
    (SELECT s.salary, s.emp_no, dm.dept_no
    FROM salaries s
    INNER JOIN dept_manager dm 
    ON s.emp_no = dm.emp_no
    AND s.to_date = '9999-01-01') AS sdm
WHERE sem.dept_no = sdm.dept_no
AND sem.salary > sdm.salary
```

[26.汇总各个部门当前员工的title类型的分配数目，即结果给出部门编号dept_no、dept_name、其部门下所有的当前(dept_emp.to_date = '9999-01-01')员工的当前(titles.to_date = '9999-01-01')title以及该类型title对应的数目count](https://www.nowcoder.com/practice/4bcb6a7d3e39423291d2f7bdbbff87f8?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select de.dept_no,dp.dept_name,t.title,count(t.title) as title
from titles as t
inner join dept_emp as de
on t.emp_no=de.emp_no
and de.to_date='9999-01-01'
and t.to_date='9999-01-01'
inner join departments as dp
on de.dept_no=dp.dept_no
group by de.dept_no,t.title
```

[27.给出每个员工每年薪水涨幅超过5000的员工编号emp_no、薪水变更开始日期from_date以及薪水涨幅值salary_growth，并按照salary_growth逆序排列](https://www.nowcoder.com/practice/eb9b13e5257744db8265aa73de04fd44?tpId=82&&tqId=29779&rp=1&ru=/ta/sql&qru=/ta/sql/question-ranking)


[28.查找描述信息(film.description)中包含robot的电影对应的分类名称(category.name)以及电影数目(count(film.film_id))，而且还需要该分类包含电影总数量(count(film_category.category_id))>=5部](https://www.nowcoder.com/practice/3a303a39cc40489b99a7e1867e6507c5?tpId=82&&tqId=29780&rp=1&ru=/ta/sql&qru=/ta/sql/question-ranking)


[29.使用join查询方式找出没有分类的电影id以及名称](https://www.nowcoder.com/practice/a158fa6e79274ac497832697b4b83658?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select f.film_id,f.title
from film as f
left join film_category as fc
on f.film_id=fc.film_id
where fc.category_id is null
```

[30.使用子查询的方式找出属于Action分类的所有电影对应的title,description吗](https://www.nowcoder.com/practice/2f2e556d335d469f96b91b212c4c203e?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select title,description
from film 
where film_id in(
    select film_id
    from film_category
    where category_id in(
        select category_id
        from category
        where name like 'action'
    )
)
```

[32.将employees表的所有员工的last_name和first_name拼接起来作为Name，中间以一个空格区分](https://www.nowcoder.com/practice/6744b90bbdde40209f8ecaac0b0516fe?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select last_name||" "||first_name as Name
from employees
```

[33.创建一个actor表，包含如下列信息(注：sqlite获取系统默认时间是datetime('now','localtime'))](https://www.nowcoder.com/practice/ac233de508ef4849b0eeb4f38dcf09cf?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
create table if not exists actor(
    actor_id smallint(5) not null,
    first_name varchar(45) not null,
    last_name varchar(45) not null,
    last_update timestamp not null default (datetime('now', 'localtime')),
    primary key(actor_id)
)
```

[34.对于表actor批量插入如下数据(不能有2条insert语句哦!)](https://www.nowcoder.com/practice/51c12cea6a97468da149c04b7ecf362e?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
insert into actor values
(1,'PENELOPE','GUINESS','2006-02-15 12:34:33'),
(2,'NICK','WAHLBERG','2006-02-15 12:34:33')
```

[35.对于表actor批量插入如下数据,如果数据已经存在，请忽略(不支持使用replace操作)](https://www.nowcoder.com/practice/153c8a8e7805400ba8e384e03acc6b3e?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
insert or ignore into actor values
(3,'ED','CHASE','2006-02-15 12:34:33')
```

[36.请你创建一个actor_name表，并且将actor表中的所有first_name以及last_name导入该表.](https://www.nowcoder.com/practice/881385f388cf4fe98b2ed9f8897846df?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
create table actor_name as
select first_name,last_name from actor
```

[37.针对如下表actor结构创建索引](https://www.nowcoder.com/practice/e1824daa0c49404aa602cf0cb34bdd75?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
create unique index uniq_idx_firstname on actor(first_name);
create index idx_lastname on actor(last_name);
```

[38.针对actor表创建视图actor_name_view，只包含first_name以及last_name两列，并对这两列重新命名，first_name为first_name_v，last_name修改为last_name_v](https://www.nowcoder.com/practice/b9db784b5e3d488cbd30bd78fdb2a862?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
create view actor_name_view
as select first_name as first_name_v,
last_name as last_name_v
from actor
```

[39.针对salaries表emp_no字段创建索引idx_emp_no，查询emp_no为10005, 使用强制索引。](https://www.nowcoder.com/practice/f9fa9dc1a1fc4130b08e26c22c7a1e5f?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
SELECT * FROM salaries INDEXED BY idx_emp_no WHERE emp_no = 10005
```

[40.现在在last_update后面新增加一列名字为create_date, 类型为datetime, NOT NULL，默认值为'0000-00-00 00:00:00'](https://www.nowcoder.com/practice/119f04716d284cb7a19fba65dd876b03?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
alter table actor 
add `create_date` datetime not null default '0000-00-00 00:00:00'
```

[41.构造一个触发器audit_log，在向employees_test表中插入一条数据的时候，触发插入相关的数据到audit中。](https://www.nowcoder.com/practice/7e920bb2e1e74c4e83750f5c16033e2e?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
create trigger audit_log
after insert
on employees_test
begin
insert into audit values (NEW.ID,NEW.NAME);
end;
```

[42.删除emp_no重复的记录，只保留最小的id对应的记录。](https://www.nowcoder.com/practice/3d92551a6f6d4f1ebde272d20872cf05?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
delete from titles_test
where id not in (
    select min(id)
    from titles_test
    group by emp_no
)
```

[43.将所有to_date为9999-01-01的全部更新为NULL,且 from_date更新为2001-01-01](https://www.nowcoder.com/practice/859f28f43496404886a77600ea68ef59?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
update titles_test
set 
to_date=NULL,
from_date="2001-01-01"
where to_date='9999-01-01'
```

[44.将id=5以及emp_no=10001的行数据替换成id=5以及emp_no=10005,其他数据保持不变，使用replace实现](https://www.nowcoder.com/practice/2bec4d94f525458ca3d0ebf3bc8cd240?tpId=82&&tqId=29812&rp=1&ru=/ta/sql&qru=/ta/sql/question-ranking)
```sql
update titles_test set emp_no=replace(emp_no,"10001","10005") where id=5
```

[45.将titles_test表名修改为titles_2017](https://www.nowcoder.com/practice/5277d7f92aa746ab8aa42886e5d570d4?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
alter table titles_test rename to titles_2017
```

[46.在audit表上创建外键约束，其emp_no对应employees_test表的主键id](https://www.nowcoder.com/practice/aeaa116185f24f209ca4fa40e226de48?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
drop table audit;
create table audit(
    EMP_no int not null,
    create_date datetime not null,
    foreign key(EMP_no) references employees_test(ID)
)
```

[48.请你写出更新语句，将所有获取奖金的员工当前的(salaries.to_date='9999-01-01')薪水增加10%。(emp_bonus里面的emp_no都是当前获奖的所有员工)](https://www.nowcoder.com/practice/d3b058dcc94147e09352eb76f93b3274?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
update salaries
set salary = salary * 1.1 
where salaries.to_date='9999-01-01'
and emp_no in (select emp_no from emp_bonus)
```

[49.针对库中的所有表生成select count(*)对应的SQL语句，如数据库里有以下表，(注:在 SQLite 中用 “||” 符号连接字符串，无法使用concat函数)](https://www.nowcoder.com/practice/355036f7f0c8429a85281f7ac05b457a?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select 'select count(*) from' || name || ';' as cnts
from sqlite_master
where type='table'
```

[50.将employees表中的所有员工的last_name和first_name通过(')连接起来。(不支持concat，请用||实现)](https://www.nowcoder.com/practice/810bf4ee3ac64949b08983aa66ec7bee?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select last_name||"'"||first_name as name
from employees
```

[51.查找字符串'10,A,B' 中逗号','出现的次数cnt。](https://www.nowcoder.com/practice/e3870bd5d6744109a902db43c105bd50?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select length('10,A,B')-length(replace('10,A,B',',','')) as cnt;
```

[52.获取Employees中的first_name，查询按照first_name最后两个字母，按照升序进行排列](https://www.nowcoder.com/practice/74d90728827e44e2864cce8b26882105?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select first_name
from employees
order by substr(first_name,-2) asc
```

[53.按照dept_no进行汇总，属于同一个部门的emp_no按照逗号进行连接，结果给出dept_no以及连接出的结果employees](https://www.nowcoder.com/practice/6e86365af15e49d8abe2c3d4b5126e87?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select dept_no, group_concat(emp_no) as employees
from dept_emp
group by dept_no
```

[54.查找排除最大、最小salary之后的当前(to_date = '9999-01-01' )员工的平均工资avg_salary。](https://www.nowcoder.com/practice/95078e5e1fba4438b85d9f11240bc591?tpId=82&&tqId=29822&rp=1&ru=/ta/sql&qru=/ta/sql/question-ranking)
```sql
select avg(salary) as avg_salary from salaries
where to_date='9999-01-01'
and salary<>(select min(salary) from salaries where to_date='9999-01-01')
and salary<(select max(salary) from salaries where to_date='9999-01-01')
```

[55.分页查询employees表，每5行一页，返回第2页的数据](https://www.nowcoder.com/practice/f24966e0cb8a49c192b5e65339bc8c03?tpId=82&&tqId=29823&rp=1&ru=/ta/sql&qru=/ta/sql/question-ranking)
```sql
select * from employees limit 5,5;
```

[56.获取所有员工的emp_no、部门编号dept_no以及对应的bonus类型btype和received，没有分配奖金的员工不显示对应的bonus类型btype和received](https://www.nowcoder.com/practice/e2dab5477fdd4ec0ba84031f8e817b8a?tpId=82&&tqId=29824&rp=1&ru=/ta/sql&qru=/ta/sql/question-ranking)
```sql
select de.emp_no as emp_no,de.dept_no as dept_no,eb.btype as btype, eb.received as received
from dept_emp as de
left join employees as e
on de.emp_no=e.emp_no
left join emp_bonus as eb
on de.emp_no=eb.emp_no
```

[57.使用含有关键字exists查找未分配具体部门的员工的所有信息。](https://www.nowcoder.com/practice/c39cbfbd111a4d92b221acec1c7c1484?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select * from employees e
where not exists(
    select emp_no from dept_emp de
    where de.emp_no=e.emp_no
)
```

[58.获取employees中的行数据，且这些行也存在于emp_v中。注意不能使用intersect关键字。](https://www.nowcoder.com/practice/2556c1fcc92c490d9bf331ab07dfb7dc?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select * from emp_v
```

[59.给出emp_no、first_name、last_name、奖金类型btype、对应的当前薪水情况salary以及奖金金额bonus。 bonus类型btype为1其奖金为薪水salary的10%，btype为2其奖金为薪水的20%，其他类型均为薪水的30%。 当前薪水表示to_date='9999-01-01'](https://www.nowcoder.com/practice/5cdbf1dcbe8d4c689020b6b2743820bf?tpId=82&tags=&title=&diffculty=0&judgeStatus=0&rp=1)
```sql
select e.emp_no,e.first_name,e.last_name,eb.btype,s.salary,
(case eb.btype when 1 then s.salary*0.1 when 2 then s.salary*0.2 else s.salary*0.3 end) as bonus
from employees as e
inner join emp_bonus as eb
on e.emp_no=eb.emp_no
inner join salaries as s
on e.emp_no=s.emp_no
where s.to_date='9999-01-01'
```


