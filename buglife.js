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

//�ϥ�BFS/Graph theory
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

    var color = graph.initializeColor(); //�Ǧ^�}�C�A�N�Ҧ���VERTEX�������]��white�C
    color["1"] = 1; //���GENDER�A1�M0�C
    queue.enqueue("1");
    var flag = 0;
    while (!queue.isEmpty()) {
        var u = queue.dequeue();
        var neighbors = graph.getAdjList(u); //�Ǧ^�}�C�A�Ǧ^��VERTEX���Ҧ�NBR�C
        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === 'white') { //�|���Q�o�{
                color[w] = ! color[u]; //�N��COLOR�]���MU���ۤϡC
                queue.enqueue(w);
            }
            else if (color[w] === color[u]) {
                flag = 1;//homo found
                break;
            }
        }
        //color[u] = 'black'; //�w�����A�N��w�N�ӳ��I(u)�������զ�NBR�[�J��C���C
    }
    if (flag == 1) {
        console.log("homo found");
    }
    else
        console.log("normal");

}


buglife();


