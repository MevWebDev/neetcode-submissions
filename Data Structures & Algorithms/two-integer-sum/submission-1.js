class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {}
        for (let i=0; i< nums.length; i++){
            
            const remain = target - nums[i]; 
            if(map[remain] !== undefined && map[remain] !== i){
                return [map[remain], i] 
            } 
            map[nums[i]] = i;

        }
        return []
    }
}
