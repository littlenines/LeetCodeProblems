var isPalindrome = function(x) {
    let y = x.toString();
    let arr = Array.from(y).reverse().join('');
    if(parseInt(y) === parseInt(arr)){
        return true;
    }else {
        return false;
    }
};

console.log(isPalindrome(121));