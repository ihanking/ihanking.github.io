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
import os
import time
import json
import shutil
import random
import requests
import traceback
import itertools
import pandas as pd
from lxml import etree
from airtest.core.api import *
from poco.drivers.android.uiautomation import AndroidUiautomationPoco
auto_setup(__file__)
poco = AndroidUiautomationPoco(use_airtest_input=True, screenshot_each_action=False)

all_city=[]

def getCity():
    while True:
        city_obj_list = poco(name='cn.com.pacificcoffee:id/cp_list_item_name')
        city_list = [city.get_text() for city in city_obj_list]
        for city in city_list:
            print(city)
            all_city.append(city)

        end = poco(text="中卫市")
        if end.exists():
#             save_city()
            getStore()
            break

        poco.swipe([0.5, 0.8], [0.5, 0.2])
        sleep(2)

def save_city():
    all_city=sorted(list(set(all_city)),key=all_city.index)
    data = pd.DataFrame([i for i in list(set(all_city))], columns=None)
    data.to_excel('all_city.xlsx',index=False, header=None)
    print('City Save Done!')


def getStore():
#     all_city2 = list(set(all_city))
    all_city2=pd.read_excel("all_city3.xlsx")
    try:
        for city in all_city2['City']:
            all_name_list=[]
            all_address_list=[]
            
            city=city.strip("\n")
            print(city)
            sleep(1)
            poco(name="cn.com.pacificcoffee:id/cp_search_box").set_text(str(city)) #搜索框输入城市
            sleep(1)
            poco(name="cn.com.pacificcoffee:id/cp_list_item_name").click() #点击搜索结果

            error = poco(name="cn.com.pacificcoffee:id/tv_error_msg")  # 当前城市未开通门店
            position = poco(name="cn.com.pacificcoffee:id/tv_left")  # 点击进入城市列表
            if error.exists():
                sleep(random.random()*2+1)
                position.click()  # 如果当前城市未开通门店，点击进入城市列表选择下一个城市
                sleep(random.random()*2+1)
            else:
                while True:
                    name_obj_list = poco(name='cn.com.pacificcoffee:id/tv_store_name')
                    if name_obj_list:
                        name_list = [name.get_text() for name in name_obj_list]
                        all_name_list.extend(name_list)

                    address_obj_list = poco(name='cn.com.pacificcoffee:id/tv_store_address')
                    if address_obj_list:
                        address_list = [address.get_text() for address in address_obj_list]
                        all_address_list.extend(address_list)
                
                    end = poco(text="已经到底了")
                    if end.exists():
                        sleep(random.random()+2)
                        result_name_list=list(set(all_name_list))
                        result_name_list.sort(key=all_name_list.index)
                        result_address_list=list(set(all_address_list))
                        result_address_list.sort(key=all_address_list.index)
                        
                        now_city=[]
                        now_city.append(city)
                        result_city_list=len(result_name_list)*now_city
                        
                        result=list(itertools.zip_longest(result_city_list,result_name_list,result_address_list))
                        print(result)
                        
                        save_store(city,result)
                        sleep(random.random()+1)
                        position.click()
                        sleep(random.random()*2+1)
                        break
                    else:
                        poco.swipe([0.5, 0.8], [0.5, 0.2])
                        sleep(random.random()*2+1)
                    sleep(random.random()*2+1)
    except Exception as e:
        print(e)
        getStore()

def save_store(city,result):
    sku = os.path.splitext(os.path.basename(__file__))[0]
    head = ['City','Name','Address']
    data = pd.DataFrame([i for i in result], columns=head)
    dirname=time.strftime("%Y%m%d",time.localtime())
    os.makedirs(dirname,exist_ok=True)
    skufile='./{0}/'.format(dirname)+sku+dirname
    os.makedirs(skufile,exist_ok=True)
    shutil.copy(sku+'.py',skufile+'/'+sku+'.py')
    data.to_excel(skufile+'/{0}{1}{2}.xlsx'.format(sku,dirname,city),index=False)
    print(city+' data save done!')
        
if __name__=="__main__":
#     getCity()
    getStore()
```