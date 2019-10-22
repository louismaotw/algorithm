/*SPOJ: FASHION
Problem: 

Algorithm:

*/

var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var cache = {};

function fashion(m, w) {
    m.sort(function (a, b) { return a - b });
    w.sort(function (a, b) { return a - b });
    var sum = 0;
    for (var i = 0; i < w.length; i++) {
        sum += m[i] * w[i];
    }
    console.log(sum);
}

var men = [2, 3, 2];
var women=[1, 3, 2]

//console.log(test);
fashion(men, women);

