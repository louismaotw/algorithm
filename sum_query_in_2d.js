/*
quote form Tushar Roy.
to pick 1 subset at a time and then go through every vertex in the graph except the start vertex and the vertex in the subset. 
Try to find what is the min cost to reach that vertex from start vertex and going through all the vertices in the subset. 
µù¡G

*/

var Stack = require("./stack.js");
var stack = new Stack();

function sum_query(arr,a,b,c,d) {
    var T = [];
    for (var i = 0; i <= arr.length; i++) {
        T[i] = [];
        for (var j = 0; j <= arr[0].length; j++) {
            if (i == 0) {
                T[i][j] = 0;
                continue;
            }
            else if (j == 0) {
                T[i][j] = 0;
                continue;
            }
            else {
                T[i][j] = T[i - 1][j] + T[i][j - 1] - T[i - 1][j - 1] + arr[i - 1][j - 1];
            }
        }
    }
    console.log(T);
    
    var r1 = a + 1, c1 = b + 1, r2 = c + 1, c2 = d + 1;
    var sum = T[r2][c2] - T[r1 - 1][c2] - T[r2][c1 - 1] + T[r1 - 1][c1 - 1];
    console.log(sum);
    
}

var test = [[2, 0, -3, 4],
            [6, 3, 2, -1],
            [5, 4, 7, 3],
            [2,-6,8,1]
]

sum_query(test, 1,1,3,2);