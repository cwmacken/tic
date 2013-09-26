function strGame(){
				window.location.href="game.html"
		}
function home(){
	window.location.href="index.html"
}

var turn =1;

function playBox(){
		switch(turn)
				{
					case 1:
						event.target.innerHTML = "X";
						break;
					case 2:
						event.target.innerHTML = "0";
						break;
					case 3:
						event.target.innerHTML = "X";
						break;
					case 4:
						event.target.innerHTML = "0";
						break;
					case 5:
						event.target.innerHTML = "X";
						break;
					case 6:
						event.target.innerHTML = "0";
						break;
					
					case 7:
						event.target.innerHTML = "X";
						break;
					case 8:
						event.target.innerHTML = "0";
						break;
					case 9:
						event.target.innerHTML = "X";
						break;

				}
				
		turn = turn+1

}

// function playBox(){
// 	if (turn=1){
// 		event.target.innerHTML = "X"
// 		turn = turn+1
// 	} 
// 	else{
// 		event.target.innerHTML = "0"
// 		turn-=1
// 	}

// }

