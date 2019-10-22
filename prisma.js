/*SPOJ: 
Problem: 

Algorithm: a=(4V)的(1/3)次方，Surface Area=3*a*a*sqrt(3)/2
*/

var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var cache = {};

function prisma(arr) {
    for (var i = 0; i < arr.length; i++) {
        var v = arr[i];
        var a = Math.pow(4*v, (1 / 3));
        var s = 3 * a * a * Math.sqrt(3) / 2;
        console.log(s);
    }
}

var test = [10,5,100,245,5421];

//console.log(test);
prisma(test);


