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
