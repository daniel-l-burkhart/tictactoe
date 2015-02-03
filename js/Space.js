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