/*
SPOJ SHAKTI
game theory. Every even number is a winning state and every odd number is a losing state.
*/

function shakti(num) {
    if (num & 1) {
        console.log("Sorry!");
    }
    else {
        console.log("Thank you!")
    }
}

shakti(13);
shakti(14);


