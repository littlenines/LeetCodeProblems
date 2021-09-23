strs = ["flower","flow","flight"];

var longestCommonPrefix = function(strs) {
    if (!strs.length)return '';
for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs){
        console.log('aa: '+str);
        if (str[i] !== strs[0][i]){
            return str.slice(0, i);
        }
    }
    
}
return strs[0];
};

longestCommonPrefix(strs);