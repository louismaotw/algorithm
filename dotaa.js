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
            heroes[i] -= tower;//hero���\�O�n���C
            i--; //���˪�hero���\�O�i���٥i�L�U��
        }
        if (counter == num) {
            console.log("YES");
            break;
        }
    }
    if(counter !=num)
        console.log("NO");
}

var num = 5; //tower���ƶq
var tower = 400; //tower�|�y�����l�`
var heroes = [800, 800, 801, 200, 200, 200];

dota();



