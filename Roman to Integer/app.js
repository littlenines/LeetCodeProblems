var romanToInt = function(s) {
    const sym = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let res = 0;

    for (let i = 0; i < s.length; i++) {
        let first = sym[s[i]];
        let second = sym[s[i+1]];

        if(first < second){
            res += second - first;
            i++;
        } else{
            res += first;
        }
    }
    return res;
};

console.log(romanToInt('IV'));