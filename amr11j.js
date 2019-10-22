/*SPOJ: AMR11J, goblin wars
Problem: 
While traversing there can be two cases that arrise:

1. The block we arrive is not visited earlier,
    in that case we modify our original input array with the BFS calling alphabet and update visited[i][j] to the depth of the BFS traversal.
2. The block we arrive is already visited.
    Here two sub-cases arise:
    a. The visited[i][j] =depth + 1 for calling alphabet but, the character at arr[i][j] is not equal to the calling alphabet,
    Hence, two civilizations simultaneously attack, hence ,we update  arr[i][j]=’*’.
    b. For all other cases, we simply do nothing.

Algorithm:
1. Initialise visited[][] and arr[][] matrices.
2. Apply BFS for all alphabets with depth=0, using structure and queue.
3. Update visited[][] and arr[][] using the two conditions mentioned above(before algorithm).
4. Print the final state of arr[][].

*/

var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var Graph = require("./Graph.js");
var cache = {};
var node = function (row, col, depth, chr) {
    this.row = row;
    this.col = col;
    this.depth = depth;
    this.chr = chr;
}

//使用BFS/Graph theory
function amr11j(arr) {
    var row = arr.length;
    var col=arr[0].length;
    var visited = []; //用於記錄深度
    for(var i=0; i<row; i++){
        visited[i]=[];
    }

    var graph=new Graph();
    var queue = new Queue();
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            var ele = arr[i][j];
            if (ele == 'a' || ele == 'b' || ele == 'c') {
                var n = new node(i, j, 0, ele); //node(row, col, depth, chr)
                queue.enqueue(n); //將預備要探索的a, b, c(civilization)存入佇列中。
            }
        }
    }

    var rr = [-1, 1, 0, 0];
    var cc = [0, 0, -1, 1];
    while (!queue.isEmpty()) {
        var k = queue.dequeue(); //開始對k進行探索
        if (arr[k.row][k.col] == '*') //因某個block被標註為*是較晚發生的，代表此block的cand已早被送入佇列中，故此須先檢查有無此種情形發生。
            continue;
        for (var i = 0; i < 4; i++) {
            var tmp_r = k.row + rr[i];
            var tmp_c = k.col + cc[i];
            if (tmp_r >= row || tmp_r < 0 || tmp_c >= col || tmp_c < 0) //檢查有無超過盤面限制
                continue;
            if (arr[tmp_r][tmp_c] == '#' || arr[tmp_r][tmp_c] == '*') //避開#(uninhabitable)和*(fighting)的block
                continue;
            if (arr[tmp_r][tmp_c] == '.') { //未被佔領的block
                var cand = new node(tmp_r, tmp_c, k.depth + 1, k.chr); //candidate
                queue.enqueue(cand);
                visited[tmp_r][tmp_c] = cand.depth;
                arr[tmp_r][tmp_c] = k.chr;
            }
            else if (visited[tmp_r][tmp_c] == k.depth + 1 && arr[tmp_r][tmp_c] != k.chr) //如果這個待選block已被他人佔領，且depth和目前要下的depth相同。
                arr[tmp_r][tmp_c] = '*'; //fighting
        }
    }
    console.log(arr);
}

var test = [['.', '.', '.', '.', '.'],['.', '#', '.', '#', '.'], ['a', '.', '.', '.', 'b']];

amr11j(test);


var test2 = [['#', 'c', '#'], ['.',  '.', '.'], ['a', '.', 'b']];

amr11j(test2);
