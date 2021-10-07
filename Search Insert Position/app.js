let nums = [1,3,5,6], target = 0

if (nums.includes(target)) {
    console.log(nums.indexOf(target));
} else {
    for (let i = 0; i < nums.length; i++) {
        if (target < nums[i]) {
            console.log(nums.length);
        }
    }
}