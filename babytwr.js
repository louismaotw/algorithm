/*Babytwr : Tower of Babylon, also called "Box Stacking"
    Given a sequence,find the longest subsequence such that all the elements in the subsequence are in a sorted order.
/*

*/

//填表
var Stack = require("./Stack.js");
var stack = new Stack();

function babytwr(arr) {
    console.log('****************');
    var test = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            var tmp = [];
            var item = arr[i].slice();
            var a = item.splice(j, 1); //在位置j移除1個元素
            tmp.push(a[0]);
            if (item[0] >= item[1]) {
                tmp.unshift(item[1]);
                tmp.unshift(item[0]);
            }
            else {
                tmp.unshift(item[0]);
                tmp.unshift(item[1]);
            }
            tmp.push(tmp[0] * tmp[1]);
            test.push(tmp);
        }
    }
    console.log(test); //long, width, height, area

    var test2 = test.slice();

    var test3 = [];
    while(test2.length !=0){
        var maxArea = 0;
        var index;
        for (var i = 0; i < test2.length; i++) {
            if (test2[i][3] > maxArea) {
                maxArea = test2[i][3];
                index = i;
            }
        }
        var n = test2.splice(index, 1);
        test3=test3.concat(n);
    }
    console.log(test3);
   
    var Maxht = [];
    var From = [];
    for (var i = 0; i < test3.length; i++) {
        Maxht[i] = test3[i][2];
        From[i] = -1;
    }

    for (var i = 1; i < test3.length; i++) {
        for (var j = 0; j < i; j++) {
            if (test3[i][0] < test3[j][0] && test3[i][1] < test3[j][1]) {
                if (Maxht[i] < Maxht[j] + test3[i][2]) {
                    Maxht[i] = Maxht[j] + test3[i][2];
                    From[i] = j;
                }
            }
        }
    }
    console.log(Maxht);
    console.log(From);

    var max = Maxht[0];
    var chk = 0;
    for (var i = 1; i < Maxht.length; i++) {
        if (Maxht[i] > max) {
            max = Maxht[i];
            chk = i;
        }
    }
    console.log(max);
    var res = [test3[chk]];
    chk = From[chk];
    do{
        res.unshift(test3[chk]);
        chk=From[chk];
    }
    while (chk != -1)

    console.log(res);
}

var input1 = [1, 2, 4];
var input2 = [3, 2, 5];
var test = [input1, input2];
babytwr(test);
