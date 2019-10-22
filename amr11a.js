/*Problem: SPOJ AMR11A, magic grid
here we want that harry shouldnt die in the way, so we start from the destination and keep traversing the path backwards,
and calculating the minimum required power, if the power falls below or equal to zero, we reset the power.
Note that the reverse traversal means traversal along opposite direction of what is mentioned in the problem.

This problem is a slight variation of Minimum Cost Path Problem.

�bMinimum Cost Path���A�O�q�̥��W�}�l�A��̥k�U�A��dynamic programming��X�̤p�ȡC
We can reach (i,j) from (i-1,j) or (i,j-1), thus, the total cost to reach is 
the sum of minimum of the two cost plus the value written inside the cost[i][j].

�b���D���A�O�H�ۤϪ���V�i��A���O�̥k�U���Ȭ�1(�b�C��GRID�����̤p���ݭ�)�A�A�^���X�C��GRID�һݪ��̤p�ȡC
�H�}�C������(1,2)��m���ҡA�b����m�һݪ�strength����Harry�b(1,3)��(2,2)���ΡA�ڭ̨��o���GRID���̤pDP��(3)�A�ú������A
���ɦbGRID(1,2)�X�h�ɥ����O3�A���ɦ]GRID(1,2)���ȬO0�A�ҥH(1,2)����3�C
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

    DP[row-1][col-1] = 1; //�b�̥k�U������m�A�����O1
    
    //calculation for row-1 �
    for (var i = col-2; i >=0; i--) {
        DP[row-1][i] = DP[row-1][i+1] - arr[row-1][i];
        prev[row - 1][i] = [row - 1, i + 1];
        if (DP[row - 1][i] <= 0)
            DP[row - 1][i] = 1;
        
    }
    //calculation for col-1 y ����
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
    var tmp_pre=prev[0][0];  //�Ǧ^�@�Ӱ}�C
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