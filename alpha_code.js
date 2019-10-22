
var Dict = require("./Dictionaries.js");
var dict = new Dict();
function alphacode(num) {
    alpha_set();
    //console.log(dict.get("2"));
    var src = num + "";
    console.log(src);
    var arr = [];
    for (var i=0; i < src.length; i++) {
        arr.push(src.charAt(i));
        console.log(arr[i]);
    }
    var result = [];
    result[0] = [];
    result[0].push([arr[0]]);
    console.log(result[0]);
    console.log("-----------------");
    for (var i = 1; i < arr.length; i++) {
        result[i] = [];
        console.log("aaaaaaa" + i);
        for (var j = 0; j < result[i - 1].length; j++) {
            var prev=result[i - 1][j].slice();
            prev.push(arr[i]);
            result[i].push(prev);            
        }
        console.log(result[i]);

        console.log("bbbbbbb" + i);
        if (arr[i - 1] != "0") {        
            var prev2, t;
            if (i > 1) {
                for (var j = 0; j < result[i - 2].length; j++) {
                    prev2 = result[i - 2][j].slice();
                    var t;
                    if (i > 1) {
                        t = arr[i - 1] + arr[i];
                    }
                    if (Number(t) < 27) {
                        prev2.push(t);
                        result[i].push(prev2);
                    }
                   
                }
            }
            else {
                t = arr[0] + arr[1];
                prev2 = [];
                prev2.push(t);
                result[i].push(prev2);
            }
            
        }
        console.log(result[i]);
    }
    console.log("result-----------------")
    console.log(result);

    console.log("result 2 -----------------")
    var result_array = result[result.length - 1];
    for (var i = 0; i < result_array.length; i++) {
        var str="";
        for (var j = 0; j < result_array[i].length; j++){
            str += dict.get(result_array[i][j])
        }
        console.log(str);
    }
}

function findMax(a) {
    var max=a[0];
    for (var i = 1; i < a.length; i++) {
        if (a[i] > max)
            max = a[i];
    }
    return max;
}

function alpha_set() {
    dict.set("1", "A");
    dict.set("2", "B");
    dict.set("3", "C");
    dict.set("4", "D");
    dict.set("5", "E");
    dict.set("6", "F");
    dict.set("7", "G");
    dict.set("8", "H");
    dict.set("9", "I");
    dict.set("10", "J");
    dict.set("11", "K");
    dict.set("12", "L");
    dict.set("13", "M");
    dict.set("14", "N");
    dict.set("15", "O");
    dict.set("16", "P");
    dict.set("17", "Q");
    dict.set("18", "R");
    dict.set("19", "S");
    dict.set("20", "T");
    dict.set("21", "U");
    dict.set("22", "V");
    dict.set("23", "W");
    dict.set("24", "X");
    dict.set("25", "Y");
    dict.set("26", "Z");
}

var test = 25114;
alphacode(test);