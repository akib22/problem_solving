"""
APPROACH
- find the exact row where target is belongs (comparing target with first and last element of the row)
  - use binary search to get the target
- if now found then look next row
- if target is less then next row's first element return false
"""

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        rows = len(matrix)
        cols = len(matrix[0]) - 1
        
        def dinary_search(arr: List[int]) -> bool:
            start = 0
            end = len(arr) - 1
            
            while start <= end:
                mid = (start + end) // 2
                
                if arr[mid] == target:
                    return True
                
                if arr[mid] < target:
                    start = mid + 1
                else:
                    end = mid - 1

            return False
        
        current_row = 0
        
        while current_row < rows:
            if (target >= matrix[current_row][0] and target <= matrix[current_row][cols]):
                return dinary_search(matrix[current_row])
            elif (target > matrix[current_row][cols]):
                current_row += 1
            else:
                break
        
        return False
