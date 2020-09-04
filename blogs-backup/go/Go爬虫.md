---
title: "Go爬虫"
date: 2020-08-28
draft: false
categories: ["Go学习"]
---


### 前言

Go是Google开发的一种静态强类型、编译型、并发型并具有垃圾回收功能的编程语言。为了方便搜索和识别，有时会将其称为Golang。

### 特点

1. Go是一种新的语言，是一种支持并发、带垃圾回收、可快速编译的静态语言。
2. Go为并发执行与通信提供了基本的支持，是天生的高性能服务开发语言。
3. Go结合了解释性语言的游刃有余，动态类型语言的开发效率，以及静态类型的安全性。
4. Go只需要用几秒的时间就可以编译一个大型的Go程序，部署也非常容易。
5. Go具有Python/Ruby的开发效率，同时又是C语言的运行性能（还是有一定差距的）。
6. Go简单易上手（只有25个关键保留字）
7. Go有自己的开发规范，还提供工具支持。

#### 优势

- 语法简单，易上手（仅有25个关键保留字）

- 性能高、编译快，开发效率不比Python和Ruby低
- 部署方便，编译包小，几乎无依赖（二进制文件包可直接运行）这一点和Deno很像
- 原生支持并发（goroutine）
- 官方统一规范（gofmt、golint）又看到了Deno的影子
- 丰富的标准库，再次看到了Deno的影子

### 安装

有几种方式安装

1. 到官网下载安装 https://golang.google.cn/dl/
2. 通过brew安装`brew install go`

安装成功后，查看go版本

```shell
macdeMacBook-Air-2% go version
go version go1.15 darwin/amd64
```

### 设置七牛云镜像代理

打开终端并执行

```go
$ go env -w GO111MODULE=on
$ go env -w GOPROXY=https://goproxy.cn,direct
```

### Go 常用命令

1、`go build`：用于编译我们指定的源码文件或代码包以及它们的依赖包

2、`go clean`：用来移除当前源码包里面编译生成的文件

3、`go doc`：打印附于Go语言程序实体上的文档。我们可以通过把程序实体的标识符作为该命令的参数来达到查看其文档的目的。

4、`go fmt`：帮助格式化你的代码文件，你只需要执行 go fmt xxx.go 你的代码将会被修改为标准格式

5、`go get`：根据要求和实际情况从互联网上下载或更新指定的代码败一级依赖包，并对他们进行编译和安装

6、`go install`：用于编译并安装指定的代码包及它们的依赖包

7、`go run`：可以遍历源码并运行命令源码文件

### Go标准库

1、sync：提供了基本的同步原语。在多个goroutine访问共享资源的时候，需要使用sync中提供的锁机制。

2、os：提供了对操作系统功能的非平台相关访问接口。接口为Unix风格。提供的功能包括文件操作、进程管理、信号和用户账号等。

3、time：时间相关的处理

4、fmt：实现格式化的输入输出操作。

5、io：实现了一系列非平台相关的IO相关接口和实现，比如提供了对os中系统相关的IO功能的封装。我们在进行流式读写（比如读写文件）时，会用到该包。

6、http：提供web服务

7、string：处理字符串的一些函数集合，包括合并、查找、分割、比较、后缀检查、索引、大小写处理等等

### Hello World

创建`helloworld.go` 写如下内容：

```go
package main  // 代码包声明语句。
import "fmt" // 系统包用来输出的

func main() {
  // 打印函数调用语句。用于打印输出信息。
  fmt.Println(sayHello("hank"))
}

func sayHello(h string) string {
  return "Hello "+hank
}
```

然后执行`go run helloworld.go`

### Colloy上手

官方网站是 http://go-colly.org/

安装 `go get -u github.com/gocolly/colly/...`

### 爬虫

在`go.mod`中管理依赖

```go
module juejin.im/junning

go 1.14

require (
	github.com/gocolly/colly v1.2.0
	github.com/gocolly/colly/v2 v2.1.0
)

```

新建`main.go`文件并编写代码

```go
package main

import (
    "fmt"
    // 1、导入 colly。
    "github.com/gocolly/colly"
    "github.com/gocolly/colly/extensions"
)

func main() {
    // 2、创建 collector
    c := colly.NewCollector(colly.AllowedDomains("juejin.im")) // 要限定域名，否则就把全网都爬下来了
    extensions.RandomUserAgent(c)                              // 使用随机的UserAgent，最好能使用代理。这样就不容易被ban
    extensions.Referer(c)                                      // 在访问的时候带上Referrer，意思就是这一次点击是从哪个页面产生的

    // 3、事件监听，通过 callback 执行事件处理。
    c.OnError(func(_ *colly.Response, err error) {
        fmt.Println("Something went wrong:", err)
    })
    c.OnRequest(func(r *colly.Request) {
        // fmt.Println("Visiting", r.URL)
    })
    // Find and visit all links
    c.OnHTML("a[href]", func(e *colly.HTMLElement) {
        fmt.Println(e.Text)
        e.Request.Visit(e.Attr("href"))
    })

    // 4、启动网页访问
    c.Visit("https://juejin.im/")
}
```

- `:=` 的方式声明变量并赋值，JS写多了好不习惯（语法学习推荐大家看[漫画 Go 语言 纯手绘版 ](https://juejin.im/book/6844733833401597966/section)）
- `*clolly.HTMLElement` 的语法是声明参数类型的

### 回调及其调用顺序

gocolly 的原理就是监听网络访问，并提供了7事件和回调来供开发者来发挥。

1. OnRequest：请求执行之前调用
2. OnError：请求出错的时候调用
3. OnResponseHeaders：Called after response headers received响应头接收到时调用
4. OnResponse：响应完成后调用
5. OnHTML：如果接收到的内容是HTML，则在OnResponse之后立即调用
6. OnXML：如果接收到的内容是HTML或者XML，则在OnHTML之后立即调用
7. OnScraped：在OnXML之后立即调用



未完待续～