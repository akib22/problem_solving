'''
approach:
- first split the string into word
- check word's length is less than 3
- if make the word lowercase
- else make first word uppercase and rest of them lowercase
- then join these word into a string
'''
class Solution:
    def capitalizeTitle(self, title: str) -> str:
      t = ''
      
      for word in title.split(' '):
        if len(word) < 3:
          t += word.lower()
        else:
          t += word[0].upper()
          t += word[1:].lower()
        t += ' '
        
      return t.strip()

'''
- solved using join function and ternary operator
'''
class Solution:
    def capitalizeTitle(self, title: str) -> str:
      return " ".join(word.lower() if len(word) < 3 else word.capitalize() for word in title.split(' '))

'''
approach: (two pointer)
- one pointer used for make lowercase char
- another pointer used for uppercase first char of a word
'''
class Solution:
    def capitalizeTitle(self, title: str) -> str:
      length = len(title)
      i = 0
      j = 0
      ct = ''
      
      while i <= length:
        if (length == i or title[i] == ' '):
          ct += ' ' if i != length else ''
          
          if  i - j > 2:
            left = ct[0:j]
            right = ct[j+1:]
            ct = left + ct[j].upper() + right

          j = i + 1
        
        else:
          ct += title[i].lower()
        
        i += 1

      return ct
