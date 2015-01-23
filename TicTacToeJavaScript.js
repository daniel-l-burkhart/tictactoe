


var player1 = [];

var player2 = [];

var usedSpots = [];


var winningScores = [7, 56, 448, 273, 84, 73, 146, 292];

function canvasClicked(power) {
   
    var numericVal= Math.pow(2, power);

    var canvas = document.getElementsByTagName("canvas");
    var ctx = canvas[power].getContext("2d");
    ctx.font = "20px Georgia";


    if (spotIsTaken(power)) {
        alert("Spot Taken");
    
    } else {

        if (player1.length === player2.length) {
            player1[player1.length] = numericVal;
            ctx.fillText("X", 20, 30, 50);
            checkForWin(player1, "X");

        } else {
            player2[player2.length] = numericVal;
            ctx.fillText("O", 20, 30, 50);
            checkForWin(player2, "O");
        }
        usedSpots[usedSpots.length] = power;
      
       
    }
    
}

function spotIsTaken(index) {
    var isTaken = false;
    var i = 0;
    usedSpots.forEach(function(spot) {
        if (parseInt(spot) === parseInt(index)) {
            isTaken = true;
        }
        i++;
    });

    return isTaken;
}

function checkForWin(player, playerName) {
    var i = 0;
   while (i < winningScores.length)
    {
      if (parseInt(sum(player)) === parseInt(winningScores[i])) {
          alert("player " + playerName + " wins!");
          location.reload();
      }
        i++;
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



