/*
quote form Tushar Roy.
to pick 1 subset at a time and then go through every vertex in the graph except the start vertex and the vertex in the subset. 
Try to find what is the min cost to reach that vertex from start vertex and going through all the vertices in the subset. 
註：

*/

var Stack = require("./stack.js");
var stack = new Stack();

function travelling_salesman(arr){
    var len = arr.length;
    var org = [];//origin
    var sub = [];//subset
    var res = [];//result
    var org_max;
    //sub.push([]);
    for (var i = 0; i < len; i++) {
        //var s = [i];
        org.push(i);
    }
    org_max=len-1;

    for (var i = 0; i < org.length; i++) {
        if (sub.indexOf(org[i]) == -1) {
            var t = [];
            t.push(org[i]);
            sub.push(t);
        }       
    }

    res=res.concat(sub);

    recur(sub);

    remove_0(res);

    var cal_reco = []; //calculate record

    function reco(x, y) {
        this.to = x; //目標vertex
        this.via = y; //經由哪一個subset
        this.dist = Infinity;
        this.from = null; //目標vertex的前一個vertex
    }

    function createRoute() { //反向推導出完整路徑
        var res_arr = [0];
        
        var len = cal_reco.length;
        var i = len-1;
        var a = cal_reco[i];
        res_arr.unshift(a.from);
        var prev=a.from;
        var subset = a.via.slice(); //複製一個"a.via"陣列
        var idx = subset.indexOf(prev);
        subset.splice(idx, 1);
        i--;
        while (a.from != 0) {
            a = cal_reco[i];
            if(prev==a.to && chk_same_arr(a.via, subset)){
                res_arr.unshift(a.from);
                prev = a.from;
                subset = a.via.slice(); //複製一個"a.via"陣列
                idx = subset.indexOf(prev);
                subset.splice(idx, 1);
            }
            i--;          
        }
        res_arr.unshift(0);
        console.log(res_arr);
    }

    function calculate() {
        for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < org.length; j++) {              
                if( (res[i].length < org.length-1 && org[j] != 0 && res[i].indexOf(org[j]) == -1) ||
                   (res[i].length == org.length-1  && org[j] == 0 && res[i].indexOf(org[j]) == -1))
                //if(true)
                {
                    if (res[i].length == 0) {
                        var t = new reco(j, []);
                        t.dist = arr[0][org[j]];
                        t.from = 0;
                        cal_reco.push(t);
                    }
                    else {
                        var minDist = Infinity;
                        var minReco = new reco();
                        for (var k = 0; k < res[i].length; k++) { //對一個subset,如[1,2]，中的每一個元素進行操作
                            var x = res[i].slice();
                            var a = x[k];
                            x.splice(k, 1); //在x陣列的k位置移除一個元素。this method changes the original array and returns a new Array, containing the removed items (if any)
                            var b = x;
                            var dist = chk_cal_reco(org[j], a, b); //傳遞的參數如，(3,1,[2])，頂點1>頂點3的距離為查表，頂點"0"經由subset[2]到頂點1的距離則參考cal_reco陣列。
                            //console.log(dist + " !! " + minDist);
                            if (dist < minDist) {
                                minDist = dist;
                                minReco.to = org[j];
                                minReco.via = res[i];
                                minReco.dist = dist;
                                minReco.from = a;
                            }                            
                        }
                        cal_reco.push(minReco);
                    }
                }               
            }
        }

        //計算至頂點"a"，從頂點0，經由subset b，的距離
        function chk_cal_reco(t, a, b) {//target vertex, from vertex, via vertex array)
            var dist=arr[a][t]; //直接查表
            for (var i = 0; i < cal_reco.length; i++) {//檢查"cal_reco"陣列中遍歷查詢每一個物件元素
                var r = (cal_reco[i]);
                if(r.to==a && chk_same_arr(r.via, b)){
                    dist += r.dist;
                    return dist;
                }
            }

            
        }

    }

    //檢查x,y這兩個陣列是否相同
    function chk_same_arr(x, y) {
        if (x.length != y.length)
            return false;
        for (var i = 0; i < x.length; i++) {
            if (y.indexOf(x[i]) == -1)
                return false;
        }
        return true;
    }

    function remove_0(res) {
        var i = 0;
        while (res[i] != undefined) {
            if (res[i].indexOf(0) != -1) {
                res.splice(i, 1);
            }
            else
                i += 1;
        }
        res.unshift([]);//在陣列的最左邊塞入一個空陣列
    }


    function recur(arr) { //傳入的arr像是[[0,1],[0,2]...[0,4]]
        var len2 = arr[0].length; //arr每個陣列元素的長度
        if (len2 == len)
            return;
        var new_sub = [];
        for (var i = 0; i < arr.length; i++) {         
            var chk = arr[i][len2 - 1];//arr的第i個陣列元素的最後一個值
            var n = chk + 1;          
            while (n <= org_max) {
                var new_item = arr[i].concat([n]);
                new_sub.push(new_item);
                n += 1;
            }
        }
        res = res.concat(new_sub);
        recur(new_sub);

    }

    


    console.log(org);
    //console.log(sub);
    console.log(res);
    calculate();
    console.log(cal_reco);
    createRoute();
}

var test=[
    [0,1,15,6],
    [2,0,7,3],
    [9,6,0,12],
    [10,4,8,0]
];

//var test2 = [0,1, 2, 3, 4];

travelling_salesman(test);



