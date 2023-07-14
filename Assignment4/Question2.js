function findDistinct_Elements(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let diff1 = [...set1].filter(x => !set2.has(x));
    let diff2 = [...set2].filter(x => !set1.has(x));
    return [diff1, diff2];
}
let nums1 = [1, 2, 3];
let nums2 = [2, 4, 6];
console.log(findDistinct_Elements(nums1, nums2)); 
