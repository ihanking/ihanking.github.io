---
title: "Python算法|例2判断平方数"
date: 2020-09-01
draft: false
categories: ["算法系列"]
---

#示例: 输入num=16, 输出True, sqrt(16)=4; 输入num=15, 输出False, sqrt(15)=3.87

```python
class Solution:
    def isPerfectSquare(self, num):
        l=0
        r=num
        while (r-l > 1):
            mid=(l + r) / 2
            if (mid * mid <= num):
                l = mid
            else:
                r = mid
        ans = 1
        if ( l * l < num ):
            ans = r
        return ans * ans == num

#主函数
if __name__ == "__main__":
    num = 16
    print("初始值: ", num)
    solution = Solution()
    print("结果: ", solution.isPerfectSquare(num))
```