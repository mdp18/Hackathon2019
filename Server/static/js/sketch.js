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

var playerId = -1;
var playerArray = [];

let gameBG; //Game background image variable
let screenWidth; //Screen width variable recieved from inner
let screenHeight; //Screen height var recieved from inner

let rad = 20; // Width of the shape
let xpos, ypos; // Starting position of circle

let xspeed = 5.0; // Speed of the shape
let yspeed = 5.0; // Speed of the shape

let xdirection = 0; // Left or Right
let ydirection = 0; // Top to Bottom

function setup() {
	screenHeight = window.innerHeight;
	screenWidth = screenHeight;
	var player1 = new Player('../static/assets/paddle_p1.svg', 0, screenHeight - 30, 'h');
	var player2 = new Player('../static/assets/paddle_p2.svg', screenWidth - 30, 0, 'v');
	var player3 = new Player('../static/assets/paddle_p3.svg', 0, 0, 'h');
	var player4 = new Player('../static/assets/paddle_p4.svg', 0, 0, 'v');

	playerArray.push(player1);
	playerArray.push(player2);
	playerArray.push(player3);
	playerArray.push(player4);

	gameBG = loadImage('../static/assets/Game_1_Background.png');

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
	keyChecks();
	moveBall();

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
		socket.emit('paddle', 0)
	}

	if (keyIsDown(DOWN_ARROW) && playerIdx % 2 == 1) {
		if (playerArray[playerIdx].y < (screenHeight - 105)) {
			playerArray[playerIdx].y = playerArray[playerIdx].y + 7;
		}
		socket.emit('paddle', 1)
	}

	if (keyIsDown(LEFT_ARROW) && playerIdx % 2 == 0) {
		if (playerArray[playerIdx].x > 5) {
			playerArray[playerIdx].x = playerArray[playerIdx].x - 7;
		}
		socket.emit('paddle', 0)
	}

	if (keyIsDown(RIGHT_ARROW) && playerIdx % 2 == 0) {
		if (playerArray[playerIdx].x < (screenWidth - 105)) {
			playerArray[playerIdx].x = playerArray[playerIdx].x + 7;
		}
		socket.emit('paddle', 1)
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
		xdirection *= -1; //bounce the opposite ways
	}
	if (ypos > height - rad || ypos < rad) {
		ydirection *= -1;
	}

	//calculates the next spot it's gonna go to and says the coord
	xpos = xpos + xspeed * xdirection;

	//calculates the next spot it's gonna go to and says the coord
	ypos = ypos + yspeed * ydirection;

	circle = ellipse(xpos, ypos, rad, rad);
}

function keyPressed(){
	if(keyCode == RETURN){
		xdirection = 2.0;
		Ydirection = 1.0;
	}
}