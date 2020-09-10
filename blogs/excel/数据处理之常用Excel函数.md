---
title: 数据处理之常用Excel函数
date: 2020-09-09
draft: false
tags: ["excel"]
categories: ["数据处理"]
---

## 前言

作为数据工作者，离不开excel表数据的操作，此文主要来讲下工作通常会用到函数或操作

**常见函数分类**

- 文本清洗函数

- 关联匹配函数

- 逻辑运算函数

- 计算统计函数

- 时间序列函数

## 关联匹配

## 计算统计

## 时间序列

## 文本清洗

1.常用的文本清洗函数

- 清除字符串空格：TRIM

- 合并单元格：CONCATENATE

- 截取字符串：LEFT / RIGHT / MID

- 替换单元格中的内容：REPLACE / SUBSTITUTE

- 查找文本在单元格中的位置：FIND / SEARCH

2.清除字符串空格

**TRIM**：清除字符串text左右的空格

```
=TRIM(text)
```

TRIM(去掉前后空格) 和 SUBSTITUDE(去空格,包括字符串之间的空格)

![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823111439428-1115289086.png)

3.合并单元格

**CONCATENATE**：将几个文本字符串合并为一个文本字符串。

```
=CONCATENATE(text1, text2, ...)
```

CONCATENATE 和 &

![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823111607436-704897198.png)


**4.截取字符串**

**MID:** 从text中，从stat_num开始，提取num_chars个字符串。
```
=MID(text, start_num, num_chars)
```
![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823111921014-90399712.png)

**LEFT:** 从text中，提取num_chars个字符（从左开始）。
```
=LEFT(text, num_cahrs)
```

**RIGHT:** 从text中，提取num_chars个字符（从右开始）
```
=RIGHT(text, num_chars)
```
![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823111749217-1277510012.png)

**5.替换单元格中内容**

**REPLACE：** 替换指定位置，从“原字符串”的“开始位置”开始，选择“字符个数”个，替换为“新字符串”。
```
=REPLACE(原字符串, 开始位置, 字符个数, 新字符串)
```
![REPLACE](/images/202009/10/REPLACE.jpg)

**SUBSTITUTE：** 替换指定文本，在text中用new_text替换old_text，instance_num指定要替换第几次出现的old_text，如果不指定则替换old_text。

```
=SUBSTITUTE(text, old_text, new_text, instance_num)
```
![SUBSTITUTE](/images/202009/10SUBSTITUTE.jpg)

**6.查找文本在单元格中的位置**

**FIND & SEARCH：** 从within_test中查找FIND_text，返回查找字符的起始位置编号。


FIND,SEARCH,MID综合使用
![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823111135291-515428132.png)

**LEN、LENB**

![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823112541458-879712903.png)



* 时间函数
![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823113345008-702634932.png)

* DAYS
![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823142820072-1528277778.png)


* IF
![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823143635935-1823218638.png)
对应函数```=IF(AND(B13=1,C13=1)=TRUE,"男神",IF(AND(B13=1,C13=0)=TRUE,"靠脸吃饭",IF(AND(B13=0,C13=1)=TRUE,"肌肉男","是个好人")))```


* COUNT(统计目标区域有多少个数值类型的单元格)
![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823145243344-1039504412.png)


* COUNTA(统计所有非空单元格个数) 和 COUNTBLANK(统计空白单元格个数) 
![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823145254795-959887578.png)


* COUNTIF(计算出现的个数)
![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823150024387-1238294660.png)


* SUMIF()
![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823150857968-1963019855.png)



**VLOOKUP函数**

跨表查询
![](https://img2020.cnblogs.com/blog/793818/202007/793818-20200707110915900-1533901181.png)



数字和文本格式互转
![](https://img2020.cnblogs.com/blog/793818/202007/793818-20200707093145321-497059157.png)

近似匹配
![](https://img2020.cnblogs.com/blog/793818/202007/793818-20200707095833760-1727342234.png)

**INDEX和MATCH嵌套使用**

vlookup有个缺点是无法从右向左查询，可以用index和match嵌套查询实现
![](https://img2020.cnblogs.com/blog/793818/202007/793818-20200707112303863-434782135.png)


**COUNTIF函数**

COUNTIF函数用来计算单元格区域内符合条件的单元格个数。

COUNTIF函数只有两个参数
COUNTIF(单元格区域,计算的条件)

例如：计算上海市的数量
![](https://images2018.cnblogs.com/blog/793818/201808/793818-20180802225338503-753884019.png)


**LEN、LENB**

![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823112541458-879712903.png)


**MID**

![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823111921014-90399712.png)


**LEFT,RIGHT**

![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823111749217-1277510012.png)


**CONCATENATE 和 &**

![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823111607436-704897198.png)




**FIND,SEARCH,MID**
![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823111135291-515428132.png)


**时间函数**
![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823113345008-702634932.png)

**DAYS**
![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823142820072-1528277778.png)


**IF**
![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823143635935-1823218638.png)
对应函数```=IF(AND(B13=1,C13=1)=TRUE,"男神",IF(AND(B13=1,C13=0)=TRUE,"靠脸吃饭",IF(AND(B13=0,C13=1)=TRUE,"肌肉男","是个好人")))```


**COUNT**
统计目标区域有多少个数值类型的单元格
![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823145243344-1039504412.png)


**COUNTA和COUNTBLANK**
COUNTA(统计所有非空单元格个数) 
COUNTBLANK(统计空白单元格个数) 
![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823145254795-959887578.png)


**COUNTIF**
计算出现的个数
![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823150024387-1238294660.png)


**SUMIF**
![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823150857968-1963019855.png)

## 数据透视表

数据透视表的简单应用

![](https://img2018.cnblogs.com/blog/793818/201908/793818-20190823112229024-1597094634.png)