//SPOJ: FARIDA, Princess Farida

/*Algorithm:

*/
//填表
var Stack = require("./Stack.js");
var stack = new Stack();
var Queue = require("./Queue.js");
var i = 0;
var cache = {};

function farida(arr) { //n:year, k:position, 0-base
    var best = [];
    var len = arr.length;
    var next=[];
    for (var i = 0; i < len + 2; i++) {
        best[i]=0;
    }

    for (var i = len - 1; i >= 0; i--) {
        var ele1, ele2, ele=[];//ele1記錄本位置的值有沒有加入，ele2記錄下一個位置。
        best[i] = Math.max(arr[i] + best[i + 2], best[i + 1]);
        if (i == len - 1) {
            //next[i] = null;
            ele1 = true;
            ele2 = null;
            ele.push(ele1);
            ele.push(ele2);
            next[i] = ele;
            continue;
        }
        if (arr[i] + best[i + 2] > best[i + 1]) {
            //next[i] = i + 2;
            ele1 = true;
            ele2 = i + 2;
            ele.push(ele1);
            ele.push(ele2);
            next[i] = ele;
        }
        else {
            //next[i] = i + 1;
            ele1 = false;
            ele2 = i + 1;
            ele.push(ele1);
            ele.push(ele2);
            next[i] = ele;
        }          
    }
    console.log(arr);
    console.log("dyp: ");
    console.log(next);
    show_result_seq(arr, next);
    return best[0];
}

function show_result_seq(arr, dyp) {
    var res = [];
    var len = dyp.length;
    var ctr; //control

    ctr = dyp[0]; 
    if(ctr[0]==true){
        res.push(arr[0]);
    }
    var pos=ctr[1];  
    while (pos != null) {
        ctr = dyp[pos];//下一個
        if (ctr[0] == true) {
            res.push(arr[pos]);
        }
        pos = ctr[1];
    }
    console.log(res);
}


//var test = [4, 1, 1, 9];
//var test = [1, 2, 3, 4, 5];
var test = [1, 26, 3, 44, 56, 16, 7,3, 8, 9, 310];
//var test = [10];

var final;
try{
    final=farida(test);
}
catch (ex) {
    console.log('i= ' + i + " error:" + ex);
}
console.log("FINAL: " + final);
