/*SPOJ: BUGLIFE, a bug's life
Problem: Given a list of bug interactions,
decide whether the experiment supports his assumption of two genders with no homosexual bugs
or if it contains some bug interactions that falsify it.

Algorithm:

*/

var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var Graph = require("./Graph.js");
var cache = {};

//使用BFS/Graph theory
function buglife() {
    var graph = new Graph();
    var queue = new Queue();
    var myVertices = ['1', '2', '3', '4'];
    for (var i = 0; i < myVertices.length; i++) {
        graph.addVertex(myVertices[i]);
    }
    graph.addEdge('1', '3');
    graph.addEdge('4', '2');
    graph.addEdge('1', '4');
    graph.addEdge('3', '4');

    var color = graph.initializeColor(); //傳回陣列，將所有的VERTEX全部先設為white。
    color["1"] = 1; //兩種GENDER，1和0。
    queue.enqueue("1");
    var flag = 0;
    while (!queue.isEmpty()) {
        var u = queue.dequeue();
        var neighbors = graph.getAdjList(u); //傳回陣列，傳回該VERTEX的所有NBR。
        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === 'white') { //尚未被發現
                color[w] = ! color[u]; //將其COLOR設為和U的相反。
                queue.enqueue(w);
            }
            else if (color[w] === color[u]) {
                flag = 1;//homo found
                break;
            }
        }
        //color[u] = 'black'; //已探索，代表已將該頂點(u)的相關白色NBR加入佇列中。
    }
    if (flag == 1) {
        console.log("homo found");
    }
    else
        console.log("normal");

}


buglife();


