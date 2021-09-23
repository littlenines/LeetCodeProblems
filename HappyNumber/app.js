var isHappy = function(n) {
    var tmp;
  
    while (n !== 1) {
      tmp = 0;
      while (n > 0) {
        var digit = Math.pow(n % 10, 2);
        console.log('digit:'+ digit);
        tmp += digit;
        console.log('tmp:'+tmp);
        console.log('N:'+n);
        n = Math.floor(n / 10);
        console.log('n:'+n);
        if (digit === n && digit !== 1) {
          return false;
        }
      }
  
      n = tmp;
    }
  
    return true;
  };
isHappy(19);