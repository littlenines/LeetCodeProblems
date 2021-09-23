const nums = [555,901,482,1771];

let count = 0;
for(let i in nums) {
    if(nums[i].toString().length % 2 === 0){
        count = count + 1;
    }
}
return count;