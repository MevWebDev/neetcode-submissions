class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        
        let low = 0;
        let high = nums.length - 1;

        while (low <= high){

            console.log(nums.slice(low,high+1))
            const middle = Math.floor((low + high) / 2)

            if(nums[middle] === target) return middle

            if(nums[middle] < target) {
                low = middle + 1
            }
            else {
                high = middle - 1
            }
        }

        
        return -1
    }
}
