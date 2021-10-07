let x = [1,5,4,2,6,8,7];

for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < (x.length - i -1); j++){
        if (x[j] > x[j+1]) {
            let temp = x[j];
            x[j] = x[j+1];
            x[j+1] = temp
        }
    }
    
}

console.log(x);