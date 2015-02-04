function Player(playerName) {
	
	this.Name = playerName;
	this.score = 0;	

}

function checkForWinner(currentScore) {
	var winningScores = [7, 56, 448, 273, 84, 73, 146, 292];
	for (var i = 0; i < winningScores.length; i += 1) {
		if((winningScores[i] & currentScore) === winningScores[i]) {
			return true;
		}
	}
	return false;
}