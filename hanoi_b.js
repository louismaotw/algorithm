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
        Hanoi(n - 1, from, helper, to); //�N�̩��h(���t)�H�W���L�A����helper�}�C�A�o�ɪ�to�}�C�Ω󰵼Ȧs(helper�\��)�C
        to.push(from.pop()); //���}�W�h���L�l��A�N�̩��h���L����to�}�C�W
        console.log("----");
        compare_plate();
        console.log("Source: " + source.str());
        console.log("Dest: " + dest.str());
        console.log("Helper: " + myhelper.str());
        Hanoi(n - 1, helper, to, from); //�N�Ȯɲ���helper�}�C���L�A���^from�}�C�A�o�ɪ�from�}�C�Ω󰵼Ȧs(helper�\��)�C
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