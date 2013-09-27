function strGame(){
				window.location.href="game.html"
		}
function home(){
	window.location.href="index.html"
}

function navCells() {

var cellArray = ["dude"];
alert(cellArray);


}
// var lookup = ["a","b","c","d","e","f","g","i"]

// function navCells(){

// 	alert('got to navCells');

// 	for(i=0;i<lookup.length;++i){

// 			alert(lookup[i]);
// 			alert(document.getElementById(lookup[i]).innerHTML);		
// 		}
// }

var turn =1;

function playBox(){
		switch(turn)
				{	
					case 1:
						event.target.innerHTML = "X";
						event.target.value = 1;
						break;
					case 2:
						event.target.innerHTML = "0";
						event.target.value = -1;
						break;
					case 3:
						event.target.innerHTML = "X";
						event.target.value = 1;
						break;
					case 4:
						event.target.innerHTML = "0";
						event.target.value = -1;
						break;
					case 5:
						event.target.innerHTML = "X";
						event.target.value = 1;
						break;
					case 6:
						event.target.innerHTML = "0";
						event.target.value = -1;
						break;
					
					case 7:
						event.target.innerHTML = "X";
						event.target.value = 1;
						break;
					case 8:
						event.target.innerHTML = "0";
						event.target.value = -1;
						break;
					case 9:
						event.target.innerHTML = "X";
						event.target.value = 1;
						break;

				}
				
		turn = turn+1
}






function check(){

	// var lookup = ["a","b","c","d","e","f","g","h","i"]

	// for(i=0;i<lookup.length;++i){

		var a = document.getElementById('a').value;
		var b = document.getElementById('b').value;
		var c  = document.getElementById('c').value;

		var d = document.getElementById('d').value;
		var e = document.getElementById('e').value;
		var f = document.getElementById('f').value;

		var g = document.getElementById('g').value;
		var h = document.getElementById('h').value;
		var i = document.getElementById('i').value

	if(
		(
			(a+b+c==-3) || (a+b+c==3) 
		) 
			|| 
		(
			(d+e+f==-3) || (d+e+f==3)
		)
			|| 
	  	(
	  		(g+h+i==-3) || (g+h+i==3) 
	  	)
	  		||
	  	(
	  		(a+d+g==-3) || (a+d+g==3)
	  	) 	
	  		|| 
	  	(
	  		(b+e+h==-3) || (b+e+h==3) 
	  	)
	  		|| 
		( 
			(c+f+i==-3) || (c+f+i==3)
		) 
			||
		(
			(a+e+i==-3) || (a+e+i==3)
		) 
			|| 
		(
			(c+e+g==-3) || (c+e+g==3) 
		)
	)
		{
	  		alert('WINNER!')
	  	}
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

