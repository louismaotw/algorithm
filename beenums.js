/*SPOJ: BEENUMS
Problem: 

Algorithm: beenums(n)=3n(n+1)+1 where n>=0

*/

var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var cache = {};

function beenums(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        var n = arr[i];
        var j = 0;
        while (true) {
            var val = 3 * j * (j + 1) + 1;
            if (n == val) {
                res.push("T");
                break;
            }
            else if(n>val){
                j++;
            }
            else {
                res.push("F");
                break;
            }
        }
    }
    console.log(res);
}

var test = [43,1,7,19,15];

//console.log(test);
beenums(test);


