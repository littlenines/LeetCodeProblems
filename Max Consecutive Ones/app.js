/*
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
*/
nums = [1,1,0,1,1,1]

let first = 0;
let second = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
        first = 0;
    }else{
        first++;
    }

    if (first > second) {
        second = first;
    }
    
}
console.log(second);