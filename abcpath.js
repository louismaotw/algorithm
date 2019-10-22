/*SPOJ: ABCPATH, abc path
Problem: 
ou will be given a 2-dimensional grid of letters. Find the length of the longest path of consecutive letters, starting at 'A'. 
Paths can step from one letter in the grid to any adjacent letter (horizontally, vertically, or diagonally).

Algorithm:
在本實作中，針對搜索中分歧點的控制，採用了ARRAY和STACK的兩種方法實現。
在CLONE方面，ARRAY的SLICE方法較簡單。STACK稍麻煩，需將內部的私有屬性ITEMS中的元素，一個一個的COPY至一個空的STACK中才可以。
*/

var Stack = require("./Stack.js");
//var stack = new Stack();
var Queue = require("./Queue.js");
var Graph = require("./Graph.js");
var cache = {};

var res = new Queue();

var node = function (row, col, chr, color) {
    this.row = row;
    this.col = col;
    this.chr = chr;
    this.color = color;
}


function abcpath(arr) {
    console.log(arr);
    var row = arr.length;
    var col = arr[0].length;
    var flag_complete ;
    var n;
    var rr = [-1, 1, 0, 0, -1, -1, 1, 1];
    var cc = [0, 0, -1, 1, -1, 1, -1, 1];

    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            console.log(arr[i][j]);
            if (arr[i][j] == "A") {
                console.log("ttttt");
                n = 1;
                var stack = new Stack();
                dfs(i,j,'A', stack, []); //利用STACK記住來時路
            }
        }
    }

    var no=0;
    while (!res.isEmpty()) {
        no++;
        console.log("result " + no);
        var ele = res.dequeue();
        console.log(ele);
    }

    res.print();
    function dfs(r, c, chr, stack, arr_rec) { //row, col, chr, stack, array_record
        console.log("---");
        arr_rec.push([r, c]);
        console.log(arr_rec);
        //stack.print();
        stack.push([r, c]);
        var has_branch = false; //是否有更深層的分枝
        for (var i = 0; i < 8; i++) {
            var tmp_r = r + rr[i];
            var tmp_c = c + cc[i];

            if (tmp_r >= row || tmp_r < 0 || tmp_c >= col || tmp_c < 0)
                continue;
            var tmp_chr = arr[tmp_r][tmp_c];
           
            //console.log(tmp_chr.charCodeAt(0) + "///" + chr.charCodeAt(0))
            if (tmp_chr.charCodeAt(0) - chr.charCodeAt(0) == 1) {
                console.log(tmp_r + "/" + tmp_c);
                has_branch = true;

                //var stack1 = new Stack();
                //stack1.clear();
                var stack2 = iterationCopy2(stack);

                var tmp_rec = arr_rec.slice();
   
                dfs(tmp_r, tmp_c, tmp_chr, stack2, tmp_rec);
            }
        }
        if (!has_branch) {//此為末端節點。只有末端節點會將資料填入res
            console.log("branch_end");
            stack.print();
            res.enqueue(arr_rec); //res為一個queue
        }
        
    }
}

function iterationCopy2(src) {
    var stack = new Stack();
    var arr_tmp = [];
    while (!src.isEmpty()) {
        var ele = src.pop();
        arr_tmp.push(ele);
    }
    for (var i = arr_tmp.length-1; i >=0; i--) {
        src.push(arr_tmp[i]);
        stack.push(arr_tmp[i]);
    }
    return stack;
}

function iterationCopy(src) {
    var target = {};
    for (let prop in src) {
        if (src.hasOwnProperty(prop)) {
            target[prop] = src[prop];
        }
    }
    return target;
}


var test =[
    ['A', 'B', 'E'],
    ['C', 'F', 'G'],
    ['B', 'D', 'E'],
    ['A', 'B', 'C']
];

abcpath(test);
