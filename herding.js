/*SPOJ: HERDING, herding 把貓趕到一起
Problem: 


Algorithm:

*/

var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var Graph = require("./Graph.js");
var cache = {};

var queue = new Queue();

var node = function (row, col, chr, color) {
    this.row = row;
    this.col = col;
    this.chr = chr;
    this.color = color;
}


function herding(arr) {
    var row = arr.length;
    var col = arr[0].length;
    var color = [];
    var dir = []; //direction
    var pred = [];
    var orig_row, orig_col, Circle_Check_Comp = false;
    var trap = 0;
    console.log(arr);
    console.log(row + '$$' + col);

    for (var i = 0; i < row; i++) {
        color[i] = [];
        dir[i] = [];
        for (var j = 0; j < col; j++) {
            var n = new node(i, j, arr[i][j], 'white');
            queue.enqueue(n);
            color[i][j] = "white";
            dir[i][j] = arr[i][j];
        }
    }

    while(!queue.isEmpty()){
        var k = queue.dequeue();
        if (color[k.row][k.col] != 'white') //若此位置不是white
            continue;
        orig_row = k.row;
        orig_col = k.col;
        Circle_Check_Comp = false;
        dfs(k.row, k.col);       
    }
    console.log("trap: " + trap);

    function dfs(r, c) {
        if (Circle_Check_Comp == true)
            return;
        console.log(r + " / " + c);
        var tmp_r, tmp_c; //下一個位置
        switch (dir[r][c]) {
            case 'N':
                tmp_r = r - 1;
                tmp_c = c;
                break;
            case 'S':
                tmp_r = r + 1;
                tmp_c = c;
                break;
            case 'E':
                tmp_r = r;
                tmp_c = c + 1;
                break;
            case 'W':
                tmp_r = r;
                tmp_c = c - 1;
                break;
            default:
                console.log("case fault!")
        }
        if (tmp_r >= row || tmp_r < 0 || tmp_c >= col || tmp_c < 0) {
            console.log("exit boundary !"); //跑出棋盤邊界，題目設計不當。
            Circle_Check_Comp = true;
            return;
        }

        color[r][c] = 'black'; 

        if (tmp_r == orig_row && tmp_c == orig_col) {//下一個BLOCK和初始BLOCK相同，此環路徑探索完畢。
            Circle_Check_Comp = true;
            trap++;
            return;
        }

        dfs(tmp_r, tmp_c);
    }
}


var test =
    [['S','W', 'W', 'W'],
    [ 'S','E', 'W', 'N'],
    [ 'E','E', 'E', 'N']];

herding(test);
