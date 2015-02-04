function Game() {
	this.xPlayer = new Player("X");
	this.oPlayer = new Player("O");
	this.xPlayer.score = 0;
	this.oPlayer.score = 0;
	this.board = new Board();
	this.board.setSpaces();
	this.currentPlayer = this.xPlayer;
	
	this.newGame = function() {
		this.board = new Board();
		this.board.setSpaces();
		this.xPlayer = new Player("X");
		this.oPlayer = new Player("O");
		this.xPlayer.score = 0;
		this.oPlayer.score = 0;
		this.currentPlayer = this.xPlayer;
		location.reload();
	};
	
    this.switchCurrentPlayers = function() {
		if(this.currentPlayer === this.xPlayer) {
			this.currentPlayer = this.oPlayer;
		} else {
			this.currentPlayer = this.xPlayer;
		}
	}
	this.movePlayer = function(currPlayer, index) {
		currPlayer.score += this.board.spaces[index].value;
		this.board.spaces[index].playerMarked = currPlayer.Name;
			if (checkForWinner(currPlayer.score)) {
				alert("Player " + currPlayer.Name + " wins");
				this.newGame();
				}
			currPlayer.turn +=1;
	}		
	this.makeMove = function(index) {
		if(this.board.spaces[index].Marked === false){
			this.movePlayer(this.currentPlayer, index);
			this.switchCurrentPlayers();
			this.board.spaces[index].Marked = true;
			if (this.board.isBoardFilledIn()) {
				alert("The Game is a Draw.");
				this.newGame();
			}	
			
		} else{
			alert("Space is taken.");
		}
	};

}