/*SPOJ: NAKANJ, minimum knight moves
Problem: 

Algorithm:BFS 廣度優先

*/

var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var cache = {};

function node(row, col) {
    this.r=row;
    this.c=col;
}

function nakanj(start, end) {
    var queue = new Queue();
    var row = start[0];
    var col = start[1];
    var color = [];//在外部設立三個陣列
    var depth = [];
    var prev = [];
    var res = [];
    for (var i = 0; i < 8; i++) {
        color[i] = [];
        depth[i] = [];
        prev[i] = [];
        for (var j = 0; j < 8; j++) {
            color[i][j] = 'white';
            depth[i][j] = -1;
            prev[i][j] = null;
        }
    }
    var temp = new node(row, col, 0, null);
    color[row][col] = 'grey';
    depth[row][col] = 0;
    queue.enqueue(temp);
    while (!queue.isEmpty()) {
        var k = queue.dequeue();
        var rr = [-1, 1, -1, 1, -2, -2, 2, 2];
        var cc = [-2, -2, 2, 2, -1, 1, -1, 1];
        for (var i = 0; i < 8; i++) {
            var trow = k.r + rr[i];
            var tcol = k.c + cc[i];
            //console.log(trow + "---" + tcol);
            if (trow >= 8 || trow < 0 || tcol >= 8 || tcol < 0 || color[trow][tcol] != 'white')
                continue;
            //console.log("ttt");
            var temp = new node(trow, tcol);
            color[trow][tcol] = 'grey';//此格已發現(discovered)
            depth[trow][tcol] = depth[k.r][k.c]+1;
            prev[trow][tcol] = [k.r, k.c];
            queue.enqueue(temp);//放入佇列中
        }
        color[k.r][k.c] = 'black'; //此格已探索(explored)
    }
    console.log(depth); //
    //console.log(prev);
    var prev_t = prev[end[0]][end[1]];
    res.push(prev_t);
    while (prev_t != null) {
        prev_t = prev[prev_t[0]][prev_t[1]];
        if(prev_t != null)
            res.unshift(prev_t);
    }
    res.push(end);
    console.log(res);

    var res_pic=[];
    for (var i = 0; i < 8; i++) {
        res_pic[i]=[];
        for (var j = 0; j < 8; j++) {
            res_pic[i][j] = "x";
        }
    }

    for (var i = 0; i < res.length; i++) {
        res_pic[res[i][0]][res[i][1]] = i;
    }
    console.log(res_pic);
}

var start = [7,0];
var end = [0, 7];

//console.log(test);
nakanj(start, end);

