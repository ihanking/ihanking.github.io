---
title: Python算法|例1两数之和
date: 2020-09-13
draft: false
categories: ["算法系列"]
---

```python
class Solution:
    def twoSum(self,nums,target):
        dict={}
        for i,n in enumerate(nums):
            if target-n in dict:
                return [dict[target-n],i]
            dict[n]=i

if __name__ == "__main__":
    nums=[2,7,11,15]
    target=9
    result=Solution().twoSum(nums,target)
    print(result)
```

结果

`[0, 1]`