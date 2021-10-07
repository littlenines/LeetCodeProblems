const nums1 = [1,2,2,1], nums2 = [2,2];

nums1.sort((a,b) => a - b);
nums2.sort((a,b) => a - b);

let i = 0, j = 0;
let result = [];
while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
        result.push(nums1[i]);
        i++;
        j++;
    }else if(nums1[i] < nums2[j]) {
        i++;
    }else{
        j++;
    }
}
console.log(result);