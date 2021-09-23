let nums = [3,3];
const val = 3;
// Output: []
for (let i = 0; i < nums.length; i++) {
   if (nums[i] === val) {
       let save = i + 1;
       for (let i = save; i < nums.length; i++) {
           nums[i - 1] = nums[i];  
        }
        i=0;
        nums.length--;
    }
}

for (let i = 0; i < nums.length; i++) {
    if (nums[0] === val) {
        for (let i = 1; i < nums.length; i++) {
            nums[i - 1] = nums[i];  
         }
         nums.length--;
     }
}

console.log(nums);
