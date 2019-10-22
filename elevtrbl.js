/*SPOJ: ELEVTRBL,Elevator Trouble
Problem: Given an array, and a number K, we need to print the maximum value in all the sub-arrays of size K.

Algorithm:

*/
//¶ñªí
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var cache = {};

//¨Ï¥ÎBFS/Graph theory
function elevtrbl(f, s, g, u, d) {
    var Q = new Queue();
    var visited = [];
    if (s == g)
        return (0);
    else {
        visited[s] = {};
        visited[s].cnt = 1;
        visited[s].from = 0;
        Q.enqueue(s);
        while (!Q.isEmpty()) {
            var k = Q.front();
            Q.dequeue();
            if ((k + u) <= f && visited[k + u] == null) {
                visited[k + u] = {};
                visited[k + u].cnt = visited[k].cnt + 1;
                visited[k + u].from = k;
                Q.enqueue(k + u);
            }
            if ((k - d) >= 1 && visited[k - d] == null) {
                visited[k - d] = {};
                visited[k - d].cnt = visited[k].cnt + 1;
                visited[k - d].from = k;
                Q.enqueue(k - d);
            }
        }
    }
    return visited;

}


var final = elevtrbl(100, 10, 50, 7, 2);

for (var i = 1; i < final.length; i++) {
    console.log((i) + " press: " + final[i].cnt + " /from: " + final[i].from);
}

