class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length == 0) return 0
        let res = 0;
        const set = new Set();
        const sorted = nums.sort((a,b)=>a-b);
        for (let i = 0; i < nums.length; i++){
            let longest = 1;         
            if (!set.has(nums[i])){
                let a = i;
                let b = i+1
                while(true){
                    if (sorted[b]-sorted[a] == 1) {
                        longest +=1;
                        a++
                        b++
                    }
                    else if (sorted[b] == sorted[a]) {
                        a++
                        b++
                        continue
                    }
                    else break
                }
                if(longest > res) res = longest
            }
            set.add(nums[i])
        }
        return res

}
}