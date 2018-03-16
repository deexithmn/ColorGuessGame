var boxList = document.querySelectorAll(".square");
var rgbDisplay = document.querySelector(".rgb");
var message = document.querySelector("#message");
var modeButton = document.querySelectorAll(".mode")
var h1 = document.querySelector("h1")
var newColors = document.querySelector("button")
var colors = null;
var winStatus = false;
var easyHard = true;
var winColor 
var numSquares = 6

reset();

init();

function init(){
	for(var i=0; i<modeButton.length; i++){
		modeButton[i].addEventListener("click",function()
			{
				modeButton[0].classList.remove("selected");
				modeButton[1].classList.remove("selected");
				this.classList.add("selected");
				if(this.textContent == "Easy"){
					numSquares = 3;
				}else {
					numSquares = 6;
				}
				reset();
			});
		}

	for(var i=0 ; i<boxList.length; i++){
		boxList[i].addEventListener("click",function()
		{
			var clickedColor = this.style.backgroundColor;
			console.log(clickedColor , winColor)
			if(clickedColor === winColor)
			{
				winStatus = true;
				message.textContent = "Correct!";
				colorMatch(clickedColor);
				h1.style.backgroundColor = clickedColor;
				newColors.innerHTML = "Play again!"
			}
			else
			{
				this.style.backgroundColor="#232323";
				message.textContent = "Try Again!";
			}
		});
	}
	reset();
}


newColors.addEventListener("click",function(){
	reset(numSquares);
});


function reset(){
	colors = randomGenColor(numSquares);
	h1.style.backgroundColor = "lightblue";
	winColor = colors[randomNumb()];
	console.log(winColor)
	rgbDisplay.textContent = winColor;
	newColors.innerHTML = "New Colors!";
	for(var i=0 ; i<boxList.length; i++){
		if(colors[i]){
			boxList[i].style.display = "block"
			boxList[i].style.backgroundColor = colors[i];
		}else{
			boxList[i].style.display = "none";
		}
	}
	// console.log(boxList[0].style.backgroud)
	message.textContent = ""
}



// function gameHeart(){


// checing the guessing, if guessed wrong then the backgroud set to #232323
function checkStatus(bl,temprgb){
	if(rgbDisplay.textContent === temprgb)
	{
		winStatus = true;	
	}
	else
	{
		boxList[bl].style.backgroundColor = "#232323";
		
	}
}

// to generate the random color
function randomGenColor(n){
	var r = 0;
	var g = 0;
	var b = 0;
	var rgb = [];
	for(var i =0; i<n ; i++){
		r = Math.floor(Math.random()*256);
		g = Math.floor(Math.random()*256);
		b = Math.floor(Math.random()*256);
		rgb[i] = "rgb("+r+", "+g+", "+b+")";
	}
	return rgb;
}

// for selection purpose random number generator

function randomNumb(){
	var int = Math.floor(Math.random()*colors.length);
	return int;
}

// when won changing all the color to the winColor

function colorMatch(colorOfBox){
	for(var i = 0; i<boxList.length;i++){
		boxList[i].style.backgroundColor = colorOfBox;
	}
}