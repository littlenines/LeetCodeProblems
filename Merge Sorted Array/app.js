let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;

nums1.splice(m, nums1.length);
  nums1.push(...nums2.splice(0, n));
  nums1.sort((a, b) => a - b);

  console.log(nums1);

