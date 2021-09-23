function twoSum(nums , target){
    let output = [];

    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;

        while(j < nums.length){
            if (nums[i] + nums[j] === target) {
                output.push(i);
                output.push(j);
                return output;
            }
            j++;
        }
        
    }
}

console.log(twoSum([3,2,4],6));