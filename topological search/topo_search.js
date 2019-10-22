// CH 9, 拓撲排序
var Dictionary = require('./Dictionaries');
var Queue = require('./Queue');
var Stack = require('./Stack');
function Graph() {
    var vertices = [];
    var adjList = new Dictionary();
    this.addVertex = function (v) {
        vertices.push(v);
        adjList.set(v, []);
    };

    this.addEdge = function (v, w) {
        adjList.get(v).push(w);
        //adjList.get(w).push(v); // 只設為單向。
    };

    this.toString = function () {
        var s = "";
        for (var i = 0; i < vertices.length; i++) {
            s += vertices[i] + '->';
            var neighbors = adjList.get(vertices[i]);
            for (var j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    };

    var initializeColor = function () {
        var color = [];
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }
        return color;
    };

    this.bfs = function (v, cb) {
        var color = initializeColor(),
            queue = new Queue(),
            d = [],
            pred = [];
        queue.enqueue(v);

        for (var i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }

        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[u] = 'grey';
            for (var i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }
        return {
            distances: d,
            predecessors:pred
        };
    };

    var time = 0;

    this.dfs = function () {
        var color = initializeColor(),
            d = [],
            f = [],
            p = [];
        time = 0;
        for (var i = 0; i < vertices.length; i++) {
            f[vertices[i]] = 0;
            d[vertices[i]] = 0;
            p[vertices[i]] = null;
        }


        for (var i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                dfsVisit(vertices[i], color, d,f,p);
            }
        }
        while (!res_stack.isEmpty()) {
            if (str == "")
                str += res_stack.peek();
            else
                str += ("-" + res_stack.peek());
            res_stack.pop();
        }
        console.log(str);
        return {
            discovery: d,
            finished: f,
            predecessors: p
        };
    };

    var res_stack = new Stack();
    var str = "";

    var dfsVisit = function (u, color, d, f, p) {
        console.log('discovered ' + u);
        color[u] = 'grey';
        d[u] = ++time;
        var neighbors = adjList.get(u);
        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === 'white') {
                p[w] = u;
                dfsVisit(w, color, d, f, p);
            }
        }
        color[u] = 'black';
        f[u] = ++time;
        console.log('explored ' + u);
        res_stack.push(u);
    };

}

var graph = new Graph();
var myVertices = ['E', 'B', 'A', 'C', 'D', 'F', 'G', 'H'];
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}

//graph.addEdge('A', 'C');
//graph.addEdge('B', 'C');
//graph.addEdge('B', 'D');
//graph.addEdge('C', 'E');
//graph.addEdge('E', 'F');
//graph.addEdge('D', 'F');
//graph.addEdge('F', 'G');

graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('E', 'H');
graph.addEdge('E', 'F');
graph.addEdge('D', 'F');
graph.addEdge('F', 'G');


console.log(graph.toString());

var shortestPathA = graph.bfs(myVertices[0]);
console.log(shortestPathA);

var fromVertex = myVertices[0];
for(var i=1; i<myVertices.length; i++){
    var toVertex=myVertices[i],
        path = new Stack();
    var isol=false;
    for (var v = toVertex; (v !== fromVertex) && (v != null) ; v = shortestPathA.predecessors[v]) {
        path.push(v);
        if (shortestPathA.predecessors[v] === null) {
            isol = true;
        }
        //console.log(isol);
    }
    path.push(fromVertex);
    if (isol === false) {
        var s = path.pop();
        while (!path.isEmpty()) {
            s += ' - ' + path.pop();
        }
    }
    else {
        var s = path.pop();
        s += ' x ' + path.pop();
    }
    console.log(s);
    
}

function printNode(value) {
    console.log('Visited vertex: ' + value);
}

console.log("----DFS-----------");
console.log(graph.dfs());