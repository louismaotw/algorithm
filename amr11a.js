/*Problem: SPOJ AMR11A, magic grid
here we want that harry shouldnt die in the way, so we start from the destination and keep traversing the path backwards,
and calculating the minimum required power, if the power falls below or equal to zero, we reset the power.
Note that the reverse traversal means traversal along opposite direction of what is mentioned in the problem.

This problem is a slight variation of Minimum Cost Path Problem.

在Minimum Cost Path中，是從最左上開始，到最右下，用dynamic programming找出最小值。
We can reach (i,j) from (i-1,j) or (i,j-1), thus, the total cost to reach is 
the sum of minimum of the two cost plus the value written inside the cost[i][j].

在本題中，是以相反的方向進行，先令最右下角值為1(在每個GRID中的最小必需值)，再回推出每個GRID所需的最小值。
以陣列中間的(1,2)位置為例，在此位置所需的strength為讓Harry在(1,3)或(2,2)夠用，我們取這兩個GRID的最小DP值(3)，並滿足它，
此時在GRID(1,2)出去時必須是3，此時因GRID(1,2)的值是0，所以(1,2)等於3。
*/


function amr11a(arr) { //
    var row = arr.length;
    var col = arr[0].length;
    console.log("row/col: " + row + ":" + col);
    var DP = [];
    var prev = [];
    for (var i = 0; i < row; i++) {
        DP[i] = [];
        prev[i]=[];
    }

    DP[row-1][col-1] = 1; //在最右下角的位置，必須是1
    
    //calculation for row-1 橫的
    for (var i = col-2; i >=0; i--) {
        DP[row-1][i] = DP[row-1][i+1] - arr[row-1][i];
        prev[row - 1][i] = [row - 1, i + 1];
        if (DP[row - 1][i] <= 0)
            DP[row - 1][i] = 1;
        
    }
    //calculation for col-1 y 直的
    for (var i = row-2; i >=0; i--) {
        DP[i][col-1] = DP[i + 1][col-1] - arr[i][col-1];
        prev[i][col - 1] = [i + 1, col - 1];
        if (DP[i][col - 1] <= 0)
            DP[i][col - 1] = 1;

    }
    //calculation for remaining grids
    for (var i = row-2; i >= 0; i--) {
        for (var j = col-2; j >=0; j--) {
            DP[i][j] = Math.min(DP[i + 1][j], DP[i][j + 1]) - arr[i][j];
            if (DP[i][j] <= 0)
                DP[j][j] = 1;
            if (DP[i + 1][j] <= DP[i][j + 1]) {
                prev[i][j] = [i + 1, j];
            }
            else
                prev[i][j]=[i, j+1]
        }
    }
    console.log("prev:");
    console.log(prev);
    console.log("DP");
    console.log(DP);
    var res = [];
    var tmp = arr[row - 1][col - 1];
    res.unshift(tmp);
    var tmp_pre=prev[0][0];  //傳回一個陣列
    while (tmp_pre != null) {
        //console.log(tmp_pre);
        var r = tmp_pre[0];
        var c = tmp_pre[1];
        res.push(arr[r][c]);
        tmp_pre = prev[r][c];
    }
    console.log("source tracking:");
    console.log(res);
    return DP[0][0];
}


var test = [
    [0,-2,-3,1],
    [-1,4,0,-2],
    [1,-2,-3,0]
];

var test2 = [
    [0, 1],
    [2,0]
];

console.log("TEST:");
console.log(test);
console.log(amr11a(test)); //

//console.log(amr11a(test2));