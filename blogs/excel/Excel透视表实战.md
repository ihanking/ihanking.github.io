---
title: Excel透视表实战
date: 2020-09-24
draft: false
tags: ["excel"]
---


### 简单应用

![toushibiao](https://gitee.com/hank_leo/picture/raw/master/2020-12-18/1608304213195-toushibiao.png)

**组合**

按住ctrl键依次选取要组合的单元格

![Jietu20201218-232324](https://gitee.com/hank_leo/picture/raw/master/2020-12-18/1608305019457-Jietu20201218-232324.jpg)

![Jietu20201218-232501](https://gitee.com/hank_leo/picture/raw/master/2020-12-18/1608305117861-Jietu20201218-232501.jpg)


**计算字段**

步骤1:右击找到计算字段
![Jietu20201218-231615](https://gitee.com/hank_leo/picture/raw/master/2020-12-18/1608304606899-Jietu20201218-231615.jpg)

步骤2:编辑计算字段
![Jietu20201218-231812](https://gitee.com/hank_leo/picture/raw/master/2020-12-18/1608304755871-Jietu20201218-231812.jpg)

结果：
![Jietu20201218-231452](https://gitee.com/hank_leo/picture/raw/master/2020-12-18/1608304510866-Jietu20201218-231452.jpg)



### 实战1

某公司是金融第三方支付公司，为商家生产硬件商机，该种机器可以帮助商家收款，例如我们在商场里见到的收款pos机、收款机等。
"该公司原始数据中记录了每个商机的编号，以及卖给客户的信息（客户ID、区域编号、产品编号、客户名称、所属行业、所属领域）。
以及公司向客户销售产品的信息（销售阶段、上周销售阶段、赢单率、建立商机日、预计签约日、金额（$M）。"

原始数据截图如下：

![透视表原始数据](https://gitee.com/hank_leo/picture/raw/master/2020-12-18/1608304296564-%E9%80%8F%E8%A7%86%E8%A1%A8%E5%8E%9F%E5%A7%8B%E6%95%B0%E6%8D%AE.png)


**问题1： 使用以下数据，汇总销售阶段与赢单率交叉表的金额合计值。**

![汇总销售阶段与赢单率](https://gitee.com/hank_leo/picture/raw/master/2020-12-18/1608304328044-%E6%B1%87%E6%80%BB%E9%94%80%E5%94%AE%E9%98%B6%E6%AE%B5%E4%B8%8E%E8%B5%A2%E5%8D%95%E7%8E%87.png)


**问题2： 使用以下数据，制作销售阶段的饼图透视图并制作领域字段的切片器与数据透视图关联。**

![销售阶段的饼图透视图并制作领域字段的切片器与数据透视图关联](https://gitee.com/hank_leo/picture/raw/master/2020-12-18/1608304350222-%E9%94%80%E5%94%AE%E9%98%B6%E6%AE%B5%E7%9A%84%E9%A5%BC%E5%9B%BE%E9%80%8F%E8%A7%86%E5%9B%BE%E5%B9%B6%E5%88%B6%E4%BD%9C%E9%A2%86%E5%9F%9F%E5%AD%97%E6%AE%B5%E7%9A%84%E5%88%87%E7%89%87%E5%99%A8%E4%B8%8E%E6%95%B0%E6%8D%AE%E9%80%8F%E8%A7%86%E5%9B%BE%E5%85%B3%E8%81%94.png)
