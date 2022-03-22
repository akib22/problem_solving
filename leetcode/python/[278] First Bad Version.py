# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
  def firstBadVersion(self, n: int) -> int:
    start = 1
    end = n
    firstBadOne = -1
    
    while start <= end:
      mid = (start + end) // 2

      if isBadVersion(mid):
        firstBadOne = mid
        end = mid - 1
      else:
        start = mid + 1

    return firstBadOne