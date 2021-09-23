let nums = [0,0,1];
// for (let i = 0; i < nums.length ; i++) {
//     if (nums[i] === 0) {
//         nums.push(nums.splice(i, 1));
//         i--;
//     }
// }
let j = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[j] === 0 && nums[i] !== 0) {
        
    
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    j++;
    } else if (nums[j] !== 0){
        j++;
    }
}
console.log(nums);