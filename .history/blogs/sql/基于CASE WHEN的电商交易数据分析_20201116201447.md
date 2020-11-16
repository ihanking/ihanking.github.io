---
title: 基于CASE WHEN的电商交易数据分析
date: 2020-11-11
draft: false
tags: ["sql"]
categories: ["数据库系列"]
---

表结构如下：
```sql
+-------------+--------------+------+-----+---------+-------+
| Field       | Type         | Null | Key | Default | Extra |
+-------------+--------------+------+-----+---------+-------+
| Uid         | int(11)      | YES  |     | NULL    |       |
| Birthday    | datetime     | YES  |     | NULL    |       |
| Order_Date  | datetime     | YES  |     | NULL    |       |
| Order_Id    | varchar(100) | YES  |     | NULL    |       |
| Pay_Type    | int(11)      | YES  |     | NULL    |       |
| Pay_Amt     | float        | YES  |     | NULL    |       |
| Is_Discount | int(11)      | YES  |     | NULL    |       |
+-------------+--------------+------+-----+---------+-------+
```

### 离散数值映射实际含义
```sql
select *,
case when Is_Discount=1 then '享受折扣'
else '无折扣' end as Discount_New,
case when Pay_Type in (1,3,5,7,10) then '微信支付'
when Pay_Type in (6,9,12) then '快捷支付'
else '支付宝支付' end as Pay_Type_New
from Orders
limit 5;
```

### 连续数值映射为离散区间
```sql
SELECT *,
    CASE WHEN YEAR(Birthday) BETWEEN 1960 AND 1969 THEN '60后'
    WHEN YEAR(Birthday) BETWEEN 1970 AND 1979 THEN '70后'
    WHEN YEAR(Birthday) BETWEEN 1980 AND 1989 THEN '80后'
    ELSE '90后' END AS Age_Group
FROM Orders
LIMIT 5;
```

### 长形统计表
```sql
SELECT MONTH(Order_Date) AS Month,
    CASE WHEN Pay_Type IN (1,3,5,7,10) THEN '微信支付'
    WHEN Pay_Type IN (6,9,12) THEN '快捷支付'
    ELSE '支付宝支付' END AS Pay_Type,
    SUM(Pay_Amt) AS Amt
FROM Orders
WHERE YEAR(Order_Date) = 2018
GROUP BY MONTH(Order_Date),
    CASE WHEN Pay_Type IN (1,3,5,7,10) THEN '微信支付'
    WHEN Pay_Type IN (6,9,12) THEN '快捷支付'
    ELSE '支付宝支付' END
order by Month asc;
```

### 宽形统计表
```sql
select month(Order_Date) as Month,
sum(case when Pay_Type in (1,3,5,7,10) then Pay_Amt end) as 'Wechat',
sum(case when Pay_Type in (6,9,12) then Pay_Amt end) as 'Bank_Card',
sum(case when Pay_Type not in (1,3,5,6,7,9,10,12) then Pay_Amt end) as 'Ali_Pay'
from Orders
where year(Order_Date)=2018
group by Month
order by Month
```




