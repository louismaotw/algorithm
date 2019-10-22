/*in how many ways can you tile a 2xN rectangle with 2*1 dominoes?

<�K����Michal Danilak>
The correctly written backtrack function should always represent an answer to a well-stated question. 
In our case profit function represents an answer to a question: 
"What is the best profit we can get from selling the wines with prices stored in the array p, 
when the current year is year and the interval of unsold wines spans through [be, en], inclusive?"
�@�ӥ��T���^�����(backtrack function)���n���T���ɩw�@�Ӱ��D�A�åB���@�ө��T���^���C
*/

function m2tile(n) {

    //T(m): the number of ways you can fill a 2xm matrix.
    function T(m) { //m is 1-based. 
        var tmp;
        if (m ==1)
            return 1;
        if (m ==2)
            return 2; //���B�|[return 1]�A���t�X�U�C�����l���ߡC���T(m)�Ĥ@�Ӧ��ߪ��Om=2�ɵ��׬�3�A�����A�վ�ܽT�{T(m-2)=1�C

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


