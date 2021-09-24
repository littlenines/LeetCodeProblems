// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.

// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.

let nums = [1,2];
nums.sort((a,b) => b-a);
for (let i = 0; i < nums.length ; i++) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i, 1);
        }
}
console.log(nums);
if (nums.length === 1) {
    return nums[0];
}
else if (nums.length === 2) {
    return nums[0];
}
else {
     return nums[2];
}

