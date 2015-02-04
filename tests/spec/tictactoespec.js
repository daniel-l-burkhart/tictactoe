describe("The values of cells are correct", function() {
		var currentGame = new Game();
		currentGame.board.setSpaces();
	it("should return 1 for the first cell.", function() {
		expect(currentGame.board.spaces[0].value).toBe(1); 
	});
	it("should return 2 for the second cell.", function() {
		expect(currentGame.board.spaces[1].value).toBe(2); 
	});
	it("should return 4 for the third cell.", function() {
		expect(currentGame.board.spaces[2].value).toBe(4); 
	});
	it("should return 8 for the fourth cell.", function() {
		expect(currentGame.board.spaces[3].value).toBe(8); 
	});
	it("should return 16 for the fifth cell.", function() {
		expect(currentGame.board.spaces[4].value).toBe(16); 
	});
	it("should return 32 for the sixth cell.", function() {
		expect(currentGame.board.spaces[5].value).toBe(32); 
	});
	it("should return 64 for the seventh cell.", function() {
		expect(currentGame.board.spaces[6].value).toBe(64); 
	});
	it("should return 128 for the eighth cell.", function() {
		expect(currentGame.board.spaces[7].value).toBe(128); 
	});
		it("should return 256 for the ninth cell.", function() {
		expect(currentGame.board.spaces[8].value).toBe(256); 
	});
});

describe("Player Changes after each turn.", function() {
	var currentGame = new Game();
	currentGame.board.setSpaces();
	
	it("Player X should be the first current Player.", function() {
		expect(currentGame.currentPlayer.Name).toBe("X"); 
	});
	
	it("Player O should be the Second current Player.", function() {
		currentGame.makeMove(1);
		expect(currentGame.currentPlayer.Name).toBe("O"); 
	});

});


describe("Player Score Changes after each turn.", function() {
	
	it("Start: Player X Score = 0,  Player O Score = 0.", function() {
		var currentGame2 = new Game();
		currentGame2.board.setSpaces();
		expect(currentGame2.xPlayer.score).toBe(0); 
		expect(currentGame2.oPlayer.score).toBe(0); 
	});
	
	
	it("After Turn 1: Player X Score = 1, Player O Score = 0.", function() {
		var currentGame2 = new Game();
		currentGame2.board.setSpaces();
		currentGame2.makeMove(0);
		expect(currentGame2.xPlayer.score).toBe(1); 
		expect(currentGame2.oPlayer.score).toBe(0);
	});
	
	it("After Turn 2: Player X Score = 1, Player O Score = 4.", function() {
		var currentGame2 = new Game();
		currentGame2.board.setSpaces();
		currentGame2.makeMove(0);
		currentGame2.makeMove(2);
		expect(currentGame2.xPlayer.score).toBe(1); 
		expect(currentGame2.oPlayer.score).toBe(4);
	});
	
	it("After Turn 3: Player X Score = 3, Player O Score = 4.", function() {
		var currentGame2 = new Game();
		currentGame2.board.setSpaces();
		currentGame2.makeMove(0);
		currentGame2.makeMove(2);
		currentGame2.makeMove(1)
		expect(currentGame2.xPlayer.score).toBe(3); 
		expect(currentGame2.oPlayer.score).toBe(4);
	});
});
	

