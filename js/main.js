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
	if(event.target.innerHTML==0){
		switch(turn)
				{	
					case 1:
						event.target.innerHTML = "X";
						event.target.value = 1;
						document.getElementById('x').innerHTML = "O's";
						break;
					case 2:
						event.target.innerHTML = "0";
						event.target.value = -1;
						document.getElementById('x').innerHTML = "X's";
						break;
					case 3:
						event.target.innerHTML = "X";
						event.target.value = 1;
						document.getElementById('x').innerHTML = "O's";
						break;
					case 4:
						event.target.innerHTML = "0";
						event.target.value = -1;
						document.getElementById('x').innerHTML = "X's";
						break;
					case 5:
						event.target.innerHTML = "X";
						event.target.value = 1;
						document.getElementById('x').innerHTML = "O's";
						break;
					case 6:
						event.target.innerHTML = "0";
						event.target.value = -1;
						document.getElementById('x').innerHTML = "X's";
						break;
					
					case 7:
						event.target.innerHTML = "X";
						event.target.value = 1;
						document.getElementById('x').innerHTML = "O's";
						break;
					case 8:
						event.target.innerHTML = "0";
						event.target.value = -1;
						document.getElementById('x').innerHTML = "X's";
						break;
					case 9:
						event.target.innerHTML = "X";
						event.target.value = 1;
						document.getElementById('x').innerHTML = "O's";
						break;


				}
			}
		else{
			
			turn= turn-1
		}	
		turn = turn+1
}






function check(){

	// var lookup = ["a","b","c","d","e","f","g","h","i"]

	// t=i
	// for(i=0;i<=lookup.length;++i){
	// 	switch(t){
	// 		case t:
	// 			lookup[i] = document.getElementById(lookup[i]).value;
	// 	}
	// }
	

	// i= i+1
	
	// I DONT THINK IS IS STORING THE VARUBLE "A"?????



	// for(i=0;i<lookup.length;++i){
	// 	var (lookup[i]= lookup[i]) = document.getElementById(lookup[i]).value;

	// }

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
			(a+b+c==3) 
		) 
			|| 
		(
			(d+e+f==3)
		)
			|| 
	  	(
	  		(g+h+i==3) 
	  	)
	  		||
	  	(
	  		(a+d+g==3)
	  	) 	
	  		|| 
	  	(
	  		(b+e+h==3) 
	  	)
	  		|| 
		( 
			(c+f+i==3)
		) 
			||
		(
			(a+e+i==3)
		) 
			|| 
		(
			(c+e+g==3) 
		)
	)
		{
	  		document.getElementById('x').innerHTML = "X";
	  		document.getElementById('o').innerHTML = "WINS!";
	  	}
	 else if(
		(
			(a+b+c==-3)  
		) 
			|| 
		(
			(d+e+f==-3) 
		)
			|| 
	  	(
	  		(g+h+i==-3)
	  	)
	  		||
	  	(
	  		(a+d+g==-3) 
	  	) 	
	  		|| 
	  	(
	  		(b+e+h==-3) 
	  	)
	  		|| 
		( 
			(c+f+i==-3) 
		) 
			||
		(
			(a+e+i==-3) 
		) 
			|| 
		(
			(c+e+g==-3) 
		)
	)
		{
	  		document.getElementById('x').innerHTML = "O";
	  		document.getElementById('o').innerHTML = "WINS!";
	  	}


	 else{
	 	if(turn==10){
	 		document.getElementById('x').innerHTML = "        DRAW";
	  		document.getElementById('o').innerHTML = "!";
	 	}
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

