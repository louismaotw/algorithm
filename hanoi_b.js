//Honai Tower

var Stack = require("./Stack.js");

Stack.prototype.str = function () {
    if(this.isEmpty()){
        return "x";
    }
    else {
        return (this.arr.toString());
    }
}

function Hanoi(n, from, to, helper) {
    if (n > 0) {
        Hanoi(n - 1, from, helper, to); //將最底層(不含)以上的盤，移到helper陣列，這時的to陣列用於做暫存(helper功能)。
        to.push(from.pop()); //移開上層的盤子後，將最底層的盤移到to陣列上
        console.log("----");
        compare_plate();
        console.log("Source: " + source.str());
        console.log("Dest: " + dest.str());
        console.log("Helper: " + myhelper.str());
        Hanoi(n - 1, helper, to, from); //將暫時移到helper陣列的盤，移回from陣列，這時的from陣列用於做暫存(helper功能)。
    }
}

function compare_plate() {
    var from, to;
    if (old_count[0] > source.size()) {     
        from = "source";
    }
    else if (old_count[0] < source.size()) {
        to = "source";
    }

    if (old_count[1] > dest.size()) {
        from = "dest";
    }
    else if (old_count[1] < dest.size()) {
        to = "dest";
    }

    if (old_count[2] > myhelper.size()) {
        from = "helper";
    }
    else if (old_count[2] < myhelper.size()) {
        to = "helper";
    }

    old_count = [source.size(), dest.size(), myhelper.size()];

    console.log(from + " => " + to);
}

var source = new Stack();
var m = 10;
for (var i = m; i >=1; i--) {
    source.push(i);
}

var dest = new Stack();
var myhelper = new Stack();
var old_count = [m, 0, 0]; //old plate count
console.log(old_count);

Hanoi(m, source, dest, myhelper);