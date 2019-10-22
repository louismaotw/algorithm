/*SPOJ: BUSYMAN, i am very busy
Problem: 

*/

var Stack = require("./Stack.js");
var Queue = require("./Queue.js");
var Graph = require("./Graph.js");
var Sort = require("./Sort.js");
var cache = {};


function busyman(start, finish) {
    var len = start.length;
    var color = [];
    for (var i = 0; i < len; i++) {
        color[i] = "white";
    }

    var result = [];
    //chk();
    chk2();

    function chk() { //使用遞迴方式
        var fin_shortest = 99999, fin_no = -1;
        var has_candidate = false;
        for (var i = 0; i < len; i++) { 
            if (color[i] == 'white' && finish[i] < fin_shortest) {
                fin_shortest = finish[i];             
                fin_no = i;
                has_candidate = true;
            }
        }

        if (has_candidate == false) //已無activity可選擇了
            return;
        else {
            //console.log(fin_no);
            color[fin_no] = 'black';
            result.push(fin_no);
        }
            
      
        for (var i = 0; i < len; i++) {
            if (color[i] == 'white' && start[i] < fin_shortest) {
                color[i] = 'red'; //start時間小於fin_shortest時間的，就不再列入考慮了。
            }
        }
        chk();
    }

    function chk2() {
        var sort = new Sort();
        sort.clone(finish);
        console.log("after clone");
        console.log(sort.array());
        console.log(sort.pos());

        sort.modifiedBubbleSort();
        console.log("after bubble");
        console.log(sort.array());
        console.log(sort.pos());

        var pos = sort.pos();
        var fin = sort.array();
        var sta = []; //start
        for (var i = 0; i < pos.length; i++) {
            sta[i] = start[pos[i]];
        }
        console.log("star/finish/position");
        console.log(sta);
        console.log(fin);
        console.log(pos);
    }
}

var start =  [7,  0, 4, 8, 4, 5];
var finish = [9, 10, 5, 9, 10, 7];
busyman(start, finish);

//var start = [1,5,7,1];
//var finish = [7,8,8,8];
//busyman(start, finish);

//var start = [3,2,6];
//var finish = [9,8,9];
//busyman(start, finish);

//var start = [4,5,7,8,0,4];
//var finish = [5,7,9,9,10,10];
//busyman(start, finish);
