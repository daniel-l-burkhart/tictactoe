function Player(playerName) {
	
	this.Name = playerName;
	this.score = 0;	
	this.turn = 0;
}

function Space (val) {
	this.marked = false;

	Object.defineProperty(this, "Marked",{
		get: function(){return this.marked;},
		set: function(mark) {this.marked = mark;}
	});
	
	
	this.value = val;
	
	this.playerMark = "";
	Object.defineProperty(this, "playerMarked", {
		get: function() {return this.playerMark;},
		set: function(mark) {this.playerMark = mark;}	
	}); 
	
	this.isEmpty = function(){
		return !this.marked;
	};
	
	this.setEmpty = function() {
		this.Marked = false;
	};
}


function Board() {
	var size = 3;
	this.spaces = [];
	
	this.setSpaces = function() {
		for (var i = 0; i < (size*size); i++) {
			this.spaces[i] = new Space(Math.pow(2,i));
		}
	};
	
	this.isBoardFilledIn = function() {
		for (var i = 0; i < this.spaces.length; i++) {
			if (this.spaces[i].isEmpty()) {
				return false;
			}
		}
		return true;
	};
	

}

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

function checkForWinner(currentScore) {
	var winningScores = [7, 56, 448, 273, 84, 73, 146, 292];
	for (var i = 0; i < winningScores.length; i += 1) {
		if((winningScores[i] & currentScore) === winningScores[i]) {
			return true;
		}
	}
	return false;
}





