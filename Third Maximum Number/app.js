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

