---
title: "Python快速设置Excel表格边框"
date: 2020-09-01
draft: false
tags: ["excel"]
---

```python
import xlwings as xw
#打开存好的excel
app = xw.App() #设置应用
wb = xw.Book("E:/Data/小蜜蜂超市销售报表.xlsx") #打开文件
ws = wb.sheets['Sheet1'] #选择表格

last_column = ws.range(1, 1).end('right').get_address(0, 0)[0] #获取最后列
last_row = ws.range(1, 1).end('down').row #获取最后行

a_range = f'A1:{last_column}{last_row}' #生成表格的数据范围

#设置边框
ws.range(a_range).api.Borders(8).LineStyle = 1 #上边框
ws.range(a_range).api.Borders(9).LineStyle = 1 #下边框
ws.range(a_range).api.Borders(7).LineStyle = 1 #左边框
ws.range(a_range).api.Borders(10).LineStyle = 1 #右边框
ws.range(a_range).api.Borders(12).LineStyle = 1 #内横边框
ws.range(a_range).api.Borders(11).LineStyle = 1 #内纵边框

#保存并关闭excel
wb.save("E:/Data/小蜜蜂超市销售报表2.xlsx")
wb.close()
app.quit()

```