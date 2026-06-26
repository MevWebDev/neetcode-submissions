class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false

        const mapS = {}
        const mapT = {}

        for (let i=0; i<s.length; i++){
            if(!mapS[s[i]]) mapS[s[i]] = 0;
            if(!mapT[t[i]]) mapT[t[i]] = 0;
            mapS[s[i]] =  mapS[s[i]] + 1
            mapT[t[i]] = mapT[t[i]] + 1
        }
        for (const key in mapS){
            if(mapS[key] !== mapT[key]) return false;
        }
        return true
    }
}
