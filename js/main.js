
var p1Name = 'Player 1';
var p2Name = 'PLayer 2';



function strGame(){
	document.getElementById('game').style.display="inline";
	document.getElementById('startPage').style.display="none";
  var p1Hold = document.getElementById('p1').value;
  var p2Hold = document.getElementById('p2').value;
  document.getElementById('x').innerHTML = (p1Hold.toUpperCase())+'\'S';
  p1Name = p1Hold.toUpperCase();
  p2Name = p2Hold.toUpperCase();
	return p1Name, p2Name;
  }

function reset(){
  var lookup=['a','b','c','d','e','f','g','h','i'];

  for(var z=0;z<=8;z++){
   
        document.getElementById(lookup[z]).value=0;
        document.getElementById(lookup[z]).innerHTML="";
        document.getElementsByClassName('alertBox')[0].style.display = "none";
        document.getElementById('o').innerHTML = "TURN";
        turn = 1


  };
}

function home(){
	document.getElementById('game').style.display="none";
	document.getElementById('startPage').style.display="inline";
			
}
// document.getElementById('x').innerHTML = p1Name;
var turn =1;


function playBox(){
	if(event.target.innerHTML==""){
		switch(turn)
				{	
					case 1:
						event.target.innerHTML = "X";
						event.target.value = 1;
						document.getElementById('x').innerHTML = p2Name+'\'S';
						break;
					case 2:
						event.target.innerHTML = "0";
						event.target.value = -1;
						document.getElementById('x').innerHTML = p1Name+'\'S';
						break;
					case 3:
						event.target.innerHTML = "X";
						event.target.value = 1;
						document.getElementById('x').innerHTML = p2Name+'\'S';
						break;
					case 4:
						event.target.innerHTML = "0";
						event.target.value = -1;
						document.getElementById('x').innerHTML = p1Name+'\'S';
						break;
					case 5:
						event.target.innerHTML = "X";
						event.target.value = 1;
						document.getElementById('x').innerHTML = p2Name+'\'S';
						break;
					case 6:
						event.target.innerHTML = "0";
						event.target.value = -1;
						document.getElementById('x').innerHTML = p1Name+'\'S';
						break;
					
					case 7:
						event.target.innerHTML = "X";
						event.target.value = 1;
						document.getElementById('x').innerHTML = p2Name+'\'S';
						break;
					case 8:
						event.target.innerHTML = "0";
						event.target.value = -1;
						document.getElementById('x').innerHTML = p1Name+'\'S';
						break;
					case 9:
						event.target.innerHTML = "X";
						event.target.value = 1;
						document.getElementById('x').innerHTML = p2Name+'\'S';
						break;


				}
			}
		else{

			turn= turn-1
		}	
		turn = turn+1
}




function check(){


		var a = document.getElementById('a').value;
		var b = document.getElementById('b').value;
		var c = document.getElementById('c').value;

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
	  		document.getElementById('x').innerHTML = "";
	  		document.getElementById('o').innerHTML = "";
	  		document.getElementsByClassName('alertBox')[0].style.display = "inline";
	  		document.getElementsByClassName('alertText')[0].innerHTML = p1Name+" WINS!!!";
	  		setTimeout("strGame();",3000);
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
	  		document.getElementById('x').innerHTML = "";
	  		document.getElementById('o').innerHTML = "";
	  		document.getElementsByClassName('alertBox')[0].style.display = "inline";
	  		document.getElementsByClassName('alertText')[0].innerHTML = "O WINS!!!";
	  		setTimeout("strGame();",3000);
	  		

	  	}


	 else{
	 	if(turn==10){
	 		document.getElementById('x').innerHTML = "";
	  		document.getElementById('o').innerHTML = "";
	  		document.getElementsByClassName('alertBox')[0].style.display = "inline";
	  		document.getElementsByClassName('alertText')[0].innerHTML = "DRAW...";
	  		setTimeout("strGame();",3000);
	 	}
	 }
}
	
	
	



// -----------------------------ALT CODE FOR PICKING O -------------------------------------------------

// function strGameO(){
// 				window.location.href="gameO.html"
// 		}
// function home(){
// 	window.location.href="index.html"
// }

// var turnO =1;


// function playBoxO(){
// 	if(event.target.innerHTML==""){
// 		switch(turnO)
// 				{	
// 					case 1:
// 						event.target.innerHTML = "O";
// 						event.target.value = 1;
// 						document.getElementById('x').innerHTML = "X's";
// 						break;
// 					case 2:
// 						event.target.innerHTML = "X";
// 						event.target.value = -1;
// 						document.getElementById('x').innerHTML = "O's";
// 						break;
// 					case 3:
// 						event.target.innerHTML = "O";
// 						event.target.value = 1;
// 						document.getElementById('x').innerHTML = "X's";
// 						break;
// 					case 4:
// 						event.target.innerHTML = "X";
// 						event.target.value = -1;
// 						document.getElementById('x').innerHTML = "O's";
// 						break;
// 					case 5:
// 						event.target.innerHTML = "O";
// 						event.target.value = 1;
// 						document.getElementById('x').innerHTML = "X's";
// 						break;
// 					case 6:
// 						event.target.innerHTML = "X";
// 						event.target.value = -1;
// 						document.getElementById('x').innerHTML = "O's";
// 						break;
					
// 					case 7:
// 						event.target.innerHTML = "O";
// 						event.target.value = 1;
// 						document.getElementById('x').innerHTML = "X's";
// 						break;
// 					case 8:
// 						event.target.innerHTML = "X";
// 						event.target.value = -1;
// 						document.getElementById('x').innerHTML = "O's";
// 						break;
// 					case 9:
// 						event.target.innerHTML = "O";
// 						event.target.value = 1;
// 						document.getElementById('x').innerHTML = "X's";
// 						break;


// 				}
// 			}
// 		else{

// 			turnO= turnO-1
// 		}	
// 		turnO = turnO+1
// }


// function checkO(){


// 		var a = document.getElementById('a').value;
// 		var b = document.getElementById('b').value;
// 		var c  = document.getElementById('c').value;

// 		var d = document.getElementById('d').value;
// 		var e = document.getElementById('e').value;
// 		var f = document.getElementById('f').value;

// 		var g = document.getElementById('g').value;
// 		var h = document.getElementById('h').value;
// 		var i = document.getElementById('i').value

// 	if(
// 		(
// 			(a+b+c==3) 
// 		) 
// 			|| 
// 		(
// 			(d+e+f==3)
// 		)
// 			|| 
// 	  	(
// 	  		(g+h+i==3) 
// 	  	)
// 	  		||
// 	  	(
// 	  		(a+d+g==3)
// 	  	) 	
// 	  		|| 
// 	  	(
// 	  		(b+e+h==3) 
// 	  	)
// 	  		|| 
// 		( 
// 			(c+f+i==3)
// 		) 
// 			||
// 		(
// 			(a+e+i==3)
// 		) 
// 			|| 
// 		(
// 			(c+e+g==3) 
// 		)
// 	)
// 		{
	  		
// 	  		document.getElementById('x').innerHTML = "";
// 	  		document.getElementById('o').innerHTML = "";
// 	  		document.getElementsByClassName('alertBox')[0].style.display = "inline";
// 	  		document.getElementsByClassName('alertText')[0].innerHTML = "O WINS!!!";
// 	  		setTimeout("strGame();",3000);
// 	  	}
// 	 else if(
// 		(
// 			(a+b+c==-3)  
// 		) 
// 			|| 
// 		(
// 			(d+e+f==-3) 
// 		)
// 			|| 
// 	  	(
// 	  		(g+h+i==-3)
// 	  	)
// 	  		||
// 	  	(
// 	  		(a+d+g==-3) 
// 	  	) 	
// 	  		|| 
// 	  	(
// 	  		(b+e+h==-3) 
// 	  	)
// 	  		|| 
// 		( 
// 			(c+f+i==-3) 
// 		) 
// 			||
// 		(
// 			(a+e+i==-3) 
// 		) 
// 			|| 
// 		(
// 			(c+e+g==-3) 
// 		)
// 	)
// 		{
// 	  		document.getElementById('x').innerHTML = "";
// 	  		document.getElementById('o').innerHTML = "";
// 	  		document.getElementsByClassName('alertBox')[0].style.display = "inline";
// 	  		document.getElementsByClassName('alertText')[0].innerHTML = "X WINS!!!";
// 	  		setTimeout("strGame();",3000);
// 	  	}


// 	 else{
// 	 	if(turnO==10){
// 	 		document.getElementById('x').innerHTML = "";
// 	  		document.getElementById('o').innerHTML = "";
// 	  		document.getElementsByClassName('alertBox')[0].style.display = "inline";
// 	  		document.getElementsByClassName('alertText')[0].innerHTML = "DRAW...";
// 	  		setTimeout("strGame();",3000);
// 	 	}
// 	 }
// }







// --------------------------OLD ATTEMPTS AT JS--------------------------------------------------------


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


// function navCells() {

// var cellArray = ["dude"];
// alert(cellArray);


// }

// var lookup = ["a","b","c","d","e","f","g","i"]

// function navCells(){

// 	alert('got to navCells');

// 	for(i=0;i<lookup.length;++i){

// 			alert(lookup[i]);
// 			alert(document.getElementById(lookup[i]).innerHTML);		
// 		}
// }

