---
title: "Python算法|例16数字判断"
date: 2020-09-01
draft: false
categories: ["算法系列"]
---


**问题描述**
给定一个字符串，验证其是否为数字

**问题示例**
0判断为true
0.1判断为true
abc判断为false
1 a判断为false
2e10判断为true

**python代码实现**
```python
#参数s是一个字符串，返回一个布尔值，有限的自动化

class Solution:
    def isNumber(self, s):
        INVALID=0; SPACE=1; SIGN=2; DIGIT=3; DOT=4; EXPONENT=5;
        #0无效，1空格，2符号，3数字，4小数点，5指数，6输入的数字
        transitionTable=[
            [-1,0,3,1,2,-1],
            [-1,8,-1,1,4,5],
            [-1,-1,-1,1,2,-1],
            [-1,8,-1,4,-1,5],
            [-1,-1,6,7,-1,-1],
            [-1,-1,-1,7,-1,-1],
            [-1,8,-1,7,-1,-1],
            [-1,8,-1,-1,-1,-1]
        ]
        state=0;i=0
        while i<len(s):
            inputtype=INVALID
            if s[i]=='': inputtype=SPACE
            elif s[i]=='-' or s[i]=='+':inputtype=SIGN
            elif s[i] in '0123456789':inputtype=DIGIT
            elif s[i]=='.':inputtype=DOT
            elif s[i]=='e' or s[i]=='E':inputtype=EXPONENT
            state=transitionTable[state][inputtype]
            if state==-1:return False
            else: i+=1
        return state==1 or state==4 or state==7 or state==8

if __name__ == "__main__":
    temp=Solution()
    string1="1"
    string2="23aa"
    print("输入："+string1)
    print("输出："+str(temp.isNumber(string1)))
    print("输入："+string2)
    print("输出："+str(temp.isNumber(string2)))

```

**运行结果**

输入1
输出True
输入23aa
输出False

