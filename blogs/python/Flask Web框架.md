---
title: Flask Web框架
date: 2020-09-28
draft: false
tags: ["flask"]
categories: ["Python学习"]
---

>因为在学Pyecharts涉及到Flask框架，今天就其进行简单了解和学习

## 介绍

### 简介

Flask 是一个用 Python 语言开发的、轻量级的、可扩展的 Web 应用程序框架，它基于 Werkzeug WSGI 工具包和 Jinja2 模板引擎进行封装和拓展。Werkzeug WSGI 提供了路由处理、请求和响应封装，Jinja2 则提供模板文件处理。

Flask 是 Python 语言三大主流开发框架之一，另外两个分别为 Django 和 Pyramid。

### 特性

Flask 具有轻量级和模块化设计的特点，因此只需要几个扩展，就可以轻松地将其转换为需要的 Web 框架。Flask 的设计使用简单且易于拓展，其初衷就是为各种复杂的 Web 应用程序构建坚实的基础，让开发者可以自由地插入任何扩展，也可以自由地构建自己的模块。其主要特性包括 4 个方面：

- 轻量级的体系结构：核心功能框架提供路由请求处理、请求和响应封装和模板引擎。

- 基于插件的拓展体系：核心功能之外，一切皆插件。Flask 还具有丰富的插件资源，如 ORM、表单、权限等。

- 完善的用户文档体系：从安装部署、项目创建、路由设置到视图设计，Flask 提供了完善的用户文档教程，使用者可以非常轻松地获取相关的资料，并且实现快速入门。

- 技术社区活跃：作为一个开源项目，其技术社区的活跃程度，一方面代表该项目的受欢迎程度，另一方面则代表该项目的生存状态。Flask 的技术社区具有非常高的社区活跃度，表明了该项目欣欣向荣。

[Flask官方网站](https://dormousehole.readthedocs.io/en/latest/)提供了丰富的学习资源，包括：文档、教程和案例

### 源码资源

Flask 是一个开源项目，其源码资源托管在 GitHub，源码地址：https://github.com/pallets/flask/

![flask](/images/202009/28/flask.jpg)

上图中，src/flask 目录是 Flask 框架源码程序，examples 目录是示例程序，docs 目录是文档文件，test 目录是测试用例。

## 安装

通常它支持两种安装方式：pip 资源库安装和源码安装。

pip 资源库的安装方式，可以直接通过指令 `pip install –U flask` 安装

安装完成后，可通过 `pip show flask` 查看安装结果
```
Name: Flask
Version: 1.1.2
Summary: A simple framework for building complex web applications.
Home-page: https://palletsprojects.com/p/flask/
Author: Armin Ronacher
Author-email: armin.ronacher@active-4.com
License: BSD-3-Clause
Location: /anaconda3/lib/python3.7/site-packages
Requires: click, Werkzeug, Jinja2, itsdangerous
Required-by
```

## 入门示例

Flask 应用程序的开发，通常包括 6 个步骤：导入模块、声明对象、路由设置、业务逻辑处理、数据逻辑处理和服务启动。具体的流程如下图所示：

![程序设计流程](/images/202009/28/程序设计流程.jpg)

如上图所示：

- 导入模块环节负责导入 Flask 应用程序需要类和函数；

- 对象声明环节声明一个 Flask Application 应用对象；

- 路由设置环节定义一个服务接口，接受来自客户端的数据请求；

- 业务响应环节定义服务于客户端请求的业务逻辑处理，包括数据访问、加工处理和图表页面渲染等；

- 数据处理环节定义数据库访问操作；

- 服务启动环节启动定义好的 Flask Application 应用程序。

了解设计流程后，通过典例学习其基本结构：

```python
#导入文件
from flask import Flask
#创建对象
app=Flask(__name__)

#路由设置
@app.route('/')

#业务逻辑
def hello():
    return '欢迎来到：Python Flask Web框架'

#服务启动
if __name__ == "__main__":
    app.run()
```

上述示例程序导入了 Flask 模块，声明了一个 Flask 应用程序对象，通过调用 Flask 构造函数进行初始化，使用当前模块（__name __）的名称作为参数。

通过调用 route()函数设置路由。

Flask 类的 route()函数是一个装饰器，它告诉应用程序哪个 URL 应该调用那个相关的函数。本例中实现的是路由“/”和函数 hello()的绑定。

通过调用 Flask 的 run()方法，在本地服务器启动一个 Flask 应用程序。

Flask 应用服务器启动以后，我们在浏览器中输入地址： http://127.0.0.1:5000/ 后，返回一个字符串：“欢迎来到：Python Flask Web 框架”。程序运行后的截图如下所示：

![flask典例](/images/202009/28/flask典例.jpg)

## 模板

在前面的示例程序中，客户端请求业务响应函数，其主要作用是生成客户端请求的响应，返回一个字符串，这是最简单使用场景。

实际上，业务响应函数有两个作用：业务逻辑处理和响应内容生成。工程实践时，在大型 Web 应用中，把业务逻辑、表现内容放在一起，会增加代码的复杂度和维护成本，因此通常采用 MVC 的架构模式，其中 M 代表模型，负责数据逻辑处理；V 代表视图，负责表现内容的处理；C 代表控制，负责业务逻辑的处理。

模板是用来衔接视图表现和控制逻辑的一种实现方式。它是一个包含响应文本的文件，包括静态内容和动态内容两部分，动态内容以变量的方式存在，它负责告诉模板引擎其具体的值，这个值需要从数据中动态地获取。

模板实现了静态内容和动态内容的结合。设计完模板以后，使用真实值替换变量，再返回最终得到的字符串内容的过程，就是页面渲染的过程。

我们可以通过使用模板，实现了展示逻辑和控制逻辑的解耦。

Flask 模板的使用包括 3 个步骤：**模板设计**、**业务逻辑设计**和**模板渲染**。一个典型的模板设计案例如下所示：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Flask 模板演示示例</title>
</head>
<body>
  Flask 模板 HTML 内容：
  <br />{{ my_str }}
  <br />{{ my_int }}
</body>
</html>
```

上述模板就是一个普通 HTML 文件，通过{{}}嵌入变量内容，渲染时变量内容会被替换成实际值。与之对应，我们需要一个业务逻辑程序，其代码如下所示：

```python
from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def index():
    # 变量
    my_str = '我是字符串变量'
    my_int = 8888
    return render_template('hello.html',
                           my_str=my_str,
                           my_int=my_int
                           )
if __name__ == '__main__':
    app.run(debug=True)
```

上述程序为 `index()` 函数，即业务逻辑处理函数。该函数中声明了一个字符串变量和一个整数变量，并通过函数 `render_template()` 进行了模板渲染。

以上程序执行以后的输出结果如下所示：

![渲染](/images/202009/28/渲染.jpg)

## 总结

本文介绍了 Flask Web 框架的主要特性、官方网站、源码资源、体系结构、安装部署，并通过一个示例程序给演示了 Flask 的基本应用。


