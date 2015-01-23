


var player1 = [];

var player2 = [];



var winningScores = [7, 56, 448, 273, 84, 73, 146, 292];

function addClickedSquare(elementName) {

    if (player1.length() <= player2.length()) {
        player1.push(elementName);
        checkForWin(player1,"X");
        document.getElementById(elementName).innerText = "X";

    } else {
        player2.push(elementName);
        checkForWin(player2, "O");
        document.getElementById(elementName).innerText = "O";
    }

    checkForWin();
}

function checkForWin(player, playerName) {
    var sum = 0;
    forEach(winningScore in winningScores)
    {
      if (sum(player) === winningScores) {
          alert("player " + playerName + " wins!");
          document.refresh();
      } 
    }
    
}

function sum(list) {
    var total = 0;
    
    forEach(intVal in list)
    {
        sum += Int
    }


}


