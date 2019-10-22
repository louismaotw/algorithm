/*SPOJ M3TILE, in how many ways can you tile a 3xn rectangle with 2*1 dominoes?

<�K����Michal Danilak>
The correctly written backtrack function should always represent an answer to a well-stated question. 
In our case profit function represents an answer to a question: 
"What is the best profit we can get from selling the wines with prices stored in the array p, 
when the current year is year and the interval of unsold wines spans through [be, en], inclusive?"
�@�ӥ��T���^�����(backtrack function)���n���T���ɩw�@�Ӱ��D�A�åB���@�ө��T���^���C
*/

function m3tile(n) { //n�����O���Ƥ~���i���o���Ҧ���2X1�n��C�X�z���Ȭ�2,4,6,8...

    //T(m): the number of ways you can fill a 3xm matrix.
    function T(m) { //m is 1-based. 
        var tmp;
        if (m <= 0)
            return 0;
        if (m == 2)
            return 3;
        tmp = 3 * T(m - 2) + 2 * F(m - 3);
        /*
        [3*T(m�K]��3�N��3�إi��A�b�Ĩ����إi���k��A�Y��᪺matrix��T(m-2)�C
        [2*F�K]��2�N��2�إi��A�b�Ĩ����إi���k��A�Y��᪺matrix�����b�W�ΤU�h�@���B�~�������C
        �`�N�b�Y�Ǳ��p�U�D�ؤ��ন�ߡA�pm��3�ɡA2x1���n�줣�i�������i3x3��matrix���A�]���D�ؤ����i�঳m3tile(3)�����ΡC
        */
        return tmp;
    }

    //F(m): the number of ways of filling a 3xm matrix and an extra element at the top( or bottom) after the last column.
    function F(m) { //m�����O�_�Ƥ~�X�z�A�X�z���Ȭ�1,3,5,7...    
        var tmp
        if (m <= 0)
            return 0;
        if (m == 1)
            return 1;
        tmp = T(m - 1) + F(m - 2);//����إi���2x1�n�쪺��k�C
        //��m=3�ɡAF(3)=T(2)+F(1)=3+1=4
        return tmp;

    }

    var res = T(n);
    return res;
}
for (var i = 1; i < 31; i++) {
    var test = i;
    console.log(" 3 x " +i + " result= " + m3tile(test));
}


