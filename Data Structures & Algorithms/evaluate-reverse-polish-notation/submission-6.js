class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        
        for (let token of tokens){
            
            if (token === '+'){
                const a = Number(stack.pop())
                const b = Number(stack.pop())            
                stack.push(a+b)
            }
            else if (token === '-'){
                const a = Number(stack.pop())
                const b = Number(stack.pop())
                stack.push(b-a)
            }
            else if (token === '*'){
                const a = Number(stack.pop())
                const b = Number(stack.pop())
                stack.push(a*b)
            }
            else if (token === '/'){
                const a = Number(stack.pop())
                const b = Number(stack.pop())
                stack.push(Math.trunc(b/a))
            }
            else {
                stack.push(token)
            }
        }
        return stack[0]
    }
}
