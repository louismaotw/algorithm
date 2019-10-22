/*
quote form Tushar Roy.
1. Add to stack if current value is equal to or greater than top of stack.
2. Otherwise keep removing from stack till a number whose value is smaller of equal to the current value is found.
3. Calculate area every time you remove.
if(stack is empty)
    area=input[top]*i;
else
    area=input[top]*(i-stack.top-1);
 註：top代表從stack, pop出的一個item.

*/

var Stack = require("./stack.js");
var stack = new Stack();
function max_rect(arr) {
    //stack.clear();
    arr.push(-Infinity);
    var len = arr.length;
    var maxArea = 0;
    for (var i = 0; i < len; i++) {
        //var peek = stack.peek() == undefined ? -1 : stack.peek();//檢查stack裡的最頂層值

        if (i<(len-1) && (stack.size() == 0 || arr[i] >= arr[stack.peek()])) {
            console.log(i + ' /peek ' + stack.peek());
            stack.push(i);//放進stack的是arr的index
 
        }
        else { //在stack中有項目，且peek的值大於cur
            var top_idx = stack.pop();
            var tempArea = 0;
            var cur=arr[i];
            while (true) {
                console.log("top_idx: " + top_idx);
                if (stack.isEmpty() == true) {
                    tempArea = arr[top_idx] * i; //到i(不含i), top_idx是最小的。
                    if (tempArea > maxArea) {
                        maxArea = tempArea;                     
                    }
                    if (i < len-1) {
                        stack.push(i);
                    }
                    break;
                }
                else {
                    tempArea = arr[top_idx] * (i - stack.peek() - 1);                 
                }
                if (tempArea > maxArea) {
                    maxArea = tempArea;
                }
                if (arr[stack.peek()] > cur) {
                    top_idx = stack.pop();
                }
                else if (i < len-1) {
                    stack.push(i);
                    break;
                }
            }
        }
    }
    return maxArea;
}


var test1 = [1,2,4];
var test2 = [2,1,2,3,1];

console.log(max_rect(test2));



