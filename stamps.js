/*SPOJ: STAMPS
Problem: 

Algorithm:

*/

var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var cache = {};

function stamps(n,f) {
    f.sort(function (a, b) { return (b - a) }); //由大到小排序
    for (var i=0; i< f.length;i++) {
        n -= f[i];
        if (n <= 0)
            return i+1;
    }
    return "impossible";
}

var needs = 99;
var friends = [13,17,42,9,23,57];

//console.log(test);
console.log(stamps(needs, friends));


