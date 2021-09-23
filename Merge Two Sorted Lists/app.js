const l1 = [1,2,4], l2 = [1,3,4];

var mergeTwoLists = function(l1, l2) {
    let arr = [];

for (let i = 0; i < l1.length; i++){
    arr.push(l1[i]);
}

for (let i = 0; i < l2.length; i++){
    arr.push(l2[i]);
}
arr.sort();
return arr;
};
console.log(mergeTwoLists(l1,l2));
