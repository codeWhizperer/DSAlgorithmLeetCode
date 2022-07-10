
/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
 
Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
*/

const runningSum = (nums) => {
    let newArray = new Array(nums);
  
    newArray[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
      newArray[i] = newArray[i - 1] + nums[i];
    }
    return newArray;
  };
  
  
  const runningSum2 = (nums) => {
     let total =0;
     let result = []
  
     for(let i=0; i < nums.length; i++){
    total =  total +=nums[i];
      result.push(total)
     }
     return result
    };
  
  //   Time complexity is 0(n)
  
  
  
  console.log(runningSum2([1, 2, 3, 4]));