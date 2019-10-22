/*
SPOJ HUBULLU
game theory. 
You can try solving by hit and trial method. For example take the value of n=2, 
then the first player selects 2 and 1(divisor) and wins. Similarly if n=5, player-1 picks up 5 and 1. 
Then player-2 can either pick 3 or (4,2). In either case you will see that player-2 loses. 
Hence with this you can conclude that player_1 will always win.

Else you can solve it using game theory. It has got two states: winning and losing. 
For n=1, it can be clearly seen that player_1 is the winner. For n>1,
let us assume player_1 to be the loser. Hence after player_1 plays his move, it will lead to a winning state. 
Take for eg. for n>1 , player_1 picks up 1, then player_2 picks up x. Since, we have assumed that player_2 is the winner, 
we can say that the move made by player_2 leads to losing state. 
But if player_1 picks up x in the first move, player_2 will be in the losing state.
This is a contradiction. Hence the first player always wins.
*/

function habullu(num, name) {
    if (name==0) {
        console.log("Airborne won");
    }
    else {
        console.log("Pagfloyd won")
    }
}

habullu(1000, 1);


