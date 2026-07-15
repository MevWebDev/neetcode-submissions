class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1Hash = s1.split('').sort().join('')

        const s1L = s1.length;
        for (let i = 0; i < s2.length; i++){
            const sub = s2.slice(i,i+s1L).split('').sort().join('')
            if(s1Hash === sub) return true
            
        }
        return false

    }
}
