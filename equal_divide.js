
var Dict = require("./Dictionaries.js");
var dict = new Dict();
var run_till, sum;
var result_arr = [];
function equal_divide(num) {
    sum_half =(num + 1) * num / 4;
    run_till = Math.floor(num / 2);
    var item = [];
    for (var i = 0; i <num; i++) {//讀入1~num的資料。
        item.push([i+1]); // 如[[1], [2], [3]]，下一個是〔[1,2], [1,3], [1,4], [1,5], [2,3], [2,4]...]
    }
    console.log(item);

    var first = item.slice();
    console.log(first);
    console.log("sum_half: " + sum_half);
    var n=2;
    combination(item, first, 2);

}

function combination(item, old_target, n) {
    var new_target = [];;
    var new_tar_ele_arr = [];
    var cnt = 0;
    for (i = 0; i < old_target.length; i++) {
        var min = old_target[i][n - 2];
        var tmp_sum;
        for (j = min+1; j <= item.length; j++) {
            new_tar_ele_arr = old_target[i].slice();
            new_tar_ele_arr.push(j);
            new_target.push(new_tar_ele_arr);
            if (cal_sum(new_tar_ele_arr) == sum_half) {
                result_arr.push(new_tar_ele_arr);
            };
            cnt++;
        }  
    }
    console.log("n=" + n + " new target cnt: " + cnt);
    //console.log(new_target);
    n = n + 1;
    if (n <= run_till) {
        var tmp_old=new_target.slice(); 
        combination(item, tmp_old, n);//此處遞歸
    }
}

function cal_sum(arr){
    var s=0;
    for(var i=0; i<arr.length; i++){
        s+=arr[i];
    }
    return s;
}
    

equal_divide(23);//23ok
console.log(result_arr);