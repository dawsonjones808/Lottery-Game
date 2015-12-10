var money = 5000;
var prize = [0,0,0,0,0,0,0,1000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var prize2 =[0,0,0,0,0,0,0,5000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var tickets = 0;

var press = function() {
	if (money < 0) {
		alert("You Are Out Of Money");
	} else{
	luck = Math.round(Math.random()*100);
	money = money-5;
	money = money+prize[luck];
	tickets++;
	document.getElementById('totmon').innerHTML = money;
	if (prize[luck] === 0) {
		document.getElementById('score').innerHTML = "Sorry, you didn't win. You've bought " + tickets+" tickets";
	} else {
	document.getElementById('score').innerHTML = "You won " + prize[luck] + " dollars! You've bought" +tickets+"tickets";
	};
	
	}

}
var press2 = function() {
	if (money < 0) {
		alert("You Are Out Of Money");
	} else{
	luck = Math.round(Math.random()*100);
	money = money-10;
	money = money+prize2[luck];
	tickets++;
	document.getElementById('totmon').innerHTML = money;
	if (prize2[luck] === 0) {
		document.getElementById('score').innerHTML = "Sorry, you didn't win. You've bought " + tickets + " tickets";
	} else {
	document.getElementById('score').innerHTML = "You won " + prize2[luck] + " dollars! You've bought " +tickets + " tickets";

	};
	}
}


/*
var function prizeselect() {
	prize[luck] = win;
}
*/
