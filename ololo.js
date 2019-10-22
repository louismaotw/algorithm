/*SPOJ: 
Problem: 

Algorithm: You just need to find XOR of all the numbers and you have the number which appeared only once.

*/

var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var cache = {};

function ololo(arr) {
    var res = [];
    var ans = 0;
    for (var i = 0; i < arr.length; i++) {
        ans ^= arr[i];
    }
    console.log(ans);
}

var test = [1,8,1,5,5,5,8];

//console.log(test);
ololo(test);


