
describe("The values of cells are correct", function() {
	it("should return 1 for the first cell.", function() {
		expect(getNumericVal(0)).toBe(1); 
		
	});
});

describe("The first move should return X", function() {
	it("X will be the player on the 0th turn (first).", function() {
			expect(getPlayer(0)).toBe("X"); 
		
	});
});

describe("The second move should return O", function() {
	it("O will be the player on the 1st turn (second).", function() {
			expect(getPlayer(1)).toBe("O"); 
		
	});
});

describe("The second move should return O", function() {
	it("X will be the player on the 2nd turn (third).", function() {
			expect(getPlayer(2)).toBe("X"); 
		
	});
});

describe("The second move should return O", function() {
	it("O will be the player on the 3rd turn (fourth).", function() {
			expect(getPlayer(3)).toBe("O"); 
		
	});
});

describe("This should return a winning score.", function() {
	it("Player 2 should win going across", function() {
			player2[player2.length] = getNumericVal(0);
			player2[player2.length] = getNumericVal(1);
			player2[player2.length] = getNumericVal(2);
			
			expect(checkForWin(player2, "O")).toBe(true); 
		
	});
});

describe("This should return a winning score.", function() {
	it("Player 1 should win going across", function() {
			player1[player1.length] = getNumericVal(0);
			player1[player1.length] = getNumericVal(1);
			player1[player1.length] = getNumericVal(2);
			
			expect(checkForWin(player1, "X")).toBe(true); 
		
	});
});

describe("This should return a winning score.", function() {
	it("Player 2 should win going down", function() {
			player2 = [];
			player2[player2.length] = getNumericVal(0);
			player2[player2.length] = getNumericVal(3);
			player2[player2.length] = getNumericVal(6);
			
			expect(checkForWin(player2, "O")).toBe(true); 
		
	});
});

describe("This should return a winning score.", function() {
	it("Player 1 should win going down", function() {
			player1 = [];
			player1[player1.length] = getNumericVal(0);
			player1[player1.length] = getNumericVal(3);
			player1[player1.length] = getNumericVal(6);
			
			expect(checkForWin(player1, "O")).toBe(true); 
		
	});
});

describe("Checking for adding correct numbers to player lists.", function() {
	it("Should have 7 in player 1.", function() {
		player1 = [];
			player1[player1.length] = getNumericVal(0);
			player1[player1.length] = getNumericVal(1);
			player1[player1.length] = getNumericVal(2);
			
			expect(sum(player1)).toBe(7); 
		
	}); 
}); 
	
	
