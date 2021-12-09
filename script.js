
var allSlot = [
[-1,-1,-1],
[-1,-1,-1],
[-1,-1,-1]
];
var slotImages = [];
var maxItteration = 3;
var currentItteration=0;
var imgP = document.createElement("img");
var playerWin = false;
var name;
for(var i=0;i<9;i++){
	slotImages[i] = document.createElement("img");
	slotImages[i].src = "image/0.png";
	slotImages[i].className = "playerIMG";
	document.getElementById("slot-"+i).appendChild(slotImages[i]);
	
}
function inputName(){
	name = prompt('Input your name', 'Player');
	document.getElementById("numberOfStep").innerHTML = "Спроба " + currentItteration + " з " + maxItteration;
	
}

function generateCards(){
	for(var n=0;n<3;n++){
		for(var m=0;m<3;m++){
			allSlot[n][m] = (Math.round(Math.random()*4));
			slotImages[n*3+m].src = "image/" + allSlot[n][m] +".png";
		}
	}
	if((allSlot[0][0]==allSlot[0][1])&&(allSlot[0][0]==allSlot[0][2])||(allSlot[1][0]==allSlot[1][1])&&(allSlot[1][0]==allSlot[1][2])||(allSlot[2][0]==allSlot[2][1])&&(allSlot[2][0]==allSlot[2][2])
	||(allSlot[0][0]==allSlot[1][0])&&(allSlot[0][0]==allSlot[2][0])||(allSlot[0][1]==allSlot[1][1])&&(allSlot[0][1]==allSlot[2][1])||(allSlot[0][2]==allSlot[1][2])&&(allSlot[0][2]==allSlot[2][2])){
		alert(name + " WIN");
		currentItteration=-1;
		
	}
	currentItteration++;

	if(currentItteration==maxItteration){
		alert(name + " LOSE");
		currentItteration=0;
	}
		document.getElementById("numberOfStep").innerHTML = "Спроба " + currentItteration + " з " + maxItteration;
}