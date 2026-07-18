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

        if (zeros > 1) return new Array(nums.length).fill(0);

        const output = new Array(nums.length)

        if (zeros === 1) {
            
            const index = nums.indexOf(0);
            
            
            nums.forEach((n,i)=>{
                if(i!==index){
                    output[i] = 0
                } else {
                    output[i] = maxProd
                }
            })

        }

        if(zeros === 0){
            nums.forEach((n,i)=>{
            output[i]= maxProd / n
        })
        }

        return output;
    }
}
