/*
SPOJ

*/
//var stack = require("./Stack.js");
//var s = new stack();
function sumitr(src) {
    var len = src.length;
    var b_arr = [];
    
    var len_base = src[len - 1].length;
    for (var i = 0; i < len_base; i++) {
        b_arr[i] = src[len - 1][i];
    }

    for (var i = len - 2; i >= 0; i--) {
        var n_arr=[];
        for (var j = 0; j < src[i].length; j++) {
            if (b_arr[j] >= b_arr[j + 1])
                n_arr[j] = b_arr[j]+src[i][j];
            else
                n_arr[j] = b_arr[j + 1]+src[i][j];
                
        }
        b_arr = n_arr.slice();
    }
    console.log(b_arr[0]);
}


var source = [  [1],
                [1,2],
                [4,1,2],
                [2,3,1,1]
];

var source2 = [[1],
                [2,1],
                [1, 2,3]
];

sumitr(source);
sumitr(source2);



