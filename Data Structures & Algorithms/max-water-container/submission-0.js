class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0
        for (let i = 0; i < heights.length; i++){
            let amount;
            for (let j = i + 1; j < heights.length; j++){
                amount = Math.min(heights[i], heights[j]) * (j - i )
                if (max < amount) max = amount
        }
        }
        return max
    }
}
