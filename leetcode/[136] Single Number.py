class Solution:
    def singleNumber(self, nums: List[int]) -> int:
      d = { nums[0]: 1 }
      
      for i in range(1, len(nums)):
        if not nums[i] in d:
          d[nums[i]] = 1
        else:
          d[nums[i]] += 1
          
      for item in d:
        if d[item] == 1:
          return item
