'''
approach
- loop through the string by +2
- put the values in hasmap
- then calculate all 3 colors exits in rings
'''

class Solution:
    def countPoints(self, rings: str) -> int:
      i = 1
      length = len(rings)
      hashMap = {}
      count = 0
      
      while i < length:
        if rings[i] in hashMap:
          hashMap[rings[i]][rings[i - 1]] = True
        else:
          hashMap[rings[i]] = { rings[i - 1]: True }
        
        i += 2
          
      for key in hashMap.keys():
        if len(hashMap[key].keys()) == 3:
          count += 1
      
      return count
