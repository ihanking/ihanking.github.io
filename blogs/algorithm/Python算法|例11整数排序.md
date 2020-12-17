---
title: "Python算法|例11整数排序"
date: 2020-09-01
draft: false
categories: ["算法系列"]
---


#给出一组整数，将其按照升序排序
#例如给出[3,2,1,4,5],排序后的结果为[1,2,3,4,5]
#参数A是一个整数数组
#返回一个整数数组

```python
class Solution:
    def sortIntegers2(self,A):
        self.quickSort(A,0,len(A)-1)
    def quickSort(self,A,start,end):
        if start>=end:
            return
        left,right=start,end
        pivot=A[int((start+end)/2)]
        while left<=right:
            while left<=right and A[left] < pivot:
                left += 1
            while left<=right and A[right]>pivot:
                right-=1
            if left<=right:
                A[left],A[right]=A[right],A[left]
                left+=1
                right-=1
        self .quickSort(A,start,right)
        self.quickSort(A,left,end)

#主函数
if __name__ == "__main__":
    A = [3,2,1,4,5]
    print('初始数组：',A)
    solution = Solution()
    solution.sortIntegers2(A)
    print('快速排序：',A)

```