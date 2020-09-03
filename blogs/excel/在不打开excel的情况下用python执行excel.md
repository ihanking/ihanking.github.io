---
title: "在不打开excel的情况下用python执行excel"
date: 2020-09-01
draft: false
tags: ["excel"]
---

```python
import win32com.client
import time
path = r'absolute dir' #比如填文件的绝对路径，比如d:/file/stock.xlsx
xl = win32com.client.DispatchEx("Excel.Application")
workbook = xl.Workbooks.Open(path)
xl.Visible = False 
workbook.RefreshAll()
workbook.Save()
# time.sleep(3) #如果文件足够大，那么最好是在关闭excel之前保持几秒钟
workbook.Close(True)
xl.Quit()

```
