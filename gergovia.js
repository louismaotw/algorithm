/*
*/
function gergovia(arr){
    var work = 0;
    for (var i = 0; i < arr.length-1; i++) {
        if (arr[i] != 0) {
            var diff = Math.abs(arr[i]);
            work += diff;
            arr[i + 1] = arr[i + 1] + arr[i];
        }                        
    }
    return work;
}

var test = [5, -4, 1, -3, 1];
var test2 = [-1000,-1000,-1000,1000,1000,1000];
console.log(gergovia(test));
console.log(gergovia(test2));


