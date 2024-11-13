function start () {
    let player1;
    let player2;
    player1 = prompt("What is Player 1 hand? (Rock Paper Scissors)").toLowerCase();
    player2 = prompt("What is Player 2 hand? (Rock Paper Scissors)").toLowerCase();

    if(player1==="rock" && player2==="scissors") {
        document.getElementById("message").innerHTML="Player 1 won!";
        hide();
    } else if (player1==="scissors" && player2==="rock") {
        document.getElementById("message").innerHTML="Player 2 won!";
        hide();
    } else if (player1==="scissors" && player2==="paper") {
        document.getElementById("message").innerHTML="Player 1 won!";
        hide();
    } else if (player1==="paper" && player2==="scissors") {
        document.getElementById("message").innerHTML="Player 2 won!";
        hide();
    } else if (player1==="paper" && player2==="rock") {
        document.getElementById("message").innerHTML="Player 1 won!";
        hide();
    } else if (player1==="rock" && player2==="paper") {
        document.getElementById("message").innerHTML="Player 2 won!";
        hide();
    } else {
        document.getElementById("message").innerHTML="Input is wrong!";
        hide();
    }
}
function hide() {
    document.getElementById("button").style.display = "none";
}