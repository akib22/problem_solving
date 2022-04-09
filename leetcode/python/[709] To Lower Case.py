class Solution:
    def toLowerCase(self, s: str) -> str:
      return s.lower()

# Solved using ascii code
'''
approach:
- check every character of string is Uppercase or not
- if character is upper case then convert it to lowercase
- else do nothing
'''
class Solution:
    def toLowerCase(self, s: str) -> str:
      lowerStr: str = ''

      for i in range(len(s)):
        char: str = s[i]
        asciiCode: int = ord(char)
    
        if asciiCode > 64 and asciiCode < 91:
          lowerStr += chr(asciiCode + 32)
        else: 
          lowerStr += char
      
      return lowerStr
