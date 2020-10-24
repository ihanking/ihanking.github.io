---
title: Python统计分析
date: 2020-09-24
draft: false
categories: ["统计学系列"]
---

**本文流程**

描述性统计

- 偏度和峰度
- 累计值

假设检验和区间估计

- 示例1
 - 假设检验
 - 置信区间
 
- 示例2
 - 假设检验
 - 置信区间


## 描述性统计

```python
#导入包
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

data=list(np.random.randn(10000))
df=pd.DataFrame(data, columns=["分布"])
df.describe()
```
![描述统计](/images/202009/24/描述统计.png)

df.count()  count统计非Na值的数量

df.min()   min统计最小值；

df.max()  max统计最大值 

df.quantile(q=0.75)   quantile统计分位数，参数q确定位置  

df.sum()   sum求和  

df.mean()   mean求平均值  

df.median()   median求算数中位数，50%分位数  

df.std() 标准差

df.var() 方差

df.skew()   skew样本的偏度 

df.kurt()   kurt样本的峰度

**分位数**
```python
df.quantile(q=0.75)
```
分布    0.682357
Name: 0.75, dtype: float64

**中位数**
```python
df.median()
```
分布    0.004791
dtype: float64

**求和**
```python
df.sum()
```
分布    29.237614
dtype: float64

**标准差**
```python
df.std()
```
分布    1.012937
dtype: float64

**方差**
```python
df.var()
```
分布    1.026042
dtype: float64

**偏度**
```python
df.skew()
```
分布    0.04296
dtype: float64

**峰度**
```python
df.kurt()
```
分布    0.044328
dtype: float64


**通过直方图查看数据分布**
```python
plt.hist(data,100,density=True,facecolor='g',alpha=0.9)
plt.show()
```
![直方图](/images/202009/24/直方图.png)

**正态分布图**
```python
df=pd.DataFrame(np.random.normal(0,1,1000000))
df.plot(kind='hist',bins=1000)
```
![正态分布图](/images/202009/24/正态分布图.png)

```python
df=pd.DataFrame({'key1':np.arange(10),'key2':np.random.rand(10)*10})
```

**累计和**
```python
df['key1_s']=df['key1'].cumsum()
df['key2_s']=df['key2'].cumsum()
df
```
![累计和](/images/202009/24/累计和.png)

**累计积**
```python
df['key1_p']=df['key1'].cumprod()
df['key2_p']=df['key2'].cumprod()
df
```
![累计积](/images/202009/24/累计积.png)

**累计最大值**
```python
df.cummax()
```
![累计最大值](/images/202009/24/累计最大值.png)

**累计最小值**
```python
df.cummin()
```
![累计最小值](/images/202009/24/累计最小值.png)


## 假设检验和区间估计

### 例1

>某公司研制出一种新的安眠药，要求其平均睡眠时间为23.8h。 为了检验安眠药是否达到要求，收集到一组使用新安眠药的睡眠时间（单位：h）为：26.7,22,24.1,21,27.2,25,23.4。 试问：从这组数据能否说明新安眠药达到疗效（假定睡眠时间服从正态分布，显著性水平为0.05）

```python
dataSer=pd.DataFrame([26.7,22,24.1,21,27.2,25,23.4])
dataSer.describe()
```
![假设](/images/202009/24/假设.png)


### 假设检验

>设定原假设H0：新安眠药平均睡眠时间是23.8h，也就是平均值u=23.8;备择假设H1：新安眠药平均睡眠时间不是23.8h，也就是平均值u≠23.8;用统计模块stats计算P值,样本数小于30，t检验，假设是总体符合正态分布

```python
from scipy import stats

pop_mean=23.8
t,p_two = stats.ttest_1samp(dataSer,pop_mean)
print('t值=',t,'双尾检验的P值=',p_two)

if(p_two < 0.05):
    print('拒绝原假设，也就是此新安眠药未达到疗效')
else:
    print('接受原假设，也就是此新安眠药达到疗效')
```
t值= [0.46100295] 双尾检验的P值= [0.66103429]

接受原假设，也就是此新安眠药达到疗效


### 置信区间

>下面我们再来算一下新安眠药平均睡眠时间的置信区间。先查找置信水平对应的t值是多少，置信水平为0.05，置信度df=n-1=6，查找t表格可以得知对应的t值为2.4469，再用scipy计算出标准误差，这样就可以算出置信区间了

```python
t_ci = 2.4469
sample_mean = dataSer.mean()
sample_std = dataSer.std()
se = stats.sem(dataSer)
a = sample_mean - t_ci * se
b = sample_mean + t_ci * se
print('在95的置信水平下，平均睡眠时间的置信区间 CI = (%f,%f)' % (a,b))
```
结果为：在95的置信水平下，平均睡眠时间的置信区间CI = (22.076890,26.323110) 

可以看到置信区间包含了23.8，进一步验证了前面假设检验的结论。

### 例2

>有甲、乙两台机床加工相同的产品，从这两台机床加工的产品中随机地抽取若干件，测得产品直径（单位：mm）为机床甲：20.5,19.8,19.7,20.4,20.1,20.0,19.0,19.9      ;机床乙：19.7,20.8,20.5,19.8,19.4,20.6,19.2;试比较甲、乙两台机床加工的产品直径有无显著差异？假定两台机床加工的产品直径都服从正态分布，且总体方差相等。(α=0.05)

```python
# 创建数据
aSer = pd.Series([20.5,19.8,19.7,20.4,20.1,20.0,19.0,19.9])
bSer = pd.Series([19.7,20.8,20.5,19.8,19.4,20.6,19.2])
# 看下描述性统计信息
a_mean = aSer.mean()
b_mean = bSer.mean()
print('甲机床加工的产品直径=',a_mean,'单位：mm')
print('乙机床加工的产品直径=',b_mean,'单位：mm')
a_std = aSer.std()
b_std = bSer.std()
print('甲机床加工的产品直径标准差=',a_std,'单位：mm')
print('乙机床加工的产品直径标准差=',b_std,'单位：mm')
```
甲机床加工的产品直径= 19.924999999999997 单位：mm

乙机床加工的产品直径= 19.999999999999996 单位：mm

甲机床加工的产品直径标准差= 0.46521884251239365 单位：mm

乙机床加工的产品直径标准差= 0.6298147875897069 单位：mm

### 假设检验

原假设：甲、乙两台机床加工的产品直径没有显著差异，也就是甲机床加工的产品直径等于乙机床加工的产品直径  

备择假设：甲、乙两台机床加工的产品直径有显著差异，也就是甲机床加工的产品直径不等于乙机床加工的产品直径。

由于我们在上面使用的Scipy包的双独立样本t检验不能返回自由度，对于后面计算置信区间不方便，所以使用另一个统计包statsmodels，ttestind就是表示独立双样本检验，usevar='unequal'表示两个总体方差不一样，返回的第1个值t是计算出的t值，第2个p_two是双尾检验的p值，第3个df是独立双样本的自由度。

```python
import statsmodels.stats.weightstats as st

t,p_two,df = st.ttest_ind(aSer,bSer,usevar='unequal')
print('t=',t,'p_two=',p_two,'df=',df)

if(p_two < 0.05):
    print('拒绝原假设，接受备择假设，也就是甲、乙两台机床加工的产品直径有显著差异')
else:
    print('接受原假设，也就是甲、乙两台机床加工的产品直径没有显著差异')
```

t= -0.2592065883746012 

p_two= 0.8002815375230089 

df= 10.956106306156496

接受原假设，也就是甲、乙两台机床加工的产品直径没有显著差异


### 置信区间

```python
# 查找95%的置信区间、自由度是上面计算出的11对应的t值，为2.2010，再计算标准误差。
t_ci = 2.2010
a_n = len(aSer)
b_n = len(bSer)
se = np.sqrt(np.square(a_std)/a_n + np.square(b_std)/b_n)
# 最后计算出甲、乙两个机床加工的产品平均直径的差值的置信区间。
sample_mean = a_mean - b_mean
a = sample_mean - t_ci * se
b = sample_mean + t_ci * se
print('95置信水平下，两个平均值差值的置信区间 CI=(%f,%f)'%(a,b))
```

结果为：95置信水平下，两个平均值差值的置信区间 CI=(-0.711847,0.561847)

可以看到，置信区间包含了0，0代表两者均值相等，进一步验证了前面假设检验的结论。


