class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
       intervals.sort((a,b)=> a[0] - b[0]);

       
       const answer = [intervals[0]]
       for(let i = 0;  i < intervals.length ; i++){
            const lastMerged = answer[answer.length - 1]
            const current = intervals[i]

            if(lastMerged[1] >= current[0]){
                if(lastMerged[1] < current[1]) lastMerged[1] = current[1]
            }else{
                answer.push(current)
            }
       }
       

       return answer

    }
}
