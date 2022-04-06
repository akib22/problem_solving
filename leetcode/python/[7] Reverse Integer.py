class Solution:
    def reverse(self, x: int) -> int:
      reverseNumber = 0
      isNegativeNumber = x < 0
      
      if isNegativeNumber:
        x *= -1
        
      while x:
        reverseNumber = (reverseNumber * 10) + (x % 10)
        x = x // 10
      
      if isNegativeNumber:
        reverseNumber *= -1
      
      if reverseNumber > (2 ** 31 - 1) or reverseNumber < ((-2 ** 31)):
        return 0
      
      return reverseNumber
