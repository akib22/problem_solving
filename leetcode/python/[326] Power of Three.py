class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n == 1:
          return True
        if n % 3 != 0 or n <= 0: 
          return False
        num = 1
        
        while num <= n:
          if num == n:
            return True
          num *= 3
            
        return num == n
