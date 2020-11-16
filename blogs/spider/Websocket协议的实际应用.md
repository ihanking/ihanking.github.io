---
title: Websocket协议的实际应用
date: 2020-11-12
draft: false
tags: ["websocket"]
categories: ["爬虫系列"]
---

>Websocket是一种网络通信协议，可以提供浏览器与服务器间进行全双工通信，主要引用于聊天室。

安装 `pip install websocket-clinet`

### 简单例子

```python
from websocket import create_connection

ws=create_connection("ws://echo.websocket.org/")
print("Sending hello,world")
ws.send("hello,world")
print("sent")
print("receiving")
result=ws.recv()
print("received %s" % result)
ws.close()
```

打印结果如下：
```
Sending hello,world
sent
receiving
received hello,world
```

### 爬虫项目

```python
import websocket
import threading
import time
import pprint#一个可以将数据以更优雅而非杂乱的形式打印的模块

def on_message(ws, message):#方法，调用的时候打印信息
    print(1)
    pprint.pprint(message)
    # print(ws.recv())

def on_error(ws, error):#方法，出错时打印错误
    print(2)
    print(error)

def on_close(ws):#关闭连接时调用
    print("### closed ###")

def on_open(ws):#方法，打开连接
    def run(*args):#运行
        ws.send('{"cmd":"login","number":100,"codes":["CJRL","KUAIXUN"]}')
        print('yoyoyo')
        time.sleep(5)
        ws.close()
        print("thread terminating...")
    threading._start_new_thread(run,())#启动多线程

headers={'Accept-Encoding:gzip, deflate, sdch','Accept-Language:zh-CN,zh;q=0.8',#伪装的请求头
         'Cache-Control:no-cache','Host:120.27.195.4:9502',
         'Origin:http://viewapi.kxt.com','Pragma:no-cache',
         'Sec-WebSocket-Extensions:permessage-deflate; client_max_window_bits',
         'User-Agent:Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36'
         }

if __name__ == "__main__":
    websocket.enableTrace(True)
    url='ws://118.31.236.175:9502/?token=sHdy2IF5eqh9daXYf4Goypl6z6eTh3xpgYuF2oK1dpaxd3aTgXiwmop4ndWLkKHWfp3SnJp8hWOXe6DGf5Ks2cegnc2YZ3-okYSZ05eBhtaOZZyngp2qnJekhteVlIfPu2V3zI59gpp_mq3Zf42C1oR3yqiIiJaogYuB2nzPZaA'#连接URL
    ws = websocket.WebSocketApp(url,
                              on_message = on_message,
                              on_error = on_error,
                              on_close = on_close,
                              header=headers)#配置参数
    ws.on_open = on_open#运行
    
ws.run_forever()#保持长连接

```


