---
title: "LeetCode SQL刷题记录"
date: 2020-08-27
draft: false
tags: ["mysql"]
categories: ["数据库系列"]
---



175.【简单】**[组合两个表](https://leetcode-cn.com/problems/combine-two-tables/)**
```sql
select 
  p.FirstName,
  p.LastName,
  a.City,
  a.State
from person p 
left join address a 
on p.personid=a.personid;
```

176.【简单】**[第二高的薪水](https://leetcode-cn.com/problems/second-highest-salary/)**
```sql
select ifnull((select distinct(Salary) 
                from Employee 
                order by Salary desc 
                limit 1,1),null) as SecondHighestSalary;
```

177.【中等】**[第N高的薪水](https://leetcode-cn.com/problems/nth-highest-salary/)**
```sql
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
set n=n-1;
  RETURN (
      # Write your MySQL query statement below.
      select distinct Salary as getNthHighestSalary
      from Employee
      order by Salary DESC
      limit N,1
  );
END
```

178.【中等】 **[分数排名](https://leetcode-cn.com/problems/rank-scores/submissions/)**
```sql
select Score,
dense_rank() over(order by Score desc) as "Rank"
from Scores
```

180.【中等】 **[连续出现的数字](https://leetcode-cn.com/problems/consecutive-numbers/)**

方法一：使用`row_number()`函数
```sql
select distinct(num) "ConsecutiveNums"
from (select num,
        (row_number() over(order by id )-row_number() over(partition by num order by id)) rank_
      from Logs) as t
group by t.rank_,t.num
having count(rank_)>=3;
```

方法二：使用`lead()`函数
```sql
select distinct Num consecutiveNums
from (select Num,
            lead(Num,1) over(order by id) n1,
            lead(Num,2) over(order by id) n2 
      from Logs) as t
where Num = n1
and Num = n2
```

181.【简单】**[超过经理收入的员工](https://leetcode-cn.com/problems/employees-earning-more-than-their-managers/)**
```sql
select e1.Name as Employee from Employee as e1,Employee as e2
where e1.Salary > e2.Salary and e1.ManagerId = e2.Id;
```

182.【简单】[查找重复的电子邮箱](https://leetcode-cn.com/problems/duplicate-emails/)
```sql
select Email 
from Person
group by Email 
having count(Email)>1;
```

183.【简单】**[从不订购的客户](https://leetcode-cn.com/problems/customers-who-never-order/)**
```sql
select c.Name as Customers 
from Customers c
left join Orders o 
on c.Id=o.CustomerId
where o.Id is null;
```

196.【简单】**[删除重复的电子邮箱](https://leetcode-cn.com/problems/delete-duplicate-emails/)**
```sql
delete p1 
from 
  Person p1,
  Person p2
where p1.Email=p2.Email
and p1.Id > p2.Id;
```

197.【简单】**[上升的温度](https://leetcode-cn.com/problems/rising-temperature/)**
```sql
select w1.Id 
from 
  Weather w1,
  Weather w2
where DATEDIFF(w1.RecordDate,w2.RecordDate)=1
and w2.Temperature<w1.Temperature;
```

595.【简单】**[大的国家](https://leetcode-cn.com/problems/big-countries/)**
```sql
select 
  name,
  population,
  area
from World
where area>3000000 
or population>25000000;
```

596.【简单】**[超过5名学生的课](https://leetcode-cn.com/problems/classes-more-than-5-students/)**
```sql
select class 
from courses
group by class
having count(distinct student)>=5;
```

620.【简单】**[有趣的电影](https://leetcode-cn.com/problems/not-boring-movies/)**
```sql
select * 
from cinema
where description <> "boring" 
and id%2=1
order by rating desc;
```

627.【简单】**[交换工资](https://leetcode-cn.com/problems/swap-salary/)**
```sql
update salary 
set sex = if(sex="m" ,"f", "m")
```

1179.【简单】**[重新格式化部门表](https://leetcode-cn.com/problems/reformat-department-table/)**
```sql
SELECT 
  DISTINCT id AS "id",
  SUM(IF (month = "Jan", revenue, null)) AS "Jan_Revenue",
  SUM(IF (month = "Feb", revenue, null)) AS "Feb_Revenue",
  SUM(IF (month = "Mar", revenue, null)) AS "Mar_Revenue",
  SUM(IF (month = "Apr", revenue, null)) AS "Apr_Revenue",
  SUM(IF (month = "May", revenue, null)) AS "May_Revenue",
  SUM(IF (month = "Jun", revenue, null)) AS "Jun_Revenue",
  SUM(IF (month = "Jul", revenue, null)) AS "Jul_Revenue",
  SUM(IF (month = "Aug", revenue, null)) AS "Aug_Revenue",
  SUM(IF (month = "Sep", revenue, null)) AS "Sep_Revenue",
  SUM(IF (month = "Oct", revenue, null)) AS "Oct_Revenue",
  SUM(IF (month = "Nov", revenue, null)) AS "Nov_Revenue",
  SUM(IF (month = "Dec", revenue, null)) AS "Dec_Revenue" 
FROM Department GROUP BY id
```
