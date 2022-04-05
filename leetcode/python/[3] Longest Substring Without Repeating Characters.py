'''
-> store unique subsrt
-> if found any repeating char slice it from that char index
-> then calculate max length
'''
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
      maxStr = ''
      maxLength = 0
      
      for c in range(0, len(s)):
        index = maxStr.find(s[c])

        if index == -1:
          maxStr += s[c]
        else:
          maxStr = maxStr[index+1:] + s[c]

        maxLength = max(maxLength, len(maxStr))
        
      return maxLength
