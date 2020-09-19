---
title: 基于geopy将地址转为经纬度
date: 2020-09-19
draft: false
tags: ["pandas"]
categories: ["数据处理"]
---

安装geopy包

```python
pip install geopy
```

根据详细地址获取经纬度

```python

from geopy.geocoders import Nominatim
geolocator = Nominatim(user_agent='Mozilla/5.0(Windows NT 10.0;WOW64)ApplewebKit/537.36(KHTML,like Gecko)Chrome/55.0.2883.75 Safari/537.36')

from geopy.extra.rate_limiter import RateLimiter
geocode = RateLimiter(geolocator.geocode, min_delay_seconds=1)

#获取location
data['location'] = data['Addr'].apply(geocode)

#获取经度
data['经度'] = data['location'].apply(lambda loc: loc.latitude if loc else None)

#获取纬度
data['纬度'] = data['location'].apply(lambda loc: loc.longitude if loc else None)  
```