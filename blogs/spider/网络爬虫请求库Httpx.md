---
title: 网络爬虫请求库Httpx
date: 2020-09-27
draft: false
tags: ["httpx"]
categories: ["爬虫系列"]
---

>根据[官网](https://www.python-httpx.org/)描述，HTTPX是Python 3的功能齐全的HTTP客户端，它提供同步和异步API，并支持HTTP/ 1.1和HTTP/2。

## 特征

HTTPX是高性能的异步HTTP客户端，它基于完善的可用性requests，并为您提供：

- 广泛要求兼容的API。
- 标准同步接口，但如果需要，则具有异步支持。
- HTTP / 1.1 和HTTP / 2支持。
- 能够直接向WSGI应用程序或ASGI应用程序发出请求。
- 到处都有严格的超时。
- 全类型注释。
- 100％的测试覆盖率。

加上所有的标准功能的requests...

- 国际域名和URL
- 保持活动和连接池
- Cookie持久性会话
- 浏览器样式的SSL验证
- 基本/摘要身份验证
- 优雅的键/值Cookie
- 自动减压
- 自动内容解码
- Unicode响应机构
- 分段文件上传
- HTTP（S）代理支持
- 连接超时
- 流下载
- .netrc支持
- 分块请求


## 安装

用pip安装
```python
python3 -m pip install httpx
```

如果需要对 HTTP/2 支持，我们需要额外安装一个库
```python
python3 -m pip install httpx[http2]
```

## 使用示例

```python
>>> import httpx
>>> r = httpx.get('https://www.example.org/')
>>> r
<Response [200 OK]>
>>> r.status_code
200
>>> r.headers['content-type']
'text/html; charset=UTF-8'
>>> r.text
'<!doctype html>\n<html>\n<head>\n<title>Example Domain</title>...'
```

其他的和 requests 的使用类似

```python
r = httpx.put('https://httpbin.org/put', data={'key': 'value'})
r = httpx.delete('https://httpbin.org/delete')
r = httpx.head('https://httpbin.org/get')
r = httpx.options('https://httpbin.org/get')
```

使用`with`上下文管理器的形式

```python
with httpx.Client() as client:
    headers = {'X-Custom': 'value'}
    r = client.get('https://example.com', headers=headers)
```



## 代理

**允许所有请求都走代理**

```python
proxies = {
    "all://": "http://localhost:8030",
}
```
如果字典的值为 None 则表示不使用代理。

**不同的协议走不用的代理**

```python
proxies = {
    "http://": "http://localhost:8030",
    "https://": "http://localhost:8031",
}
```

http 走 8030 的代理，https 走 8031 的代理，这里要注意和用 requests 使用代理的区别

requests 是下面这样用的
```python
proxies = {
    "http": "http://localhost:8030",
    "https": "http://localhost:8030",
}
```

**综合使用**
```python
proxies = {
    # Route all traffic through a proxy by default...
    "all://": "http://localhost:8030",
    # But don't use proxies for HTTPS requests to "domain.io"...
    "https://domain.io": None,
    # And use another proxy for requests to "example.com" and its subdomains...
    "all://*example.com": "http://localhost:8031",
    # And yet another proxy if HTTP is used,
    # and the "internal" subdomain on port 5550 is requested...
    "http://internal.example.com:5550": "http://localhost:8032",
}
```

**链接池**

可以使用 Client 的关键字参数 limits 来控制连接池的大小。

它需要以下实例httpx.Limits 来定义：

- max_keepalive，允许的保持活动连接数或 None 始终允许。（预设10）

- max_connections，允许的最大连接数或 None 无限制。（默认为100）

```python
limits = httpx.Limits(max_keepalive_connections=5, max_connections=10)
client = httpx.Client(limits=limits)
```

## 异步支持

>HTTPX默认情况下提供标准的同步API，但是如果需要，还可以为您提供异步客户端的选项。异步是一种并发模型，其效率远远高于多线程，并且可以提供显着的性能优势并允许使用长期存在的网络连接（例如WebSockets）。如果您使用的是异步Web框架，则还需要使用异步客户端来发送传出的HTTP请求。

先看在 aiohttp 中是如何创建并发送请求的

```python
import aiohttp
import asyncio

async def main():
    async with aiohttp.ClientSession() as client:
         async with client.get('http://httpbin.org/get') as resp:
              assert resp.status == 200
              html= await resp.text()
              print(html)
```

需要使用两个 async with 来完成一个请求,然后我们看看 httpx 怎么实现的呢

```python
import asyncio
import httpx

async def main():
    async with httpx.AsyncClient() as client:
        resp = await client.get('http://httpbin.org/get')
        assert resp.status_code == 200
        html = resp.text
        print(html)

asyncio.run(main())
```

对比起这两个写法，显然httpx少掉些代码

请求方法都是异步的，因此您应该`response = await client.get(...)`对以下所有内容使用样式：

AsyncClient.get(url, ...)
AsyncClient.options(url, ...)
AsyncClient.head(url, ...)
AsyncClient.post(url, ...)
AsyncClient.put(url, ...)
AsyncClient.patch(url, ...)
AsyncClient.delete(url, ...)
AsyncClient.request(method, url, ...)
AsyncClient.send(request, ...)


到此就一般请求、代理、异步处理作了简单介绍，更多功能可以参考[官网](https://www.python-httpx.org/)学习。


