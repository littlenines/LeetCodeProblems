let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
// let digits = [9] -> [1,0]

let x = String(BigInt(digits.join('')) +1n).split('').map(Number);
console.log(x);
