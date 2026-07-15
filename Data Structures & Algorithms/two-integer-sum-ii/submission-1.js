class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = {};
        for (let i = 0; i < numbers.length; i++){
            const rest = target - numbers[i]
            if(map[rest]) return [map[rest], i+1]
            if (map[numbers[i]] == undefined) map[numbers[i]] = i + 1;
            
        }
       
    }
}
