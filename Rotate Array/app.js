let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
while(k--){
    nums.unshift(nums.pop());  
}
console.log(nums);