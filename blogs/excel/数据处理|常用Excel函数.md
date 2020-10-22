---
title: 数据处理|常用Excel函数
date: 2020-09-09
draft: false
tags: ["excel"]
categories: ["数据分析系列"]
---

## 前言

作为数据工作者，离不开excel表数据的操作，此文主要来讲下工作通常会用到函数或操作

**常见函数分类**

- 文本清洗函数

- 关联匹配函数

- 逻辑运算函数

- 计算统计函数

- 时间序列函数

## 文本清洗函数

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

![TRIM](/images/202009/10/TRIM.jpg)

3.合并单元格

**CONCATENATE**：将几个文本字符串合并为一个文本字符串。

```
=CONCATENATE(text1, text2, ...)
```

CONCATENATE 和 &

![CONCATENATE](/images/202009/10/CONCATENATE.jpg)


**4.截取字符串**

**MID:** 从text中，从stat_num开始，提取num_chars个字符串。
```
=MID(text, start_num, num_chars)
```
![mid](/images/202009/10/mid.jpg)

**LEFT:** 从text中，提取num_chars个字符（从左开始）。
```
=LEFT(text, num_cahrs)
```

**RIGHT:** 从text中，提取num_chars个字符（从右开始）
```
=RIGHT(text, num_chars)
```
![left&right](/images/202009/10/left&right.jpg)

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
![SUBSTITUTE](/images/202009/10/SUBSTITUTE.jpg)

**6.查找文本在单元格中的位置**

**FIND & SEARCH：** 从within_test中查找FIND_text，返回查找字符的起始位置编号。

```
=FIND(FIND_text, within_text, start_num)

=SEARCH(要查找字符, 字符所在的文本, 从第几个字符开始查找)
```

FIND 和 SEARCH 两个函数几乎相同，区别在于FIND 精确查找，区分大小写；SEARCH 模糊查找，不区分大小写。

FIND,SEARCH,MID综合使用
![find&search&mid](/images/202009/10/find&search&mid.jpg)


## 关联匹配函数

### VLOOKUP

函数总共有4个参数，分别是：**用谁去找**、**匹配对象范围**、**返回第几列**、**匹配方式**（0/FALSE表示精确匹配，1/TRUE表示模糊匹配）。

![vlookup1](/images/202009/10/vlookup1.jpg)

四种查询方式

**单条件查找**

根据工号，将左边检索区域的“电脑销售额”匹配到右边对应位置，只需要使用VLOOKUP函数，结果存在则显示对应的“电脑销售额”；结果不存在则显示#N/A。

```
=VLOOKUP(F2,$A$2:$D$55,4,0)
```

![vlookup2](/images/202009/10/vlookup2.jpg)

**反向查找**

当检索关键字不在检索区域的第1列，可以使用虚拟数组公式IF来做一个调换。

```
=VLOOKUP(检索关键字，IF({1,0},检索关键字所在列，查找值所在列)，2，0)
```
![vlookup3](/images/202009/10/vlookup3.jpg)

**多条件查询**

在匹配数据时，往往条件不是单一的，那么就可以利用&将字段拼接起来，并且利用IF数组公式构建出一个虚拟的区域。

```
=VLOOKUP(F2&G2,IF({1,0},A2:A53&B2:B53,D2:D53),2,0)
```

![vlookup4](/images/202009/10/vlookup4.jpg)

>注意：所有使用了数组的公式，不能直接回车，需要使用Ctrl+Shift+Enter，否则会出错。

**查询返回多列**

COLUMN

查找返回多列需要用到另外一个辅助函数——COLUMN函数。

返回结果为单元格引用的列数。例如：column(B1)返回值为2，因为B1为第2列。

```
=COLUMN(待查询单元格/区域)
```

需要注意的是第三个参数“返回第几列”的写法。

```
=VLOOKUP($G2,$A$2:$E$55,COLUMN(D1),0)
```

### HLOOKUP

```
=HLOOKUP(用谁去找, 匹配对象范围, 返回第几行, 匹配方式)
```

和VLOOKUP的区别：HLOOKUP返回的值与查找的值在同一列上，而VLOOKUP返回的值与查找的值在同一行上。


### INDEX

返回数组array中指定索引的单元格的值。

```
=INDEX(array, Row_num, Column_num)
```

![index](/images/202009/11/index.jpg)


### MATCH

* 功能：在区域内查找指定的值，返回第一个查找值的位置。
* lookup_value：需要查找的值。
* lookup_array：查找的区域。
* match_type：-1、0或1，0表示查找等于lookup_value的值。

```
=MATCH(lookup_value, lookup_array, [match_type])
```

![match](/images/202009/11/match.jpg)

**Index & Match联合使用 = VLookup**

![index&match](/images/202009/11/index&match.jpg)

### ROW & COLUMN

* ROW：返回指定引用的行号。
* COLUMN：返回指定引用的列号。

```
=ROW(reference)
=COLUMN(reference)
```

### OFFSET

* OFFSET：以指定的引用reference为起点，按照偏移量偏移之后，返回值。
* rows：向下偏移多少行。
* columns：向右偏移多少列。
* height：返回多少行。
* width：返回多少列。

```
=OFFSET(reference,rows,columns,height,width)
```

![offset1](/images/202009/11/offset1.jpg)

计算返回的两行两列的和

![offset2](/images/202009/11/offset2.jpg)

### HYPERLINK

创建一个超链接指向link_location，以friendly_name的字符串进行显示，link_location可以是URL链接或文件路径。

```
=HYPERLINK(link_location, friendly_name)
```

![hyperlink](/images/202009/11/hyperlink.jpg)


## 逻辑运算函数

### IF

![if](/images/202009/11/if.jpg)

对应函数
```
=IF(AND(B13=1,C13=1)=TRUE,"男神",IF(AND(B13=1,C13=0)=TRUE,"靠脸吃饭",IF(AND(B13=0,C13=1)=TRUE,"肌肉男","是个好人")))
```

### AVERAGEIF

`=AVERAGEIF($D$4:$D$1046,H5,$F$4:$F$1046)`

![averageif](/images/202009/24/averageif.png)


## 计算统计函数

### 求最值

MAX MIN

* MAX：求某区域中的最大值。
* MIN：求某区域中的最小值。

### 求数目

COUNT COUNTIF COUNTIFS

* COUNT：计数
* COUNTIF：单条件计数
* COUNTIFS：多条件计数

```
=COUNTIF(区域, 条件)
=COUNTIFS(区域1, 条件1, [区域2, 条件2], ...)
```

单条件计数

例1

![countif](/images/202009/11/countif.jpg)

例2

![countif2](/images/202009/24/countif.png)

多条件计数

![countifs](/images/202009/11/countifs.jpg)


COUNT(统计目标区域有多少个数值类型的单元格)

![count](/images/202009/11/count.jpg)


COUNTA(统计所有非空单元格个数) 和 COUNTBLANK(统计空白单元格个数) 

![COUNTA](/images/202009/14/COUNTA.png)


### 求和

SUM

功能：计算单元格区域中所有数值的和。

SUMIF

功能：求满足条件的单元格的和。

![sumif](/images/202009/11/sumif.jpg)

![sumif2](/images/202009/11/sumif2.jpg)

统计函数（COUNT、COUNTA、COUNTBLANK、COUNTIFS、SUM、SUMIFS、AVERAGE、AVERAGEIFS、MAX、DMAX、MIN、DMIN、MEDIAN、SUMPRODUCT、VAR.S、SKEW、NORM.DIST等）

字符串函数（LEN、LENB、LEFT、RIGHT、MID、UPPER、LOWER、FIND、SEARCH、SUBSTITUTE、REPLACE、CONCATENATE、EXACT、TRIM等）

数值函数（RAND、RANDBETWEEN、ABS、MOD、POWER、PRODUCT、CEILING、FLOOR、ROUND、ROUNDUP、ROUNDDOWN等）

逻辑函数（AND、OR、NOT、IF、IFERROR、ISTEXT、ISNUMBER等）

日期和时间函数（TODAY、NOW、YEAR、MONTH、DAY、HOUR、MINUTE、SECOND、DATE、TIME、DATEDIF等）

匹配查找函数（CHOOSE、VLOOKUP、HLOOKUP、LOOKUP、MATCH、INDEX、OFFSET、INDIRECT等）

