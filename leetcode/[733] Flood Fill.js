/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  if (image[sr][sc] === newColor) return image
  
  const oldColor = image[sr][sc]
  image[sr][sc] = newColor
  
  const top = sr - 1,
        bottom = sr + 1,
        right = sc + 1,
        left = sc - 1,
        isRightColorMatched = right < image[0].length && image[sr][right] === oldColor,
        isLeftColorMatched = left >= 0 && image[sr][left] === oldColor,
        isBottomColorMatched = bottom < image.length && image[bottom][sc] === oldColor,
        isTopColorMatched = top >= 0 && image[top][sc] === oldColor

  if (isRightColorMatched) {
    floodFill(image, sr, right, newColor)
  }
  
  if (isLeftColorMatched) {
    floodFill(image, sr, left, newColor)
  }
  
  if (isBottomColorMatched) {
    floodFill(image, bottom, sc, newColor)
  }
  
  if (isTopColorMatched) {
    floodFill(image, top, sc, newColor)
  }

  return image
};
