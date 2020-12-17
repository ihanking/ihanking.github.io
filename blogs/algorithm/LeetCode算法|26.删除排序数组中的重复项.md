---
title: LeetCode算法|26.删除排序数组中的重复项
date: 2020-09-13
draft: false
tags: ["leetcode"]
categories: ["算法系列"]
---

```python
class Solution:
    def removeDuplicates(self, nums) -> int:
        nums[:] = list(sorted(set(nums)))
        return len(nums)

nums=[0,0,1,1,1,2,2,3,3,4]
result=Solution().removeDuplicates(nums)
print(result)
```

来源： https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/