/*
SPOJ DIVSUM

*/

function divsum(n) {
    var sum = 1; //"1"一定是divisor, "n"不能算是divisor
    var i;
    for (i = 2; i * i < n; i++) {
        if (n % i == 0) {
            sum += i;
            sum += n / i;
        }
    }

    if (i * i == n)
        sum += i;
    console.log(sum);
}

divsum(20);
divsum(1225);


