---
title: 使用SQL窗口函数进行商务数据分析
date: 2020-11-26
draft: false
tags: ["sql"]
categories: ["数据库系列"]
---

新建`orders`表

```sql
create table orders(
order_id int,
customer_id varchar(50),
city varchar(50),
add_time varchar(50),
amount decimal(10,2));
```

准备数据

```sql
INSERT INTO orders VALUES
(1,"A","上海","2020-01-01 00:00:00.000000",200),
(2,"B","上海","2020-01-05 00:00:00.000000",250),
(3,"C","北京","2020-01-12 00:00:00.000000",200),
(4,"A","上海","2020-02-04 00:00:00.000000",400),
(5,"D","上海","2020-02-05 00:00:00.000000",250),
(5,"D","上海","2020-02-05 12:00:00.000000",300),
(6,"C","北京","2020-02-19 00:00:00.000000",300),
(7,"A","上海","2020-03-01 00:00:00.000000",150),
(8,"E","北京","2020-03-05 00:00:00.000000",500),
(9,"F","上海","2020-03-09 00:00:00.000000",250),
(10,"B","上海","2020-03-21 00:00:00.000000",600);
```

### 需求1：收入增长

在业务方面，第m1个月的收入增长计算如下：`100 *（m1-m0）/ m0`

其中，m1是给定月份的收入，m0是上个月的收入。因此，从技术上讲，我们需要找到每个月的收入，然后以某种方式将每个月的收入与上一个收入相关联，以便进行上述计算。计算当时如下：

```sql
WITH
monthly_revenue as (
    SELECT
    trunc(add_time,'MM') as month,
    sum(amount) as revenue
    FROM orders
    GROUP BY 1
)
,prev_month_revenue as (
    SELECT 
    month,
    revenue,
    lag(revenue) over (order by month) as prev_month_revenue -- 上一月收入
    FROM monthly_revenue
)
SELECT 
  month,
  revenue,
  prev_month_revenue,
  round(100.0*(revenue-prev_month_revenue)/prev_month_revenue,1) as revenue_growth
FROM prev_month_revenue
ORDER BY 1
```


