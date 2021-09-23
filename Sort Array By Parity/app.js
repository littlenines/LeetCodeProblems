let nums = [3,1,2,4];

for (let i = 0; i < nums.length; i++) {
    if (nums[i]%2 === 0) {
        nums.unshift(nums.splice(i,1));
    }
    
}
console.log(nums);