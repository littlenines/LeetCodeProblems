const nums = [1,2,3,1];

nums.sort((a, b) => a - b);

for (let i = 0; i < nums.length; i++){
    if (nums[i] === nums[i+1]) {
        return true;
    }
}
return false;