//SPOJ

/*

*/
//¶ñªí
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");

function pairsum(arr, u, v) {
    var len=arr.length;
    var sum = [];
    var sumProd = [];
    sum[0] = arr[0];
    sumProd[0] = arr[0] * arr[0];
    cumSumProd = [];
    cumSumProd[0] = sumProd[0];
    for (var i = 1; i < len; i++) {
        sum[i] = sum[i - 1] + arr[i];
        sumProd[i] = sum[i] * arr[i];
        cumSumProd[i] = cumSumProd[i - 1] + sumProd[i];
    }
    if (u == 0)
        return cumSumProd[v];
    else
        return cumSumProd[v]-cumSumProd[u-1]-(sum[u-1]*(sum[v]-sum[u-1]));

}

var test = [2, 0, 1, 3, 3];
console.log(pairsum(test, 3,4));