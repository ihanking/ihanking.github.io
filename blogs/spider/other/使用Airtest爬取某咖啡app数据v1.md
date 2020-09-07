---
title: "使用Airtest爬取某咖啡app数据v1"
date: 2020-08-26
draft: false
tags: ["app","airtest"]
categories: ["爬虫实战"]
---

```python
# -*- encoding=utf8 -*-
__author__ = "Hank"

from airtest.core.api import *
from poco.drivers.android.uiautomation import AndroidUiautomationPoco
poco = AndroidUiautomationPoco(use_airtest_input=True, screenshot_each_action=False)
auto_setup(__file__)

import time
import random
import pandas as pd

page_data=[]
while True:
    city=poco(name='com.lucky.luckyclient:id/tv_select_city').get_text()

    result_obj = poco("com.lucky.luckyclient:id/frameLayout").offspring("com.lucky.luckyclient:id/lv_address_list").child("android.widget.LinearLayout")

    for result in result_obj:
        brand = result.child("android.widget.LinearLayout").child("android.widget.LinearLayout").child(name='com.lucky.luckyclient:id/iv_shop_brand').get_text()

        name = result.child("android.widget.LinearLayout").child("android.widget.LinearLayout").child(name='com.lucky.luckyclient:id/tv_dept_name').get_text()

        address = result.child("android.widget.LinearLayout").child("android.widget.LinearLayout").child(name='com.lucky.luckyclient:id/tv_dept_address').get_text()
        
        city=poco(name='com.lucky.luckyclient:id/tv_select_city').get_text()
        
        data = city, name, address, brand
        s=str(city)+str(name)+str(address)+str(brand)
        if "UIObjectProxy" in s:
            pass
        else:
            page_data.append(data)
            print(data)
        
    end = poco(text="已经全部加载完成")
    if end.exists():
        all_data=sorted(list(set(page_data)),key=page_data.index)
        data = pd.DataFrame([i for i in all_data], columns=['City','Name','Address','Brand'])
        data.to_excel('{0}.xlsx'.format(city),index=False)
        print("Done!")
        break
    else:
        poco.swipe([0.5, 0.8], [0.5, 0.2])
        time.sleep(random.random()*2+1)
```