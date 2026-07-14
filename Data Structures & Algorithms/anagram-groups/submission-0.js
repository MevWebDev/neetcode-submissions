class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}
        const answer = []
        for (let i = 0; i < strs.length; i++){
            const key = strs[i].split('').sort().join('');
            if (map[key] == undefined){
                map[key] = [i]
            } else {
                map[key].push(i)
            }
        }

        for (const [key, value] of Object.entries(map)) {
        const ans = []
        value.forEach((s)=>{
             ans.push(strs[s])
        })
        answer.push(ans)
}
        return answer
    }
}
