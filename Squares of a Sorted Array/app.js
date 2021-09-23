const nums = [-4,-1,0,3,10];
let stack = [];

for(let i in nums) {
    let absolute = Math.abs(nums[i]);
    stack.push(Math.pow(Math.abs(absolute),2));
}
stack.sort(function(a, b) { return a - b; });
console.log(stack);