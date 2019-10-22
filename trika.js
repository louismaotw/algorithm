//Problem: SPOJ TRIKA, training for final
function trika(arr, x, y) { //x,y為起點，1-based，配合題目的安排，x為row, y為col上的起點位置。
    var row = arr.length;
    var col = arr[0].length;
    console.log("row/col: " + row + ":" + col);
    var DP = [];
    var prev = [];
    for (var i = 0; i < row; i++) {
        DP[i] = [];
        prev[i]=[];
    }
    DP[x - 1][y - 1] = arr[x - 1][y - 1];
    //prev[x - 1][y - 1] = -1;
    
    //calculation for row x (陣列上的座標為x-1)，橫的
    for (var i = y; i < col; i++) {
        DP[x - 1][i] = DP[x - 1][i - 1] - arr[x - 1][i];
        prev[x - 1][i] = [x - 1,i - 1];
        
    }
    //calculation for col y (陣列上的座標為y-1), 直的
    for (var i = x; i < row; i++) {
        DP[i][y - 1] = DP[i - 1][y - 1] - arr[i][y - 1];
        prev[i][y - 1] = [i - 1, y - 1];

    }
    //calculating for remaining grids
    for (var i = x; i < row; i++) {
        for (var j = y; j < col; j++) {
            DP[i][j] = Math.max(DP[i - 1][j], DP[i][j - 1]) - arr[i][j];
            if (DP[i - 1][j] >= DP[i][j - 1]) {
                prev[i][j] = [i - 1, j];
            }
            else
                prev[i][j]=[i, j-1]
        }
    }
    console.log("prev:");
    console.log(prev);
    var res = [];
    var tmp = arr[row - 1][col - 1];
    res.unshift(tmp);
    var tmp_pre=prev[row-1][col-1];  //傳回一個陣列
    while (tmp_pre != null) {
        //console.log(tmp_pre);
        var r = tmp_pre[0];
        var c = tmp_pre[1];
        res.unshift(arr[r][c]);
        tmp_pre = prev[r][c];
    }
    console.log("source tracking:");
    console.log(res);
    return DP[row - 1][col - 1];
}


var test = [
    [100, 55, 10, 2],
    [20, 10, 90, 1],
    [60, 20, 22, 4],
    [1,30,70,5]
];
console.log("TEST:");
console.log(test);
console.log(trika(test, 1, 1)); // 起點為1-based. //x,y為起點，1-based，配合題目的安排，x為row, y為col上的起點位置。

