/*
SPOJ
Initialise prod=1.
Enter value from user.
if stack is empty or stack top > val,
then push the value to stack.
Else, pop stack top, and multiply prod with val (using given modulo).
*/
var stack = require("./Stack.js");
var s = new stack();
function theatre(arr) {
    s.clear();
    var prod = 1;
    for (var i = 0; i < arr.length; i++) {
        var cur = arr[i];
        while (!s.isEmpty() && s.peek()< cur) {
            prod = prod * cur;
            s.pop();
        }
        s.push(cur);
    }
    prod = prod % 1000000007;
    console.log(prod);
}

var test = [5, 2, 1, 4, 3];
var test2 = [9, 8, 3, 5, 7];
var test3=[30, 10, 50, 70, 11, 60, 20, 80, 31, 12]
theatre(test);
theatre(test2);
theatre(test3);


