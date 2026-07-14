class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map =  {};
        for (let i = 0; i<nums.length;i++){
            const rest = target - nums[i];
            if(map[rest] != undefined) {
                return [map[rest], i]
            }
            if(map[nums[i]] == undefined){
                map[nums[i]] = i
            }
            

        }   
   
        return []
    }

}
