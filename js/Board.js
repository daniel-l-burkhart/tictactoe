function Board() {
	var size = 3;
	this.spaces = [];
	
	this.setSpaces = function() {
		for (var i = 0; i < (size*size); i++) {
			this.spaces[i] = new Space(Math.pow(2,i));
		}
	};
	
	this.resetSpaces = function(){
		
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