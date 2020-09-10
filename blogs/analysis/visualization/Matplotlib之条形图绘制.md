---
title: Matplotlib之条形图绘制
date: 2020-09-10
draft: false
tags: ["matplotlib"]
categories: ["数据可视化"]
---

## 导入包

```python
import matplotlib.pyplot as plt
plt.rcParams["font.sans-serif"]=["SimHei"]
```

## 定义数据

```python
names=['wilson','warren','leon','bruce','andrew','edith']
en_score=[65,85,72,40,55,99]
math_score=[79,78,100,87,81,68]
```

## 绘制条形图

```python
en_bar=plt.bar(range(6),height=en_score,width=0.3,alpha=0.5,color='red',label='英语成绩')
math_bar=plt.bar([i + 0.3 for i in range(6)],height=math_score,width=0.3,alpha=0.3,color='green',label='数学成绩')

plt.xticks([i + 0.15 for i in range(6)], names)
plt.xlabel("成绩统计图")

plt.legend()
plt.ylabel("成绩范围")

#给条形图上标签
for en in en_bar:
    height=en.get_height()
    plt.text(en.get_x()+en.get_width()/2,height+1,str(height),ha='center',va='bottom')
    
for math in math_bar:
    height=math.get_height()
    plt.text(math.get_x()+math.get_width()/2,height+1,str(height),ha='center',va='bottom')

plt.show()
```

## 结果展示

![matplotlib之条形图](/images/202009/10/matplotlib之条形图.png)