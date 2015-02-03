function Game() {
	this.xPlayer = new Player("X");
	this.oPlayer = new Player("O");
	this.xPlayer.score = 0;
	this.oPlayer.score = 0;
	this.board = new Board();
	this.board.setSpaces();

	this.newGame = function() {
		this.board = new Board();
		this.board.setSpaces();
		this.xPlayer = new Player("X");
		this.oPlayer = new Player("O");
		this.xPlayer.score = 0;
		this.oPlayer.score = 0;
	
		location.reload();
	};
	
	this.makeMove = function(index) {
		if(this.board.spaces[index].Marked === false){
		if(this.xPlayer.turn === this.oPlayer.turn) {
			this.xPlayer.score += this.board.spaces[index].value;
			
			this.board.spaces[index].playerMarked = "X";

			if (checkForWinner(this.xPlayer.score)) {
				alert("Player X wins");
				this.newGame();
			}
			this.xPlayer.turn+=1;
		} else {
			
			this.oPlayer.score += this.board.spaces[index].value;
			this.board.spaces[index].playerMarked = "O";

			if (checkForWinner(this.oPlayer.score)) {
				alert("Player O wins");
				this.newGame();
			}
			this.oPlayer.turn+=1;
		}
		
		
		this.board.spaces[index].Marked = true;
		if (this.board.isBoardFilledIn()) {
			
				alert("Cat Game");
				this.newGame();
	
		
		}
	} else{
		alert("Space is taken.");
	}
	};

}