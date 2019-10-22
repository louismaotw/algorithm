/*
SPOJ

*/
//var stack = require("./Stack.js");
//var s = new stack();
function dota() {
    var counter = 0;
    for (var i = 0; i < heroes.length; i++) {
        if (heroes[i] > tower) {
            counter++;
            heroes[i] -= tower;//hero的功力要降低
            i--; //受傷的hero的功力可能還可過下關
        }
        if (counter == num) {
            console.log("YES");
            break;
        }
    }
    if(counter !=num)
        console.log("NO");
}

var num = 5; //tower的數量
var tower = 400; //tower會造成的損害
var heroes = [800, 800, 801, 200, 200, 200];

dota();



