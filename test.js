// JavaScript source code
function Test(a) {
    var x = a;
    x[0] = 1;
    return x;
}

function Test2(a) {
    var x=a.slice(); //slice() return value: a new array, containing the selected elements.
    x[0] = 1;
    return x;
}

var b = [5, 10, 25];
console.log(b);
var y = Test(b);
console.log(y);
console.log(b);

console.log("TEST2");
var c = [5, 10, 25];
console.log(c);
var z = Test2(c);
console.log(z);
console.log(c);

console.log("TEST3");
//var t = [10, 11, 12];
function Test3() {
    var t = [1, 2, 3];
    return t;
}

var e = Test3();
e[0] = 7;
console.log(e);
console.log(Test3()); //陣列t未受改變
