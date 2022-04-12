'''
approach: (two pointer)
- first split the str
- then using two-pointer method find the vowels and reverse them
'''

class Solution:
    def reverseVowels(self, s: str) -> str:
      start = 0
      end = len(s) - 1
      leftStr = ''
      rightStr = ''
      
      def isVowel(c: str):
        vowels = ['a', 'e', 'i', 'o', 'u']
        return c.lower() in vowels
      
      def split(word):
        return [char for char in word]
      
      s = split(s)
      leftVowel = -1
      rightVowel = -1
      
      while start < end:
        if isVowel(s[start]):
          leftVowel = start
        else:
          leftVowel = -1
          start += 1
          
        if isVowel(s[end]):
          rightVowel = end
        else:
          rightVowel = -1
          end -= 1
        
        if (leftVowel > -1) and (rightVowel > -1):
          temp = s[leftVowel]
          s[leftVowel] = s[rightVowel]
          s[rightVowel] = temp
          end -= 1
          start += 1
        
      return ''.join(c for c in s)
