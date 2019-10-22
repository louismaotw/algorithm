/*SPOJ: KGSS, maximum sum
Problem: 
Algorithm:

*/
//填表
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var cache = {};

//使用segment tree.
function kgss(arr) {
    var k = 4;
    var len = arr.length;
    var MaxPos = -1;
    var res = []; //result array
    var tree = [];
    var build = function (node, start, end) { //node代表的是一個編號，也就是key。
        tree[node] = {};
        if (start == end) {
            tree[node].first = arr[start];
            tree[node].second = 0;
        }
        else {
            var mid = Math.floor((start + end) / 2); //在這裡分成兩段，若原始陣列為[1,2,3,4,5],則分成,[1,2,3]和[4,5]。
            build(2 * node + 1, start, mid);
            build(2 * node + 2, mid + 1, end);
            tree[node].first = Math.max(tree[2 * node + 1].first, tree[2 * node + 2].first); //利用tree陣列記住node這個編號的值(在此為底下兩個分支的值的最大值)
            tree[node].second = Math.min(Math.max(tree[2 * node + 1].second, tree[2 * node + 2].first), Math.max(tree[2 * node + 1].first, tree[2 * node + 2].second));
        }
    };
    var query = function (node, start, end, l, r) {
        var t_res = {};
        if (start > r || end < l || l > r) //表示start~end構成的區間，完全在l~r構成的區間之外。
            return { first: 0, second: 0 };
        if(l<=start && r>=end) //Completely inside. 表示start~end構成的區間，完全在l~r構成的區間之內。
            return tree[node];
        var mid=Math.floor((start+end)/2);
        var p1=query(2 * node+1, start, mid, l, r);
        var p2 = query(2 * node + 2, mid + 1, end, l, r);

        t_res.first = Math.max(p1.first, p2.first);
        t_res.second = Math.min(Math.max(p1.first, p2.second), Math.max(p1.second, p2.first));
        return t_res;
    }

    build(0, 0, len - 1);
    console.log(tree);
    var res = [];
    res.push(query(0, 0, len - 1, 3 ,8)); //求取在3和8區間，最大值和次大值。
    //for(var i=0; i<len-k+1; i++){
    //    res.push(query(0,0,len-1, i,i+k-1));
    //}
    console.log("result:");
    console.log(res);
}

//var test = [1, 2, 3, 4, 5];
var test = [9, 1, 8, 2, 7, 3, 6, 4, 5, 15, 17];
//var test = [10, 15];

var final = kgss(test);

console.log("FINAL: " + final);
