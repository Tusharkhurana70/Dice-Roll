var images=[
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
]

function rollDice() {

var player1= Math.floor(Math.random(images)*6);
var player2=Math.floor(Math.random(images)*6);

document.getElementById("diice1").src=images[player1];
document.getElementById("diice2").src=images[player2];

if(player1>player2) {
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(player2>player1) {
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="It's a Draw! ☠️"
}

}