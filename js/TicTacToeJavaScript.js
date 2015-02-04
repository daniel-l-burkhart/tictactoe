
$(document).ready(function(){
	 var game = new Game();
	 var canvas;
	 
	$("canvas").click(function() {
		var canvasIndex = $(this).index();
		game.makeMove(canvasIndex);
		canvas = document.getElementsByTagName("canvas");
		var ctx =canvas[canvasIndex].getContext("2d");
		ctx.font="20px Georgia";
		ctx.fillText(game.board.spaces[canvasIndex].playerMarked, 20, 30, 50);
			if(checkForWinner(game.xPlayer.score) || checkForWinner(game.oPlayer.Score) 
				|| game.board.isBoardFilledIn()) {
				location.reload();
				
			}
	});
	
	$("button").click(function() {
	game.newGame();
	for (var i =0; i< canvas.length; i+=1) {
        var context = canvas[i].getContext("2d");
        context.clearRect(0, 0, canvas[i].width, canvas[i].height);
        context.restore();
    }
	});

}); 

