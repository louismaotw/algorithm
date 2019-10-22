//SPOJ Hotels

//
function hotels(m, arr) {
    var max_sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var temp_sum = arr[i];
        for (var j = i+1; j < arr.length; j++) {
            if (temp_sum + arr[j] <= m) {
                temp_sum += arr[j];
                //console.log(arr[i] + "/" + temp_sum);
            }
            else
                break;
                
        }
        if (temp_sum > max_sum)
            max_sum = temp_sum;
    }
    return max_sum;
}

//相關問題，maximum sum subarray problem (Largest sum contiguous subarray problem)
function mss(arr) {//arr元素有正負數的可能。
    var max_sum = 0;
    var res_final;
    for (var i = 0; i < arr.length; i++) {
        var temp_sum = arr[i];
        var temp_max = arr[i];
        var res = [];
        res.push(i);
        for (var j = i + 1; j < arr.length; j++) {
            temp_sum += arr[j];
            if (temp_sum > temp_max) {
                temp_max = temp_sum;
                res.push(j);
            }
            //console.log(arr[i] + "/" + temp_sum);
            
        }
        if (temp_max > max_sum) {
            max_sum = temp_max;
            res_final = res.slice();
        }
            
    }
    console.log(res_final);
    return max_sum;
}

//max sub sequence sum till ith element. 使用Dynamic programming的作法。
function mss2(arr) {
    var MaxSS = [];
    var from = [];
    MaxSS[0] = arr[0];
    from[0] = 0;
    for (var i = 1; i < arr.length; i++) {
        MaxSS[i] = Math.max(MaxSS[i - 1] + arr[i], arr[i]);
        if (MaxSS[i - 1] + arr[i] > arr[i]) {
            from[i] = (i - 1);
        }
        else
            from[i] = i;
    }
    console.log(MaxSS);
    console.log(from);
    //var mss_res = Math.max.apply(null, MaxSS);
    var idx=0;
    var tmp=MaxSS[0];
    for (var i = 1; i < MaxSS.length; i++) {
        if (MaxSS[i] > tmp) {
            idx = i;
            tmp = MaxSS[i];
        }

    }
    console.log(idx + " / " + tmp);
    console.log(from_search(idx));

    function from_search(index){
        var res=[];
        var item = from[index];
        while (true) {
            if (item == index) {
                res.unshift(arr[index]);
                break;
            }
            res.unshift(arr[index]);
            index = item;
            item = from[index];
            
        }
        return res;
    }

}
//var M =9 ;
//var test = [7, 3, 5, 6];
//console.log(hotels(M, test));

//var M = 12;
//var test = [2,1,3,4,5];
//console.log(hotels(M, test));

var M = 100;
var test = [-2, -3, 4, -1, -2, 1, 5, -3]; 
console.log(mss2(test)); //另一個問題
