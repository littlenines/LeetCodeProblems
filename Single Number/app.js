const nums = [4,1,2,1,2];

nums.sort((a,b) => a-b);
for(let i = 0; i < nums.length; i++){
    if (nums[i] !== nums[i+1]) {
        console.log(nums[i]);
    }
    i++;
}
