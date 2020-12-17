---
title: 《SQL必知必会》笔记
date: 2020-11-25
draft: false
tags: ["sql","notes"]
categories: ["数据库系列"]
---

```sql
select prod_name
from products

SELECT DISTINCT vend_id
from products

select prod_name
from products
limit 5 OFFSET 5
limit 5,5 -- 简化版

select prod_name
from products
order by prod_name


select prod_id,prod_price,prod_name
from products
order by 2,3

select prod_name,prod_price
from products
where prod_price=4.49
where prod_price<5;
where prod_price is null;


select cust_name
from customers
where cust_email is null


select prod_name,prod_price
from products
where prod_id="ANV01" or prod_id="DTNTR"

select prod_name,prod_price
from products
where prod_id in ('ANV01','DTNTR')
order by prod_name

select prod_name
from products
where not prod_id='DTNTR'
where prod_id <> 'DTNTR'
order by prod_name


select cust_contact
from customers
where not cust_contact like '[M]%'

-- trim/rtrim/ltrim
select trim(prod_name) + trim(prod_price)
from products
order by prod_name

select concat(prod_name,', ',prod_price) as prod_title
from products
order by prod_name

select prod_id,
	   quantity,
	   item_price,
	   quantity*item_price as expanded_price
from orderitems
where order_num=20008

select order_num
from orders
where year(order_date)=2005

select avg(prod_price) as avg_price
from products

select count(*) as num_cust
from customers

select max(prod_price) as max_price
from products

select min(prod_price) as min_price
from products

select sum(quantity) as items_ordered
from orderitems
where order_num=20005

select avg(distinct prod_price) as avg_price
from products

select prod_id,count(*) as num_prods
from products
GROUP BY prod_id

select cust_id,count(*) as orders
from orders
group by cust_id
HAVING count(*)>2

select prod_id,count(*) as num_prods
from products
where prod_price >=4
GROUP BY prod_id
HAVING count(*)>=2

select order_num,count(*) as items
from orderitems
group by order_num
having count(*) >= 3
having items>=3
order by items, order_num

select cust_id
from orders
where order_num in (20006,20009)

select * 
from orders
from orderitems


select cust_name,cust_contact
from customers
where cust_id in (select cust_id
				from orders
				where order_num in (select order_num
									from orderitems
									where prod_id='ANV02'));

select count(*) as orders
select *
from orders
where cust_id='10001';

select cust_name,
		cust_state,
		(select count(*)
		from orders
		where orders.cust_id=customers.cust_id) as orders
from customers
order by cust_name

select vend_name,prod_name,prod_price
from vendors,products
where vendors.vend_id=products.vend_id

select vend_name,prod_name,prod_price
from vendors INNER JOIN products
on vendors.vend_id=products.vend_id

select prod_name,vend_name,prod_price,quantity
from orderitems,products,vendors
where products.vend_id=vendors.vend_id
and orderitems.prod_id=products.prod_id
and order_num=20007;

select cust_name,cust_contact
from customers,orders,orderitems
where customers.cust_id=orders.cust_id
and orderitems.order_num=orders.order_num
and prod_id=

select cust_id,cust_name,cust_contact
from customers
where cust_name=(select cust_name
				from customers
				where cust_contact='Jim Jones');

select customers.cust_id,orders.order_num
from customers inner join orders
on customers.cust_id=orders.cust_id

select customers.cust_id,orders.order_num
from customers right outer join orders
on orders.cust_id=customers.cust_id

select customers.cust_id,orders.order_num
from orders full outer join customers
on orders.cust_id=customers.cust_id

select customers.cust_id,count(orders.order_num) as num_ord
from customers inner join orders
on customers.cust_id=orders.cust_id
group by customers.cust_id

select customers.cust_id,
		count(orders.order_num) as num_ord
from customers left outer join orders
on customers.cust_id=orders.cust_id
group by customers.cust_id


select cust_name, cust_contact, cust_email
from customers
where cust_state in ('IL','IN','MI')
union
select cust_name,cust_contact,cust_email
from customers
where cust_name='Wascals'

select cust_name, cust_contact, cust_email
from customers
where cust_state in ('IL','IN','MI')
on cust_name='E Fudd'

```