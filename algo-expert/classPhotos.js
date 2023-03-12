
// * Test Cases
const redShirtHeights1 = [5, 8, 1, 3, 4];
const blueShirtHeights1 = [6, 9, 2, 4, 5];
const expected1 = true;

// * Code

const compare = (a,b) => {
  return a > b ? 1 : -1;
}

function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  const redSorted = redShirtHeights.sort(compare);
  const blueSorted = blueShirtHeights.sort(compare);
  const diff = redSorted[0] - blueSorted[0];
  for(let i = 0; i < blueSorted.length; i++) {
    if((redSorted[i] - blueSorted[i]) * diff <= 0) {
      return false;
    }
  }
  
  return true;
}

console.log(classPhotos(redShirtHeights1,blueShirtHeights1));