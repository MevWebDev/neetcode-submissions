class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        

        let maxProd = 1;
        let zeros = 0;

        nums.forEach((n)=>{
            if(n === 0) zeros++;
            else maxProd *= n;
        })

        console.log(maxProd)

        if (zeros > 1) return new Array(nums.length).fill(0);

        const output = new Array(nums.length);

        for (let i = 0; i < nums.length; i++){
            if(zeros > 0){
                output[i] = nums[i] === 0 ? maxProd : 0
            } else {
                output[i] = maxProd / nums[i];
            }
        }

        

        return output;
        
        

        



        return output
    }
}
