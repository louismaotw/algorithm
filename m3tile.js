/*SPOJ M3TILE, in how many ways can you tile a 3xn rectangle with 2*1 dominoes?

<摘錄自Michal Danilak>
The correctly written backtrack function should always represent an answer to a well-stated question. 
In our case profit function represents an answer to a question: 
"What is the best profit we can get from selling the wines with prices stored in the array p, 
when the current year is year and the interval of unsold wines spans through [be, en], inclusive?"
一個正確的回溯函數(backtrack function)須要明確的界定一個問題，並且有一個明確的回應。
*/

function m3tile(n) { //n必須是偶數才有可能塞得完所有的2X1積木。

    //T(m): the number of ways you can fill a 3xm matrix.
    function T(m) { //m is 1-based. 
        var tmp;
        if (m < 0)
            return 0;
        if (m ==0)
            return 1; //此處會[return 1]，為配合下列的式子成立。函數T(m)第一個成立的是m=2時答案為3，為此，調整至確認T(m-2)=1。
        tmp = 3 * T(m - 2) + 2 * F(m - 3);
        /*
        [3*T(m…]的3代表有3種可能，在採取此種可能方法後，縮減後的matrix為T(m-2)。
        [2*F…]的2代表2種可能，在採取此種可能方法後，縮減後的matrix必須在上或下多一個額外的元素。
        注意在某些情況下題目不能成立，如m為3時，2x1的積木不可能全部放進3x3的matrix中，因而題目中不可能有m3tile(3)的情形。
        */
        return tmp;
    }

    //F(m): the number of ways of filling a 3xm matrix and an extra element at the top( or bottom) after the last column.
    function F(m) {    
        var tmp
        if (m < 0)
            return 0;
        if(m==0)
            return 0;
        tmp = T(m - 1) + F(m - 2);//有兩種可能放2x1積木的方法。
        //第一個成立的為F(1)=1，上述可成立。接下來，F(2)
        return tmp;

    }

    var res = T(n);
    return res;
}

var test = 4;
console.log(m3tile(test));
