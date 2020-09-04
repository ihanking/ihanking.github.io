---
title: "Python算法|例3检测2的幂次"
date: 2020-09-01
draft: false
categories: ["算法学习"]
---

```python
class Solution:
    def checkPowerOf2(self, n):
        ans=1
        for i in range(31):
            if ans == n:
                return True
            ans = ans << 1
        return False

if __name__=="__main__":
    temp = Solution()
    nums1 = 16
    nums2 = 17
    print(("输入: " + str(nums1)))
    print(("输出: " + str(temp.checkPowerOf2(nums1))))
    print(("输入: " + str(nums2)))
    print(("输出: " + str(temp.checkPowerOf2(nums2))))
```
结果如下:
输入: 16
输出: True
输入: 17
输出: False