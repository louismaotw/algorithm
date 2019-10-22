/*in how many ways can you tile a 2xN rectangle with 2*1 dominoes?

<摘錄自Michal Danilak>
The correctly written backtrack function should always represent an answer to a well-stated question. 
In our case profit function represents an answer to a question: 
"What is the best profit we can get from selling the wines with prices stored in the array p, 
when the current year is year and the interval of unsold wines spans through [be, en], inclusive?"
一個正確的回溯函數(backtrack function)須要明確的界定一個問題，並且有一個明確的回應。
*/

function m2tile(n) {

    //T(m): the number of ways you can fill a 2xm matrix.
    function T(m) { //m is 1-based. 
        var tmp;
        if (m ==1)
            return 1;
        if (m ==2)
            return 2; //此處會[return 1]，為配合下列的式子成立。函數T(m)第一個成立的是m=2時答案為3，為此，調整至確認T(m-2)=1。

        tmp = T(m - 1) +  T(m - 2);
        return tmp;
    }

    var res = T(n);
    return res;
}
for (var i = 1; i < 31; i++) {
    var test = i;
    console.log(" 2 x " +i + " result= " + m2tile(test));
}


