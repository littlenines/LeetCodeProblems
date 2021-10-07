let s = "leetcode";

for(i=0;i<s.length;i++){
    if (s.indexOf(s[i])===s.lastIndexOf(s[i])){
       console.log(i);
   } 
}
console.log(-1);

// console.log(x);