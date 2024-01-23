import {canvas} from "./GameLayers/canvasLayer.js";
import {gameLoop} from "./GameLayers/coreLayer.js";
import {Obstacle} from "./GameObjects/obstacle.js";
import {PlayerFigure} from "./GameObjects/playerFigure.js";
import { HungerBar } from "./GameObjects/hungerBar.js";
import { Food } from "./GameObjects/food.js";
import { Floor} from "./GameObjects/floor.js";
import { doubleJumpPickUp } from "./GameObjects/doubleJump.js";
import { Tile } from "./GameObjects/tile.js";
import  {FlyingObstacle} from "./GameObjects/flyingObstacle.js";
import {Spike} from "./GameObjects/spike.js";
import { Grass } from "./GameObjects/grass.js";


let camera = {
    x: 0,
	y: 0,
	backgroundX: 0,
	backgroundY : 0,
}












function getMousePos(evt) {
	console.log(evt)
    var rect = canvas.getBoundingClientRect();
    let coordinates =  {
        x: ((evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width) + camera.x,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height + camera.y
    };

	console.log('coordinates X =        ' + coordinates.x)
	console.log('coordinates Y =        ' + coordinates.y)}


window.addEventListener("click", getMousePos)

//Find mous position https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas





///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///
//set Game Objects

////Level 1 - Stone +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///

// stone floor long
new Tile(0, 460, 50, 60, 36,0, 'stone');
new Tile(3020,460,50,60,40,0, 'stone')


//Level 1 - Left levelBoundary
new Tile(0,-1900, 25,30, 0, 80, 'stone')

//Level 1 - Right levelBoundary
new Tile(4025, -1900, 25,30, 0, 80, 'stone')

//Level 1 - Right Level - shaft boundary
new Tile(3825, -1560, 25,30, 0, 75, 'stone')



//Stone PLatforms
new Tile(370,350,25,30,5,0, 'stone')
new Tile(660,300,50,60,6,0, 'stone')
new Tile(1200,280,25,30,2,0, 'stone')
new Tile(1450,300,25,30,2,0, 'stone')
new Tile(1670,360,25,30,5,0, 'stone')
new Tile(1870,215,25,30,4,0, 'stone')
new Tile(2070,95,25,30,3,0, 'stone')
new Tile(2070,95,25,30,3,0, 'stone')
new Tile(2600,130,25,30,5,0, 'stone')
new Tile(3440,110,25,30,2,0, 'stone')
new Tile(3440,-70,25,30,2,0, 'stone')
new Tile(3700,-500,25,30,2,0, 'stone')
new Tile(3000,-750,50,60,17,0, 'stone')








//vertical stone Platforms
new Tile(3680,50,25,30,0,6, 'stone')
new Tile(3480,-550,25,30,0,6, 'stone', true)




//doublejumps

new doubleJumpPickUp(2340, -10,20, 20) 
new doubleJumpPickUp(2950, 50,20, 20, ) 
new doubleJumpPickUp(3480, 262,20, 20, ) 
new doubleJumpPickUp(3650, -230,20, 20, )
new doubleJumpPickUp(3650, -320,20, 20, ) 






//Spikes
new Spike(950,432,25,30,34,0, 'spike')
new Spike(3020,432,25,30,9,0, 'spike')
// new Tile(2700,432,25,30,5,0, 'spike')


//super deadly Fruit
new FlyingObstacle(0, -200, 400, 160, 0,4400, 10, 'carrot', true)



//Level 2 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// Level 2 - Grass Floor
new Tile(0, -300, 50, 60, 4,0, 'grass');
new Tile(2080, -300, 50, 60, 24,0, 'grass');




//Grass PLatforms
new Tile(2880, -650, 25, 30, 2,0, 'grass');


new Tile(2300, -850, 50, 60, 6,0, 'grass');
new Tile(550, -1320, 50, 60, 50,0, 'grass');
new Tile(1860, -360, 25, 30, 5,0, 'grass');
// new Tile(1760, -550, 25, 30, 2,0, 'grass');
new Tile(1390, -880, 25, 30, 2,0, 'grass');
new Tile(740, -830, 25, 30, 2,0, 'grass');
new Tile(560, -450, 25, 30, 5,0, 'grass');










//Stone Platforms
new Tile(2710,-430,25,30,2,0, 'stone',)
new Tile(2360,-990,25,30,2,0, 'stone',)
new Tile(2170,-990,25,30,2,0, 'stone',)
new Tile(1550,-420,50,60,2,0, 'stone',)
new Tile(252,-410,25,30,4,0, 'stone',)
new Tile(25,-1400,25,30,5,0, 'stone',)




//vertical stone
new Tile(2040,-1270,25,30,0,23, 'stone', true,)
new Tile(1886,-770,25,30,0,3, 'stone', false,)
new Tile(1150,-840,25,30,0,3, 'stone', true,)
new Tile(990,-950,25,30,0,2, 'stone', true,)
new Tile(530,-1060,25,30,0,12, 'stone', true,)










// Vertical Grass PLatforms
new Tile(2300,-800,50,60,0,9, 'grass')

new Tile(3000,-1500,50,60,0,13, 'grass',)
new Tile(2600,-1000,25,30,0,5, 'grass')
new Tile(2800,-1100,25,30,0,3, 'grass')
new Tile(1380,-500,25,30,0,4, 'grass', true)
new Tile(320,-1220,25,30,0,2, 'grass',)
















//doublejumps

new doubleJumpPickUp(2720, -615,20, 20, ) 
new doubleJumpPickUp(2720, -730,20, 20, ) 
new doubleJumpPickUp(2922, -950,20, 20, ) 
new doubleJumpPickUp(2922, -1100,20, 20, ) 
new doubleJumpPickUp(2180, -840,20, 20, ) 
new doubleJumpPickUp(2180, -710,20, 20, ) 
new doubleJumpPickUp(2180, -580,20, 20, ) 
new doubleJumpPickUp(2180, -420,20, 20, ) 

//high doublejumps
new doubleJumpPickUp(1730, -825,20, 20, ) 
new doubleJumpPickUp(1580, -880,20, 20, ) 

new doubleJumpPickUp(1290, -680,20, 20, ) 
new doubleJumpPickUp(1750, -600,20, 20, ) 
new doubleJumpPickUp(650, -660,20, 20, ) 
new doubleJumpPickUp(650, -550,20, 20, ) 


//left doublejumps

new doubleJumpPickUp(110, -480,20, 20, ) 
new doubleJumpPickUp(110, -580,20, 20, ) 
new doubleJumpPickUp(110, -680,20, 20, ) 
new doubleJumpPickUp(110, -780,20, 20, ) 
new doubleJumpPickUp(110, -880,20, 20, )
new doubleJumpPickUp(110, -980,20, 20, ) 
new doubleJumpPickUp(110, -1080,20, 20, ) 
new doubleJumpPickUp(110, -1180,20, 20, ) 
new doubleJumpPickUp(110, -1280,20, 20, ) 









//spikes
new Spike(2080,-330,25,30,9,0, 'spike')
new Spike(2300,-880,25,30,12,0, 'spike')
new Spike(2015, -1270, 25,30,0,22, 'spike')
new Spike(1400, -470, 25,30,0,3, 'spike', true)
new Spike(1360, -470, 25,30,0,3, 'spike', false)
new Spike(550, -1260, 50,60,29,0, 'spike', false)
new Spike(550, -1060, 25,30,0,12, 'spike', true)
new Spike(510, -1060, 25,30,0,12, 'spike', false)
new Spike(25, -1390, 25,30,5,0, 'spike', true)




//Deadly Fruits 1
new FlyingObstacle(2340, -480, 50, 20, 2340,3480, 5, 'carrot', true)
new FlyingObstacle(2040, -480, 50, 20, 2340,3480, 5, 'banana', true)
new FlyingObstacle(1740, -480, 50, 20, 2340,3480, 5, 'salad', true)


//deadly green 2
new FlyingObstacle(2065, -1090, 100, 40, 2065,2805, 3, 'watermelon', true)
// new FlyingObstacle(1715, -1090, 50, 20, 2065,2805, 3, 'carrot', true)

//deadly greens 3
new FlyingObstacle(550, -960, 50, 20, 550,2030, 5, 'banana', true)
new FlyingObstacle(100, -960, 50, 20, 550,2030, 5, 'salad', true)
new FlyingObstacle(-350, -960, 50, 20, 550,2030, 5, 'watermelon', true)
// new FlyingObstacle(-800, -960, 50, 20, 550,2030, 5, 'carrot', true)
new FlyingObstacle(1015, -760, 150, 60, -150,2030, 7, 'carrot', true)
new FlyingObstacle(0, -760, 150, 60, -150,2030, 7, 'carrot', true)




//Level 3 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//ground 3rd level - 1500
// new Tile(0, -1100, 50, 60, 20,0, 'grass');


//top boundary
new Tile(0, -1900, 25, 30, 162,0, 'stone');

//clouds
new Tile(430, -1355, 25, 30, 3,0, 'cloud');
new Tile(600, -1460, 25, 30, 3,0, 'cloud');
new Tile(830, -1460, 25, 30, 3,0, 'cloud');
new Tile(1060, -1460, 25, 30, 3,0, 'cloud');
new Tile(1800, -1460, 25, 30, 2,0, 'cloud');
new Tile(2440, -1565, 50, 60, 13,0, 'cloud', true);
new Tile(3210, -1420, 25, 30, 4,0, 'cloud');
new Tile(3210, -1050, 25, 30, 4,0, 'cloud');
new Tile(3450, -960, 25, 30, 2,0, 'cloud');
new Tile(3650, -860, 25, 30, 2,0, 'cloud');





//clouds vertical
new Tile(1980, -1565, 25, 30, 0,2, 'cloud', true);
new Tile(2210, -1565, 25, 30, 0,2, 'cloud', true);








//doublejumps 1
new doubleJumpPickUp(1280, -1530,20, 20) 
new doubleJumpPickUp(1480, -1530,20, 20) 
new doubleJumpPickUp(1680, -1530,20, 20) 
new doubleJumpPickUp(3690, -1020,20, 20) 
new doubleJumpPickUp(3690, -1170,20, 20) 
new doubleJumpPickUp(3690, -1320,20, 20) 

new doubleJumpPickUp(3690, -1470,20, 20) 

new doubleJumpPickUp(3690, -1620,20, 20) 

new doubleJumpPickUp(3690, -1770,20, 20) 









//spikes
new Spike(550, -1340, 25,30,98,0, 'spike', false)
new Spike(3050, -780, 25,30,31,0, 'spike', false)


//deadly green 1
new FlyingObstacle(3000, -1500, 50, 20, 3000,-50, 8, 'carrot', false)
new FlyingObstacle(3500, -1500, 50, 20, 3000,-50, 8, 'watermelon', false)
new FlyingObstacle(4000, -1500, 50, 20, 3000,-50, 8, 'salad', false)
new FlyingObstacle(4500, -1500, 50, 20, 3000,-50, 8, 'banana', false)
new FlyingObstacle(5000, -1500, 50, 20, 3000,-50, 8, 'carrot', false)
new FlyingObstacle(5500, -1500, 50, 20, 3000,-50, 8, 'banana', false)









// //going high - playerfigure hunger bar flying fruits 
// new Obstacle(150, 20, 153, 14);
// new Obstacle(500, 20, 153, 14);


// //top first level

// new Tile(150, -300, 25, 30, 3,0, 'stone');
// //top second level
// new Tile(150, -1100, 25, 30, 3,0, 'stone');


// //top 3rd level
// new Tile(150, -1900, 25, 30, 3,0, 'stone');


// new Obstacle(450, 388, 153, 14);
// new Food(400, 300, 20 , 20, "./images/creampuff.png" ) 
// new Food(700, 400,20,20, "./images/creampuff.png")
// new Food(900, 400,20,20, "./images/creampuff.png")

// new Food(200, 400,20,20, "./images/creampuff.png")

// //doublejumps
// new doubleJumpPickUp(50, 150,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, 110,20, 20, "./images/doublejump2.png") 

// new doubleJumpPickUp(100, 0,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(170, -100,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -200,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -300,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -400,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -500,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -600,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -700,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -800,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -900,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -1000,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -1100,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -1200,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -1300,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -1400,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -1500,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -1600,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -1700,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -1800,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -1900,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -2000,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -1200,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -1000,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -1100,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -1200,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -1000,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -1100,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -1200,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -1000,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -1100,20, 20, "./images/doublejump2.png") 
// new doubleJumpPickUp(100, -1200,20, 20, "./images/doublejump2.png") 


//Flying chillis or obstacle thingies that end the game

// new FlyingObstacle(1000, 100, 50, 20, "./images/flyingObstacles/carrot.png", 1000, 0, 5)
// new FlyingObstacle(1200, 100, 50, 20, "./images/flyingObstacles/salad.png", 1000, 0, 5)
// new FlyingObstacle(1400, 100, 50, 20, "./images/flyingObstacles/watermelon.png", 1000, 0, 5)
// new FlyingObstacle(1600, 100, 50, 20, "./images/flyingObstacles/banana.png", 1000, 0, 5)

//PLayerfigure and hungerbar
//Load PLayerfigure last

let playerFigureObject = new PlayerFigure(50, 350, 64, 64, "./images/BODY_Charlie_test2.png", 4, 1);

playerFigureObject.setBoundaryOffsets(5,20,2,20);

let hungerBar = new HungerBar(20,10,40, 100, "./images/hungerbar.png", "./images/hungerbarframe.png")

//End of Object Creation
///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///



// let keyUphappened = true

function keyEventDown(eventInformation) {
	// keyUphappened = false

	
	switch (eventInformation.key) {
		// case "w":
		// 	playerFigureObject.moveBy.left = 0;
		// 	playerFigureObject.moveBy.top = -2;
		// 	playerFigureObject.startAnimation(0,8);
		// 	break;
		case "a":
			playerFigureObject.moveBy.left = -5;
			playerFigureObject.moveBy.top = 0;
			// playerFigureObject.startAnimation(9,17);
			playerFigureObject.slideDuration = 0
			break;
		// case "s":
		// 	playerFigureObject.moveBy.left = 0;
		// 	playerFigureObject.moveBy.top = 2;
		// 	playerFigureObject.startAnimation(18,26);
		// 	break;
		case "d":
			playerFigureObject.moveBy.left = 5;
			playerFigureObject.moveBy.top = 0;
			// playerFigureObject.startAnimation(28,35);
			playerFigureObject.slideDuration = 0

			break;
		case  " ":
			playerFigureObject.jump()
			// playerFigureObject.startAnimation(0,0);


			break;
	}
}

function stopMovement() {
	playerFigureObject.isMoving = false;
	playerFigureObject.moveBy.left = 0;
	playerFigureObject.moveBy.top = 0;
}
function keyEventUp(eventInformation) {
	// keyUphappened = true

	switch (eventInformation.key) {
		// case "w":
		// 	stopMovement();
		// 	playerFigureObject.startAnimation(0,0);
		// 	break;
		case "a":
			playerFigureObject.moveBy.left += 5;
			playerFigureObject.slideDuration = 50
			playerFigureObject.startAnimation(9,9);
			break;
		// case "s":
		// 	stopMovement();
		// 	playerFigureObject.startAnimation(18,18);
		// 	break;
		case "d":
			playerFigureObject.slideDuration = 50
			playerFigureObject.moveBy.left += -5;


			playerFigureObject.startAnimation(27,27);
			break;
	}
}



// addEventListener("keypress", function(event){
// 	if(keyUphappened)keyEventDown(event)})

let myRequest = {
	currentRequest: 0,
	stopRequest: false,
}

window.addEventListener("keypress", keyEventDown)
window.addEventListener("keyup", keyEventUp);



let hungryInterval;

function startGame(){

	hungryInterval = setInterval(function(){hungerBar.getHungrier(0)},50)
	changeSound('./Audio/jazzmusic.mp3')

	document.querySelector('#startScreen').style.display = "none"

	document.querySelector('canvas').style.display = "block"
	// document.querySelector('#backgroundImage').style.display = "block"
	document.querySelector('#gameOver').style.display = "none"


	myRequest.stopRequest = false

	myRequest.currentRequest = window.requestAnimationFrame(gameLoop)
}





function gameOver(starve){
	// if(starve){
	// 	document.querySelector('#gameOver').style.backgroundImage = "url('./images/gameOverScreenStarve.png')"
	// }

	// window.cancelAnimationFrame(myRequest.currentRequest)
	// setTimeout(function () {document.querySelector('#gameOver').style.display = "flex"}, 500)

	// myRequest.stopRequest = true

	// clearInterval(hungryInterval)
	// console.log('sajkhakjdshjkhkjhjhkjssssssssssssssssssssssss')
}


let startButton = document.getElementById("startButton")
let aboutButton = document.getElementById("aboutButton")

let restartButton = document.getElementById("gameOver")

//start game with eventlistener
startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", function (e){
	location.reload()
	

	

});


let currSound = new Audio

let jumpSound = new Audio
jumpSound.src = './Audio/jump.mp3'



//function change the sound and play it




function changeSound(soundSrc){
	currSound = new Audio(soundSrc);
	currSound.play();
	// eval("jumpSound").play

	//https://stackoverflow.com/questions/46836692/delay-in-javascript-audio-playback

}


//changeSound('./audio/draw.mp3')







export{keyEventDown, hungerBar, camera, gameOver, myRequest, changeSound}

