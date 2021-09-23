var reverse = function(x) {
    let maxInt = Math.pow(2,31) -1;
    let minInt = Math.pow(2,31) * -1;
    let minus = Math.sign(x);
    let str = x.toString();
    let arr = Array.from(str).reverse().join('');
    let ress = parseInt(arr) * minus;
    if(ress > maxInt  || ress < minInt){
    return 0;
    }
    else {
    return ress;
    }
};