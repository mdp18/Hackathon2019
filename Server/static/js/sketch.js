class Player {
	constructor(filePath, x, y, orien) {
		this.filePath = filePath;
		this.x = x;
		this.y = y;
		this.player = loadImage(filePath);
		this.orientation = orien
	}
	show() {
		image(this.player, this.x, this.y);
		if (this.orientation == 'h') {
			this.player.resize(100, 30);
		} else {
			this.player.resize(30, 100);
		}
	}
}

let playerId = -1;
let playerArray = [];

let gameBG; //Game background image variable
let screenWidth; //Screen width variable recieved from inner
let screenHeight; //Screen height var recieved from inner

let rad = 20; // Width of the shape
let xpos, ypos; // Starting position of circle

let xspeed = 5.0; // Speed of the shape
let yspeed = 5.0; // Speed of the shape

let xdirection = 2; // Left or Right
let ydirection = 1; // Top to Bottom

function preload() {
	//soundFormats('mp3');
	//boingsound = loadSound('../assets/boing2.mp3'); //currently mp3 is set for multiple iterative sounds but should only be set for 1 iteration.
}


function setup() {
	screenHeight = window.innerHeight;
	screenWidth = screenHeight;
	let player1 = new Player('../assets/Player_1_Bar.png', 30, 0, 'h');
	let player2 = new Player('../assets/Player_2_VBar.png', 0, 30, 'v');
	let player3 = new Player('../assets/Player_3_Bar.png', 0, screenHeight - 30, 'h');
	let player4 = new Player('../assets/Player_4_VBar.png', screenWidth - 30, 0, 'v');

	playerArray.push(player1);
	playerArray.push(player2);
	playerArray.push(player3);
	playerArray.push(player4);

	gameBG = loadImage('../assets/Game_1_Background.png');
	//boingsound.setVolume(1); //sets volume of boing sounds to 2

	createCanvas(screenWidth, screenHeight); //Canvas Creation w/ 

	noStroke(); //disables the drawing of the outline of the ellipse.

	frameRate(60); //sets frame rate to 60fps. Please Keep!

	ellipseMode(RADIUS); //Possibly don't need??

	// Set the starting position of the ball
	xpos = width / 2;
	ypos = height / 2;

}

function draw() {
	gameBG.resize(300, 300);
	background(220);
	image(gameBG, (screenWidth / 2 - 150), (screenHeight / 2 - 150))
	//keyChecks();
	//moveBall();

	for (let i = 0; i < playerArray.length; i++) {
		playerArray[i].show();
	}
}
function keyChecks() { 
	// Check for no player
	if (playerId == -1) {
		return;
	}

	let playerIdx = playerId - 1;
	if (keyIsDown(UP_ARROW) && playerIdx % 2 == 1) {
		if (playerArray[playerIdx].y > 5) {
			playerArray[playerIdx].y = playerArray[playerIdx].y - 7;
		}
	}

	if (keyIsDown(DOWN_ARROW) && playerIdx % 2 == 1) {
		if (playerArray[playerIdx].y < (screenHeight - 105)) {
			playerArray[playerIdx].y = playerArray[playerIdx].y + 7;
		}
	}

	if (keyIsDown(LEFT_ARROW) && playerIdx % 2 == 0) {
		if (playerArray[playerIdx].x > 5) {
			playerArray[playerIdx].x = playerArray[playerIdx].x - 7;
		}
	}

	if (keyIsDown(RIGHT_ARROW) && playerIdx % 2 == 0) {
		if (playerArray[playerIdx].x < (screenWidth - 105)) {
			playerArray[playerIdx].x = playerArray[playerIdx].x + 7;
		}
	}
}
function collideCheck() {

//BLUE
if (xpos <= 30 && ypos <= playerArray[1].y + 100 && ypos + rad >= playerArray[1].y) {
    xdirection *= -1;
}
    //ORANGE
  if (xpos + rad >= screenWidth - 30 && ypos + rad <= playerArray[3].y + 100 && ypos - rad >= playerArray[3].y) {
	xdirection *= -1;
  }
  //RED
  if (ypos <= 30 && xpos <= (playerArray[0].x + 100) && ypos + rad >= playerArray[0].y) {
    ydirection *= -1;
  }
  //YELLOW
if (ypos + rad >= screenHeight - 30 && xpos <= (playerArray[0].x + 100) && ypos + rad >= playerArray[0].y) {
    ydirection *= -1;
  }
}

function moveBall() {
	if (xpos > width - rad || xpos < rad) {
		//sxdirection *= -1; //bounce the opposite ways
	}
	if (ypos > height - rad || ypos < rad) {
		//ydirection *= -1;
	}

	//calculates the next spot it's gonna go to and says the coord
	xpos = xpos + xspeed * xdirection;

	//calculates the next spot it's gonna go to and says the coord
	ypos = ypos + yspeed * ydirection;

	circle = ellipse(xpos, ypos, rad, rad);
}