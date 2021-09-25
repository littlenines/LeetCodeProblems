let nums = [4,3,2,7,8,2,3,1];

let array = [];

for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
        array.push(i);
    }
    
}

console.log(array);