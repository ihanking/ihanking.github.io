---
title: loguru日志记录
date: 2020-09-24
draft: false
tags: ["python"]
categories: ["Python系列"]
---

使用loguru记录不同消息，存放到各自文件中

```python
from loguru import logger

logger.add('普通日志.log', filter=lambda x: '[普通]' in x['message'])
logger.add('警告日志.log', filter=lambda x: '[需要注意]' in x['message']) # 改
logger.add('致命错误.log', filter=lambda x: '[致命]' in x['message']) # 改

logger.info('[普通]我是一条普通日志')
logger.warning('[需要注意]xx 写法在下个版本将会移除，请做好迁移')
logger.error('[致命]系统启动失败！')
```

结果如下：
```
2020-10-01 00:00:54.531 | INFO     | __main__:<module>:7 - [普通]我是一条普通日志
2020-10-01 00:00:54.532 | WARNING  | __main__:<module>:8 - [需要注意]xx 写法在下个版本将会移除，请做好迁移
2020-10-01 00:00:54.533 | ERROR    | __main__:<module>:9 - [致命]系统启动失败！
```