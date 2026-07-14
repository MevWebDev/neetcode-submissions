class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for (let i = 0; i < nums.length; i++){
            if (map[nums[i]] == undefined){
                map[nums[i]] = 1;   
            } 
            else map[nums[i]] += 1;
        }
        const toSort = []
        for(const entry in map){
            toSort.push([entry, map[entry]])
        }
        const sorted = toSort.sort((a,b)=>b[1]-a[1])
        console.log(sorted)
        const answer = [];
        for (let i = 0 ; i < k; i++){
            answer.push(sorted[i][0])
        }
        return answer
    }
}
