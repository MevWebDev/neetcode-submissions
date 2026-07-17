class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const answer = []
        for (let i = 0; i < temperatures.length-1; i++){
            
            let days = 0

            for (let j = i + 1; j < temperatures.length; j++){

                if(temperatures[j] > temperatures[i]) {
                    days++
                    answer.push(days)
                    break;
                }
                
                if(j+1 === temperatures.length) {
                    answer.push(0)
                    break
                }
                days++
        }
        }
        answer.push(0)
        return answer
    }
}
