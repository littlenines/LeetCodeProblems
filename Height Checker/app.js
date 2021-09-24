let heights = [10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7];
let expected = heights.slice();
expected.sort(function(a, b) {
    return a - b;
  });
console.log(expected);
let count = 0;
for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
            count++;
        } 
}
console.log(count);