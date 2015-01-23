


var player1 = { "X": 0 };

var player2 = {"O" : 0};

var winningScores = [7, 56, 448, 273, 84, 73, 146, 292];

function addClickedSquare(elementName) {

    if (player1.length() <= player2.length()) {
        player1.push(elementName);
        checkForWin(player1);

    } else {
        player2.push(elementName);
        checkForWin(player2);
    }

    checkForWin();
}

function checkForWin(player) {
    var sum = 0;
    forEach(winningScore in winningScores)
    {
      if (sum(player) === winningScores) {
          alert("player wins!");
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


