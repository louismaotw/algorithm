/*SPOJ: ARRAYSUB, subarrays
Problem: Given an array, and a number K, we need to print the maximum value in all the sub-arrays of size K.

Algorithm:

*/
//填表
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var cache = {};

function arraysub(arr) { //
    var res = [];
    var flag_start = true,flag_end = false;
    for (var i = 0; i < arr.length; i++) {
        var max = 0;;
        for (var j = 0; j < 4; j++) {
            if (arr[i + j] == undefined) {
                flag_end = true;
                break;
            }
            if (arr[i+j] > max) {
                max = arr[i+j];
            }
        }
        if (max>0 && flag_end==false) {
            res.push(max);
        }
        if (max > 0 && flag_end == true && flag_start==true) {
            res.push(max);
        }

        if (flag_end == true)
            break;
        flag_start = false;
      
    }
    console.log(res);
}

/*
 made better by storing the position of the maxV element.
*/
function arraysub2(arr) {
    var k = 4;
    var len = arr.length;
    var MaxPos = -1;
    var res=[]; //result array
    var findMaxOfSub = function (start, end) {
        var maxV = arr[start];
        for (var i = start + 1; i <= end; i++) {
            if (maxV < arr[i]) {
                maxV = arr[i];
                MaxPos = i;

            }
        }
        return maxV;
    };
 
    var calulate = function () {
        var maxV = findMaxOfSub(0, k - 1);
        res.push(maxV);
        for (var i = k; i < len; i++) {
            if (MaxPos > i - k) {
                if (arr[i] > maxV) {
                    maxV = arr[i];
                    MaxPos = i;
                }
            }
            else {
                maxV = findMaxOfSub(i - k + 1, i);
            }
            res.push(maxV);
        }
        console.log(res);
    };
    calulate();
}

//使用segment tree.
function arraysub3(arr) {
    var k = 4;
    var len = arr.length;
    var MaxPos = -1;
    var res = []; //result array
    var tree = [];
    var build = function (node, start, end) { //node代表的是一個編號，也就是key。
        if (start == end) {
            tree[node]=arr[start];
        }
        else {
            var mid = Math.floor((start + end) / 2); //在這裡分成兩段，若原始陣列為[1,2,3,4,5],則分成,[1,2,3]和[4,5]。
            build(2 * node + 1, start, mid);
            build(2 * node + 2, mid + 1, end);
            tree[node] = Math.max(tree[2 * node + 1], tree[2 * node + 2]); //利用tree陣列記住node這個編號的值(在此為底下兩個分支的值的最大值)
        }
    };
    var query=function(node, start, end, l, r){
        if (start > r || end < l || l > r) //表示start~end構成的區間，完全在l~r構成的區間之外。
            return 0;
        if(l<=start && r>=end) //Completely inside. 表示start~end構成的區間，完全在l~r構成的區間之內。
            return tree[node];
        var mid=Math.floor((start+end)/2);
        var p1=query(2*node+1, start, mid, l, r);
        var p2=query(2*node+2, mid+1, end, l, r);
        return Math.max(p1,p2);
    }

    build(0, 0, len - 1);
    console.log(tree);
    var res=[];
    for(var i=0; i<len-k+1; i++){
        res.push(query(0,0,len-1, i,i+k-1));
    }
    console.log(res);
}



//var test = [4, 1, 1, 9];
//var test = [1, 2, 3, 4, 5];
var test = [9, 1, 8, 2, 7, 3, 6, 4, 5, 15, 17];
//var test = [10, 15];

var final;
try{
    final=arraysub3(test);
}
catch (ex) {
    console.log("error:" + ex);
}
console.log("FINAL: " + final);
