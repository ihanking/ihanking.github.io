---
title: Python综合题
date: 2020-09-15
draft: false
tags: ["面试题"]
---

## 第一章 python基础

### 一、选择题

1.关于 Python 语言的注释，以下选项中描述错误的是(B)

A. Python 语言的单行注释以#开头

B. Python 语言的单行注释以单引号‘开头

C. Python 语言的多行注释以‘‘‘（三个单引号）开头和结尾

D. Python 语言有两种注释方式：单行注释和多行注释

2.关于 Python 程序格式框架的描述，以下选项中错误的是(D)

A.Python语言的缩进可以采用 Tab 键实现

B.Python单层缩进代码属于之前最邻近的一行非缩进代码，多层缩进代码根据缩进关系决定所属范围

C.判断、循环、函数等语法形式能够通过缩进包含一批 Python 代码，进而表达对应的语义

D.Python语言不采用严格的“缩进”来表明程序的格式框架

3.Python 文件的后缀名是(D)

A.pdf

B.do

C.pass

D.py

4.以下选项中，不是Python对文件的打开模式的是（C）

A: '+'

B: 'w'

C: 'c'

D: 'r'

5.下列快捷键中能够中断（Interrupt Execution）Python程序运行的是（B）

A. F6

B. Ctrl + C

C. Ctrl + F6

D. Ctrl + Q

6.在Python中，关于全局变量和局部变量，以下选项中描述不正确的是（B）

A.一个程序中的变量包含两类：全局变量和局部变量

B.全局变量不能和局部变量重名

C.全局变量一般没有缩进

D.全局变量在程序执行的全过程有效

7.以下选项中不符合 Python 语言变量命名规则的是(B)

A.I

B.3_1

C._AI

D.TempStr

8.python不支持的数据类型有（A）

A、char

B、int

C、float

D、list

9.关于字符串下列说法错误的是(B)

A.字符应该视为长度为1的字符串

B.字符串以\0标志字符串的结束 

C.既可以用单引号，也可以用双引号创建字符串 
 
D.在三引号字符串中可以包含换行回车等特殊字符

10.str=“Lingyishuju”,请问下列哪个选项可以截取出“Lingyi”（D）

A.str[1:6]

B.str[1:7]

C.str[0:5]

D.str[0:6]

11.若 a = 'abcd' ，若想将a变为 'abce'，则下列语句正确的是（D）

A. a[3] = 'e' 

B. a[4] = 'e'   

C. a.replace('e','d')  

D. a = a[:3] + 'e' 

12.下面哪一个函数可以实现删除列表的指定位置元素（B）

A、append      B、pop       C、del          D、remove

13.下列哪种不是Python元组的定义方式？（A）

A. (1)

B. (1, )

C. (1, 2)

D. (1, 2, (3, 4))

14.长度为100的Python列表、元组和字符串中最后一个元素的下标为（A）

A.-1           B.N             C.100         D.101   

15.以下不能创建一个字典的语句是（C） 

A、dict1 = {}  

B、dict2 = { 3 : 5 }    

C、dict3 = {[1,2,3]: “uestc”} 
  
D、dict4 = {(1,2,3): “uestc”}

16.以下选项中不能生成一个空字典的是（C）

A. {}

B. dict([])

C. {[]}

D. dict()

17.下面的语句哪个会无限循环下去(B)  

A.
```python
for a in range(10):
    time.sleep(10)  
```

B.
```python
while 1<10:
time.sleep(10)  
```

C.
```python
while True:
    break  
```

D.
```python
a = [3,-1,',']  
for i in a[:]:
   if not a:
       break
```

18.关于Python循环结构，以下选项中描述错误的是（A）

A. 每个continue语句只有能力跳出当前层次的循环

B. break用来跳出最内层for或者while循环，脱离该循环后程序从循环代码后继续执行

C. 遍历循环中的遍历结构可以是字符串、文件、组合数据类型和range()函数等

D. Python通过for、while等保留字提供遍历循环和无限循环结构

19.若`x = “foo”，y = 2，print(x + y)` 的结果为（E）

A.foo        

B.foofoo 

C.foo2   

D.2 

E.must be str, not int

20.下面的代码，哪些会输出1,2,3三个数字（B）

A.
```python
for i in range(3):
  print(i)
```

B.
```python
List = [0,1,2]
for i in List:
  print(i+1)
```

C.
```python
i = 1
while i < 3:
  print(i)
  i+=1
```
D.
```python
for i in range(4):
  print(i) 
```

21.Python如何定义一个函数(C)

A、`class<name>(<type> arg1,<type> arg2,…<type>argN) `

B、`function <name>(arg1,arg2,…argN)  `

C、`def <name>(arg1,arg2,…argN) ` 

D、`def <name>(<type> arg1,<type> arg2,…<type>argN)`

22.关于函数，以下选项中描述错误的是(C)

A.函数能完成特定的功能，对函数的使用不需要了解函数内部实现原理，只要了解函数的输入输出方式即可。

B.使用函数的主要目的是减低编程难度和代码重用

C.Python 使用 del 保留字定义一个函数

D.函数是一段具有特定功能的、可重用的语句组

23.下列哪种函式参数定义不合法?（C）  

A. `def myfunc(*args):`

B. `def myfunc(arg1=1):`

C. `def myfunc(*args, a=1):`

D. `def myfunc(a=1, **args):`

24.关于函数的可变参数，可变参数*args传入函数时存储的类型是（B）

A. dict

B. tuple

C. list

D. Set

25.下列代码执行结果是什么?（D）
```python
x = 1
def change(a):
    x += 1
    print（x）
change(x)
```
A. 1

B. 2

C. 3

D.报错

26.哪两种文件打开效果相同?(BD)

A.`open(filename,'r')`

B.`open(filename,"w+")`

C.`open(filename,"rb")`

D.`open(filename,"w")`

27.Python中函数是对象，描述正确的是?（ACD）
  
A.函数可以赋值给一个变量

B.函数不可以作为元素添加到集合对象中

C.函数可以作为参数值传递给其它函数

D.函数可以当做函数的返回值

28.Python中列表切片操作非常方便,若`l = range(100)`以下哪种形式是正确的?(ABCD)

A.l[-3]

B.l[-2:13]

C.l[::3]

D.l[2-3]

29.若`a = (1, 2, 3)`，下列哪些操作是合法的?（ABD）

A. a[1:-1]

B. a*3

C. a[2] = 4

D. list(a)

30.下列关于函数的表述正确的是（ABD）

A.任何传入参数和自变量必须放在圆括号中间。圆括号之间可以用于定义参数

B.函数的第一行语句可以选择性地使用文档字符串—用于存放函数说明

C.函数内容以逗号起始，并且缩进

D.可以用return结束函数，选择性地返回一个值给调用方

### 二、判断题

1.python是一种跨平台、开源、免费的高级动态编程语言。（√）

2.python 3.x完全兼容Python 2.x。（×）

3.python通常是一行写完一条语句，但是若语句很长，可以通过“\”来实现多行语句。（√）

4.如果要在单引号中引用单引号，需要使用反斜杠(\)转义。（√）

5.Python中自带的关键字可以用作变量名。（×）

6.python的变量无需提前声明（√）

7.在Python中可以使用if作为变量名。（×）

8.不同数据类型之间是不能进行运算的，但是不同数据类型可以相互转换。（√）

9.x = 9999**9999这样的语句在Python中无法运行，因为数字太大了超出了整型变量的表示范围。（×）

10.int()的作用是将括号中的数值或文本转化为字符串。（×）

11.加法运算符可以用来连接字符串并生成新字符串。(√)

12.3+4j 是合法Python数字类型。（√）

13.使用Python列表的方法insert()为列表插入元素时会改变列表中插入位置之后元素的索引。（√）

14.表达式 list('[1, 2, 3]') 的值是[1, 2, 3]。（×）

15.元组是不可变的，不支持列表对象的inset()、remove()等方法，也不支持del命令删除其中的元素，但可以使用del命令删除整个元组对象。(√)

16.Python集合中的元素可以是列表。（×）

17.列表和元组都可作为字典的“键”（×）

18.元组的访问速度比列表要快一些，如果定义了一系列常量值，并且主要用途仅仅是对其进行遍历而不需要进行任何修改，建议使用元组而不使用列表。(√)

19.创建一个空集合必须用set()而不是{ }，因为{ }是用来创建一个空字典。（√）

20.删除列表中重复元素最简单的方法是将其转换为集合后再重新转换为列表。（√）

21.集合（set）是一个无序的不重复元素序列。（√）

22.“==”的作用是赋值（×）

23.带有else子句的循环如果因为执行了break语句而退出的话，则会执行else子句中的代码。（×）

24.函数中必须包含return语句。（×）

25.如果仅仅是用于控制循环次数，那么使用for i in range(20)和for i in range(20, 40)的作用是等价的。（√）

26.int()函数是内建函数，内建函数可以直接调用。(√)

### 三、填空题

1.Python安装扩展库常用的工具是`pip`。

2.列表、元组、字符串是Python的有序(有序/无序)序列。

3.Python序列类型包括字符串、列表、元组三种。

4.查看变量类型的Python内置函数是`type()`。

5.已知`x = 3`，那么执行语句`x += 6` 之后，x的值为`9`。

6.已知`x=3`和`y=5`，执行语句`x, y=y`, x后x的值是`5`。

7.表达式`15//4`的值为`3`。

8.表达式`'ab' in 'acbed'`的值为False

9.设`s = "abcdefg"`，则`s[3]`值是`d`，`s[2:4]`值是`cd`，`s[:5]`值是`abcde`

10.Python语句`list(range(1,10,3))`执行结果为`[1, 4, 7]`。

11.字典对象的`keys()`方法返回字典的“键”列表。

12.任意长度的Python列表、元组和字符串中第一个元素的下标为`0`。

13.`del`命令既可以删除列表中的一个元素，也可以删除整个列表。

14.在Python中`None`表示空类型。

15.Python关键字elif表示`else`和`if`两个单词的缩写。

### 四、实操题

1.循环打印嵌套列表：

`movies=["the holy",1975,"terry jones",91,["graham",["michael","john","gilliam","idle","haha"]]]`

实现以下形式的输出：

答案:
```python
def print_list(object):
  for i in object:
    if isinstance(i, list):
      print_list(i)
    else:
      print(i)
      print_list(movies)
```

2.有如下值集合`[11,22,33,44,55,66,77,88,99,90]`，

将所有大于66的值保存至字典的第一个key中，

将小于66的值保存至第二个key的值中。

即：`{'k1':大于66的所有值,'k2':小于66的所有值}`

答案：
```python
l=[11,22,33,44,55,66,77,88,99,90]
l.sort()
z=l.index(66)
dic={"key2":l[0:z],"key1":l[z+1:]}
print(dic)
```

3.运用条件语句与for循环解决如下问题：

现有1、2、3、4个数字，能组成多少个互不相同且无重复数字的三位数？都是多少？

答案：
```python
a=0
for b in range(1,5):
  for c in range(1, 5):
    for d in range(1, 5):
      if b!=c and c!=d and d!=b:
        print(b, c, d)
        a = a + 1
        print('共有',a,'个互不相同且无重复数字的三位数')
```

4.编写一个`while`循环,提示用户输入其名字。

用户输入其名字后,在屏幕上打印一句问候语,并将一条访问记录添加到文件`guest_book.txt`中。

确保这个文件中的每条记录都独占一行。此外设置当输入q时停止本程序。

答案：
```python
filename = 'guest.txt'
guest_name = input("Please input your name: (input 'q' to quit)")
while guest_name!='q':
  with open(filename, 'a') as file_object:
    file_object.write(guest_name + '\n')
    guest_name = input("Please input your name: (input 'q' to quit)")
```

5.用函数实现如下要求：

（1）随机生成20个学生的成绩

（2）判断这20个学生成绩的等级（A:大于90小于等于100，B：大于80小于等于90，C：80及以下）

答案:
```python
import random

def get_level(score):
  if 90 < score <= 100:
    return 'A'
  elif 80 < score <= 90:
    return 'B'
  else:
    return 'C'

def main():
  for i in range(20):
    score = random.randint(1,100)
    print("成绩为%s,等级为%s" %(score,get_level(score)))

main()
```

## 第二章 写一个简单的爬虫

一、选择题

1.下列哪个快捷键可以打开网页源代码（D）

A.Shift+A

B.Shift+U

C.Ctrl+A

D.Ctrl+U

2.下列哪一个不是文件的编码格式（D）

A. UTF-8

B. ansi

C. gbk

D. str

3.下列哪种是Unicode编码的书写方式?（C）

A. a = ‘中文’

B. a = r‘中文’

C. a = u’中文’

D. a = b’中文’

4.下列关于Beautiful Soup表述有误的是（C）

A.Beautiful Soup支持Python标准库中的HTML解析器,不支持第三方解析器

B.Beautiful Soup可将复杂HTML文档转换成树形结构

C.Beautiful Soup唯一的搜索方法是find_all()

D.Beautiful Soup 3 当前已停止维护

5.Beautiful Soup自动将输入文档转换为以下哪种编码（A）

A.Unicode

B.utf-8

C.gbk

D.ASCII码

6.以下哪个选项不是get爬虫和post爬虫方式的区别（D）

A.get是从服务器上获取数据，post是向服务器传送数据

B.get安全性非常低，post安全性较高

C.get执行效率比post方法好

D.post传送的数据量小于get

7.下列关于requests爬虫说法有误的是（C）

A. 请求头是将自身伪装成浏览器的关键

B. 大型网站通常都会根据Referer参数判断请求的来源

C. 编码问题的存在会使爬虫程序报错

D. 请求携带的参数封装到一个字典中，当作参数传给post或get

8.爬虫流程包括以下哪些选项（ABCD）

A.发送请求

B.获取响应内容

C.解析内容

D.保存数据

9.关于网页结构的阐述，下列哪个选项是正确的（AB）

A. `<body>`表示用户可见内容

B. `<div>`表示框架

C. `<P>`表示列表

D. `<li>`表示段落

10.以下哪些是requests库获取网页的方法（BC）

A.requests.request()

B.requests.get() 

C.requests.post()

D.requests.delete()

11.下列哪个选项可以复制路径（ABC）

A. copy xpath

B. copy selector

C. copy outerHTML

D. copy element

### 二、判断题

1.网页一般由三部分组成，分别为HTML(超文本标记语言)、CSS（层叠样式表）和Jscript(活动脚本语言)。(√)

2.安装好python之后，已经安装requests模块。（×）

3.GET的请求获取数据的方式不同于POST,GET请求数据必须构建请求头（×）

4.Post方法需要权限验证和请求内容，服务器通过权限放行，该方法具有查询和修改数据的权限(√)

5.requests库返回的数据可以是JSON格式的数据(√)

6.Requests 是用Python语言编写，基于 urllib，采用 Apache2 Licensed 开源协议的 HTTP 库(√)

7.爬虫程序尽可能模拟浏览器发送请求就一定能爬取到数据(√)

8.导入Beautiful Soup时要先安装bs4（√）

9.Lxml解析器将文档转换成树形结构(√)

10.正则表达式\d可以用来匹配数字（√）

11.正则表达式由一些普通字符和一些元字符组成（√）

12.在python中\n表示换行符（√）

13.如果在单引号之前或字符串结尾需要出现一个反斜线，需要用两个反斜线表示。(√）

14.通过useragent可以识别出是浏览器访问还是代码访问网页（√）

15.当遇到反爬虫时，构建请求头的伪装效果优于构建IP池（×）

### 三、应用题

1、用post方法对360问答网页标题进行爬取，爬取内容如下图所示。


## 第三章 用API爬取天气预报数据

### 一、选择题

1.如果想获取MongoDB"col"集合中 "likes" 大于100，小于 200 的数据，可以使用以下哪个命令（A）

A.`db.col.find({likes : {$lt :200, $gt : 100}})`

B.`db.col.find({likes : {$gte :200, $gt : 100}})`

C.`db.col.find({likes : {$gt :200, $lte : 100}})`

D.`db.col.find({likes : {$gte :200, $lte : 100}})`

2.以下那个选项对MongoDB的修改器功能描述错误（BC）

A.`$set`用于指定一个键并更新键值，若键不存在则创建一个键

B.`$inc`用于删除键

C.`$unset`可以对文档某个值为数字型的键进行增减操作

D.`$push`向某个数组类型添加一个数组元素，不过滤重复数据

3.MongoDB的查询代码哪些选项是错误的（CD）

A.find_one()

B.find()

C.find_many()

D.find_more()

### 二、判断题

1.MongoDB是一个基于分布式文件存储的数据库，由python语言编写（×）

## 第四章 大型爬虫案例：爬取某电商网站的商品数据

### 一、判断题

1.python中的pool是用于多进程爬虫的库，可以自定义多进程的数量。(√)

2.爬虫容错处理`（try..except..else）`如果try部分没有异常，那么将运行except，而跳过else（×）

3.异常处理结构也不是万能的，处理异常的代码也有引发异常的可能。（√）

4程序异常发生经过妥善处理可以继续执行（√）

5.异常语句可以与 else 和 finally 保留字配合使用（√）

6.编程语言中的异常和错误是完全相同的概念（×）

7.python 通过 try、except 等保留字提供异常处理功能（√）

### 二、应用题

结合多进程爬虫和容错处理相关知识，爬取易趣网网页的产品标题、产品价格、产品销量及类目名称信息，爬取内容如下图所示：

## 第五章 Scrapy爬虫

### 一、选择题

1.Scrapy启动后，首先会访问网站的什么文件（B）

A.spider.txt

B.Robots.txt

C.Law.txt

D.Scrapy.txt

2.下列关于scrapy爬虫的表述有误的是（D）

A. Scrapy可用XPath表达式分析页面结构

B. Scrapy可以用于数据挖掘、监测和自动化测试

C. Scrapy源码中默认callback函数的函数名就是parse

D. Scrapy 使用了 Twisted同步网络库来处理网络通讯

3.以下那些组件包含在scrapy框架中（ABCD）

A.	request

B. 下载器

C. 解析器

D. Twisted

4.以下哪些是scrapy爬虫必要步骤（ABCD）

A.创建scrapy爬虫项目

B、定义item容器

C、定义setting文件

D、编写爬虫逻辑

### 二、判断题

1.Scrapy是功能十分强大的库，未封装故而爬虫灵活性高（×）

2.scrapy是一套用Python编写的异步爬虫框架，基于Twisted实现(√)

3.Scrapy编写爬虫逻辑时需自主定义函数，用于解析服务器返回的内容（√）

### 三、应用题

用scrapy框架爬取唯品会产品图片，并将爬取下来的图片存于指定文件夹。


## 第六章 selemium爬虫

### 一、选择题

1.下面关于selenium爬虫哪个代码描述是错误的（D）

A.driver.get()用于打开URL指定的网页

B.find_element_by_*的方法来匹配要查找的元素

C.send_keys方法可以用来模拟键盘操作

D.用close（）方法并关闭多个页面并退出浏览器

2.以下那个选项属于selenium爬虫索引定位（B）

A.`WebElement xpath = driver.findElement(By.xpath("//input"))`

B.`WebElementxpath=river.findElement(By.xpath("//input[3]"))`

C.`WebElementxpath=driver.findElement(By.xpath(""//*[@id='su' and @type='submit']""))`

D.`WebElement xpath=driver.findElement(By.xpath("//div[@
class='qrcode-text']/p/b[text()='百度']"))`

3.以下关于selemium爬虫的说法正确的有（ABD）

A.Selenium是一个用于Web应用程序测试的工具

B.浏览器能打开的页面,使用selenium就一定能获取到

C.相较于其他爬虫方式selenium 获取内容的效率最高

D.Selenium支持主流的IE 、Chrome、Firefox、Opera、Safari、phantomjs等浏览器

### 二、判断题

1.Requests爬虫比Selenium爬虫更像真正用户在操作（×）

2.Selenium爬虫适用于单击下一页url保持不变的情况（√）

3.Selenium Web驱动程序需要服务器安装，测试脚本不能直接与浏览器交互（×）

4.Selenium是开源软件，必须依靠社区论坛来解决技术问题（√）

5.Selenium爬虫浏览器的大小是不可调的（×）

6.cookie中保存中我们常见的登录信息，有时候爬取网站需要携带cookie信息访问（√）

### 三、应用题

1.用selemium爬取拉勾网前5页职位信息，要求：

（1）采用人机交互（input）输入所需爬取的职位

（2）爬取内容：职位具体名称、薪酬范围与公司名称


## 第七章 数据库连接和查询

### 一、选择题

1.PyMySQL中host（str）代表（A）

A.服务器地址     B.服务器端口号   C.用户名     D.数据库名称

2.PyMySQL中cursor对象支持方法有误的是（C）

A.execute()执行数据库命令

B.fetchone():获取下一行数据，第一次为首行

C.fetchall():获取前5行数据源

D.fetchmany():获取指定行数据

3.SQLAlchemy语法错误的是（D）

A.`session.add()`:向数据库表添加记录

B.`session.query()`:从数据库表中查找记录

C.`session.query(Person).filter().all()`:从数据库表中查询指定数据

D.`session.commit()`:更新数据

4.下列关于SQLAlchemy的表述错误的是（B）

A.SQLAlchemy功能是简化sql语言操作数据库的繁琐过程

B.SqlAlchemy可直接操作数据库

C.SQLAlchemy可对数据库进行增删改查操作

D.创建数据库引擎可带上charset=utf8参数，防止中文乱码

5.下列关于pymysql的描述有误的是（CD）

A.pymsql 是 Python 中操作 MySQL 的原生模块，其使用方法和 MySQL 的SQL语句几乎相同

B.pymsql创建链接后，都由游标来进行与数据库的操作

C.游标位置是不可控的

D.从pymsql获取的数据类型默认是字典

### 二、判断题

1.PyMySQL支持数据的增加、删除、查询而不支持修改。（×）

2.PyMySQL 是在 Python3.x 版本中用于连接 MySQL 服务器的一个库，Python2中则使用mysqldb。（√）

3.SQLAlchemy是python的一款开源软件，提供了SQL工具包及对象关系映射(ORM)工具。（√）

4.SQLAlchemy中，session用于创建程序与数据库之间的会话。所有对象的载入和保存都需要通过session对象。（√）

## 第八章 Numpy

### 一、选择题

1.下述哪个代码只能查询数组元素的类型（A）

A.dtype

B.type

C.class

D.kind

2.`ARR=np.array([8,9,2,6]),ARR[-1]=9.9999`,请问以下那个选项为数组ARR的输出结果（A）

A.[8 9 2 9]

B.[8 9 2 9.9999]

C.[8,9,2,9]

D.[8,9,2,9.9999]

3.np.arange(12).reshape(2,6)的输出结果为(A)

A.[[ 0  1  2  3  4  5]
 	[ 6  7  8  9 10 11]]

B.[[ 0  2  4  6  8  10]
 	[ 1  3  5  7  9  11]]

C.[[ 1  2  3  4  5  6]
 	[ 7  8  9  10 11 12]]
     
D.[[ 1  3  5  7  9  11]
 	[ 2  4  6  8  10 12]]

4.np.arange(12).reshape(2,2,3)的输出结果为（A）

A.[[[ 0  1  2]  

B.[[ 0  1  2]   

C.[[[ 0  2  4]   

D.[[ 0  2  4]
   [ 3  4  5]]	    [ 3  4  5]]      [1  3  5]]      [ 1  3  5]]
  [[ 6  7  8]    [[ 6  7  8]      [[ 6  8  10]    [[ 6  8  10]
   [ 9 10 11]]]   [ 9 10 11]]      [ 7 9 11]]]      [ 7 9 11]]

5.以下哪个选项可以生成2行3列的标准差为3，均值为5的正态分布数组（D）

A.np.array(3,5,(2,3))  

B.np.array(5,3,(2,3)) 

C.np.random.normal(3,5,(2,3))

D.np.random.normal(5,3,(2,3))

6.`arr=array（[[0,1,2,3,4,5]`,以下哪个代码对数组arr的切片
([6,7,8,9,10,11]]）
值中不包含数字“8”（A）

A.arr[:,2]

B.arr[:,3]

C.arr[1][2:3]

D.arr[1,2:3]    

### 二、判断题

1.列表与数组的首要区别：数组是同类的（√）

2.数组中的S属性能使数组转置（×）

3.现有ARR数组中的数据类型为整数类型，如果存储一个浮点数类型，系统会自动将其转化为整数类型而不报错。（√）

### 三、实操题

1.创建一个10*10的数组，并且边框是1，里面是0，如下图所示：

答案:
```python
import numpy as np
Z = np.ones((10,10))
Z[1:-1,1:-1] = 0
print(Z)
```

## 第九章 pandas数据清洗

### 一、选择题

1.下列关于pandas的表述有误的是（D）

A.Pandas是Python的一个数据分析包，该工具为解决数据分析任务而创建。

B.Pandas纳入大量库和标准数据模型，提供高效的操作数据集所需的工具

C.Pandas提供大量能使我们快速便捷地处理数据的函数和方法

D.Pandas是字典形式，基于字典创建

2.以下那个选项可以实现DataFrame中2,3两行的选取（A）
A. df[2:4]

B. df[2,4]

C. df[[2:4]]

D. df[[2,4]]

3.如何在DataFrame中进行块选取的操作（C）

A. df.ix[[0:3],[’商品’，’价格’]]

B. df.ix [[0,3][’商品’，’价格’]]

C. df.ix [0:3,[’商品’，’价格’]]

D. df.ix [0:3,’商品’:’价格’]

4.下面那个函数可以使DataFrame的列旋转为行（A）

A. stack

B. unstack

C. turn

D. unturn

5.以下哪个函数可以查看DataFrame是否有缺失值（D）

A. fillna

B. bfill

C. isnan

D. isnull

6.若需要用后一个数据代替NaN,下列哪个函数可以实现（B）

A. fillna

B. bfill

C. isnan

D. Isnull

7.duplicated返回一个什么类型的Series，用以判断某行是否为重复行（B）

A.逻辑型

B.bool型

C.二值型

D.字符型

8.time库的time.time()函数的作用是 （ D ）

A.返回系统当前时间戳对应的易读字符串表示

B.返回系统当前时间戳对应的struct_time对象

C.返回系统当前时间戳对应的本地时间的struct_time对象，本地之间经过时区转换

D.返回系统当前的时间戳

9.time库的time.mktime(t)函数的作用是 （ B ）

A.将当前程序挂起secs秒，挂起即暂停执行

B.将struct_time对象变量t转换为时间戳

C.返回一个代表时间的精确浮点数，两次或多次调用，其差值用来计时

D.根据format格式定义，解析字符串t，返回struct_time类型时间变量

10.使用head查看数据，若不设数值，默认多少行（B）

A.4              B.5             C.6              D.7

11.以下选项中不是 Python 数据分析的第三方库的是(D)

A. numpy

B. scipy

C. pandas

D. requests 

12.pandas中describe函数可以查看的统计信息包括(ABCD)

A.频数最高者

B.非空值数

C.平均值

D.方差

13.下列正则表达式功能表述正确的有（ABD）

A.“*”匹配前面的子表达式零次或多次

B.“+”匹配前面的子表达式一次或多次

C.“？”匹配前面的子表达式多次

D.“{n}”中n是个非负整数

14.在python中调用正则表达式需要调用以下哪个库（B）

A.xlrd

B.re

C.Snownlp

D.Os

### 二、判断题

1.DataFrame是一个类似表格的数据结构，索引包括列索引和行索引，包含有一组有序的列，每列可以是不同的值类型（数值、字符串、布尔值等）。（√）

2.DataFrame连接时传入left_index=True或right_index=True，可以将索引作为连接键用（√）

3.向CSV写入数据时，参数index=True可以使文件的第一列保存为索引值（√）

4.df.describe()用于查看描述性统计信息（√）

5.df.groupby的size方法可以返回一个含有各分组大小的Series（√）

6.axis=0代表方向为列（×）

7.数据中存在NaN时，不可以用其他数值代替缺失值（×）

8.发现异常值和极端值的方法是对数据进行描述性统计，而使用describe函数则可以生成描述性统计的结果（√）

9.pandas提供了一个灵活高效的groupby功能，它使你能以一种自然的方式对数据集进行切片、切块、摘要等操作（√）

10.pandas.merge根据一个或多个键将多个DataFrane连接起来，类似数据库连接。（√）

11.pandas.concat可以将重复数据编制在一起，用以填充另一个对象的缺失（×）

12.merge方法默认outer连接，通过how可以指定连接方法（×）

13.drop_duplicates方法用于返回一个移除了重复行的DataFrame（√）

14.时间戳是指格林威治时间1970年01月01日00时00分00秒起至现在的总秒数（√）

15.代码time.mktime(time.localtime())可以将系统时间转化为时间戳（√）

### 三、应用题

1.用pandas对安斯库姆的四重奏数据集进行如下操作：

（1）计算x和y的均值和方差；计算x和y之间的相关系数；计算线性回归:y =β0 +β1x +ϵ(提示:使用statsmodels看看statsmodels笔记本)

（2）使用Seaborn（FacetGrid与plt.scatter相结合）可视化所有四个数据集。


## 第十一章 数据可视化

### 一、选择题

1.Matplotlib设置好图表元素后，以下哪个代码可以使图表自动调整格式（D）

A. fig.fit()

B. fig.tight()

C. fig.fit_layout()

D. fig.tight_layout()

2.下列关于Matplotlib表述有误的是（D）

A.可以通过plt.figure()一次绘制多个图形

B.可以通过subplot在同一个窗口显示多个图形

C.scatter函数功能是绘制散点图

D.plt.axis('equal')设置了坐标轴大小自动调整

3.pyecharts中哪个参数可以指定标签形状（A）

A. mark_point_symbol

B. mark_point_textcolor

C. mark_line

D. mark_point_symbolsize

4.请问下列哪个代码可以绘制水球图（C）

A. Funnel

B. Gauge

C. Liquid

D. Sankey

5.pyecharts中的词云字体大小可以通过下列哪个选项控制（C）

A. wordsize

B.	word_size

C. word_size_range

D. wordsize_range

6.下列关于matplotlib的表述中正确的有（BCD）

A.matplotlib只能创建二维图表

B.set_xlabel 与 set_ylabel 可以设置坐标轴的x轴与y轴的标签

C.可以使用 savefig 保存图表

D.Matplotlib 可以生成多种格式的高质量图像，包括PNG，JPG，EPS，SVG，PGF 和 PDF


7.下列关于pyecharts的表述中正确的有（ABCD）

A.pyecharts 将不自带地图 js 文件,想使用地图的开发者必须自己手动安装地图插件

B.legend：图例组件

C.axis3D：3D 笛卡尔坐标系 X，Y，Z 轴配置项，适用于 3D 图形

D.lineStyle：带线图形的线的风格选项

### 二、判断题

1.Matplotlib集成了ggplot的画图风格（√）

2.Matplotlib中kind=‘barh’表示绘制条形图（√）

3.title_pos在pyecharts中表示标题的位置（√）

4.pyecharts中柱形图如果想实现堆叠的效果，只需在add（）函数里添加is_stack=True（√）

5.Overlap（）可以用于在pyecharts将两个图形进行组合（√）

6.pyecharts 支持 Ptyhon3.5+而不支持Python2.7+（×）

7.render（）函数在pyecharts中可以用于将图表生成jpg文件（×）

8.pyecharts中render（）函数默认将文件生成在根目录下（√）

9.pyecharts绘制柱形图与条形图代码的区别是柱形图比条形图多了
is_convert=True（×）

### 三、实操题

1.结合Matplotlib与numpy绘制函数f(x)=

答案:
```python
import numpy as npimport matplotlib.pyplot as plt
x = np.linspace(0, 2, 50)
y = (np.sin(x - 2) ** 2) * (np.exp(-1 * (x ** 2)))
plt.plot(x, y, label="(sin(x-2))^2*e^(-x^2)")
plt.xlabel("x label")
plt.ylabel("y label")
plt.title("(sin(x-2))^2*e^(-x^2)")
plt.legend()
plt.show()
```

### 四、应用题

1.某公司的年2018年营收目标为2.5亿，现有2018年第一季度的营运数据，请用pyecharts将营运数据实现可视化。

