function sorted_Squares(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i] * nums[i]);
    }
    return result.sort((a, b) => a - b);
}

let nums = [-4,-1,0,3,10];
console.log(sorted_Squares(nums)); 
