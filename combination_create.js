/*
 註：

*/

var Stack = require("./stack.js");
var stack = new Stack();

function combination_create(arr){
    var len = arr.length;
    var org = [];//origin
    var sub = [];//subset
    var res = [];//result
    var org_max;
    //sub.push([]);
    for (var i = 0; i < len; i++) {
        //var s = [i];
        org.push(i);
    }
    org_max=len-1;

    for (var i = 0; i < org.length; i++) {
        if (sub.indexOf(org[i]) == -1) {
            var t = [];
            t.push(org[i]);
            sub.push(t);
        }       
    }

    res=res.concat(sub);

    rec(sub);

    function rec(arr) { //傳入的arr像是[[0,1],[0,2]...[0,4]]
        var len2 = arr[0].length; //arr每個陣列元素的長度
        if (len2 == len)
            return;
        var new_sub = [];
        for (var i = 0; i < arr.length; i++) {         
            var chk = arr[i][len2 - 1];//arr的第i個陣列元素的最後一個值
            var n = chk + 1;          
            while (n <= org_max) {
                var new_item = arr[i].concat([n]);
                new_sub.push(new_item);
                n += 1;
            }
        }
        res = res.concat(new_sub);
        rec(new_sub);

    }

    console.log(sub);
    console.log(res);
}

var test=[
    [0,1,15,6],
    [2,0,7,3],
    [9,6,0,12],
    [10,4,8,0]
];

var test2 = [1, 2, 3, 4, 5];

combination_create(test2);


