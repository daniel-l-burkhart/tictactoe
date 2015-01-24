


var player1 = [];

var player2 = [];


var moves = 0;



var winningScores = [7, 56, 448, 273, 84, 73, 146, 292];

function canvasClicked(power) {
   
    var numericVal= Math.pow(2, power);

    var canvas = document.getElementsByTagName("canvas");
    var ctx = canvas[power].getContext("2d");
    ctx.font = "20px Georgia";

    
    
    if (ctx.hasBeenDrawn === true) {
        alert("Spot Taken");
    
    } else {

        if (moves % 2 === 0) {
            setMove();
            player1[player1.length] = numericVal;
            ctx.fillText("X", 20, 30, 50);
            ctx.hasBeenDrawn = true;
            checkForWin(player1, "X");
            
          

        } else {
            setMove();
            player2[player2.length] = numericVal;
            ctx.fillText("O", 20, 30, 50);
            ctx.hasBeenDrawn = true;
            checkForWin(player2, "O");  
            
          
        }
         
    }
 checkForCatGame();

}



function checkForWin(player, playerName) {


    for (var i = 0; i < winningScores.length; i += 1) {
        if ((winningScores[i] & sum(player)) === winningScores[i]) {
            alert("player " + playerName + " wins!");
            startNewGame();

        }
    

}

}    


function checkForCatGame() {
    if(moves === 9){
            alert("The game is a draw. No one wins.");
        startNewGame();
       
    }
    }

function sum(list) {
    var total = 0;
    var i = 0;
    while (i < list.length)
    {
        total += list[i];
        i++;
    }

    return total;

}

function startNewGame() {
    var canvas = document.getElementsByTagName("canvas");
    for (var i =0; i<canvas.length; i+=1) {
        var context = canvas[i].getContext("2d");
        context.clearRect(0, 0, canvas[i].width, canvas[i].height);
        context.hasBeenDrawn = false;
        context.restore();
    }
    player1 = [];
    player2 = [];
    moves = 0;
    
  
} 

function setMove() {
 
        moves += 1;
    
}



