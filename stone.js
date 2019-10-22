//Philosopher's Stone
//3 1 7 4 2
//2 1 3 1 1
//1 2 2 1 8
//2 2 1 5 3
//2 1 4 4 4
//5 2 7 5 1

var Stack = require("./Stack.js");
function take_stones() {
    var m = 6;
    var n = 5;
    for (i = m - 2; i >= 0; i--) {
        for (j = 0; j <= n - 1; j++) {
            var cand=[];
            if (Arr[i + 1][j - 1] != undefined) cand.push(Arr[i + 1][j - 1]);
            if (Arr[i + 1][j] != undefined) cand.push(Arr[i + 1][j]);
            if (Arr[i + 1][j + 1] != undefined) cand.push(Arr[i + 1][j + 1]);
            //console.log(cand + " /max: " + findMax(cand));
            Arr[i][j] += findMax(cand);
            
        }
        console.log(Arr[i]);
        console.log("---");
    }
    console.log(findMax(Arr[0]));
}

function findMax(a) {
    var max=a[0];
    for (var i = 1; i < a.length; i++) {
        if (a[i] > max)
            max = a[i];
    }
    return max;
}

var Arr=[];
Arr[0] = [];
Arr[0][0] = 3;
Arr[0][1] = 1;
Arr[0][2] = 7;
Arr[0][3] = 4;
Arr[0][4] = 2;

Arr[1] = [];
Arr[1][0] = 2;
Arr[1][1] = 1;
Arr[1][2] = 3;
Arr[1][3] = 1;
Arr[1][4] = 1;

Arr[2] = [];
Arr[2][0] = 1;
Arr[2][1] = 2;
Arr[2][2] = 2;
Arr[2][3] = 1;
Arr[2][4] = 8;

Arr[3] = [];
Arr[3][0] = 2;
Arr[3][1] = 2;
Arr[3][2] = 1;
Arr[3][3] = 5;
Arr[3][4] = 3;

Arr[4] = [];
Arr[4][0] = 2;
Arr[4][1] = 1;
Arr[4][2] = 4;
Arr[4][3] = 4;
Arr[4][4] = 4;

Arr[5] = [];
Arr[5][0] = 5;
Arr[5][1] = 2;
Arr[5][2] = 7;
Arr[5][3] = 5;
Arr[5][4] = 1;

take_stones();