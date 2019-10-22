/*SPOJ: RPLN, Negative Score
Problem: This question deals with Range Minimum Query

Algorithm:

*/
//填表
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var cache = {};

//使用segment tree.
function rpln(arr, begin, end) { //begin: 1 based.
    var k = 4;
    var len = arr.length;
    var res = []; //result array
    var tree = [];
    var build = function (node, start, end) { //node代表的是一個編號，也就是key。
        if (start == end) {
            tree[node]=arr[start];
        }
        else {
            var mid = Math.floor((start + end) / 2);
            build(2 * node + 1, start, mid);
            build(2 * node + 2, mid + 1, end);
            tree[node] = Math.min(tree[2 * node + 1], tree[2 * node + 2]); //利用tree陣列記住node這個編號的值(在此為底下兩個分支的值的最小值)
        }
    };
    var query=function(node, start, end, l, r){
        if (start > r || end < l || l > r) //表示start~end構成的區間，完全在l~r構成的區間之外。
            return Number.POSITIVE_INFINITY;
        if(l<=start && r>=end) //Completely inside. 表示start~end構成的區間，完全在l~r構成的區間之內。
            return tree[node];
        var mid=Math.floor((start+end)/2);
        var p1=query(2*node+1, start, mid, l, r);
        var p2=query(2*node+2, mid+1, end, l, r);
        return Math.min(p1,p2);
    }

    build(0, 0, len - 1);
    console.log('tree:');
    console.log(tree);
    var res=[];
    //for(var i=0; i<len-k+1; i++){
    //    res.push(query(0,0,len-1, i,i+k-1));
    //}
    //console.log(res);
    console.log(query(0, 0, len - 1, begin - 1, end - 1));

}



//var test = [1, -2,-4, 3, -5];
var test = [1, 2, 3, 4, 5];
//var test = [9, 1, 8, 2, 7, 3, 6, 4, 5, 15, 17];
//var test = [10, 15];
console.log(test);
var final;
try{
    final=rpln(test,3,5);
}
catch (ex) {
    console.log("error:" + ex);
}
console.log("FINAL: " + final);
