let player1; //Player 1 horizontal image bar
let p1x;
let p1y;

let player2; //Player 2 vertical image bar
let p2x;
let p2y;

let player3; //Player 3 image bar
let p3x;
let p3y;

let player4; //Player 4 vertical image bar
let p4x;
let p4y;

let gameBG; //Game background image variable
let screenWidth; //Screen width variable recieved from inner
let screenHeight; //Screen height var recieved from inner

let rad = 20; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 5.0; // Speed of the shape
let yspeed = 5.0; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

function setup() {
  
  player1 = loadImage('../static/assets/Player_1_Bar.png');
  player2 = loadImage('../static/assets/Player_2_VBar.png');
  player3 = loadImage('../static/assets/Player_3_Bar.png');
  player4 = loadImage('../static/assets/Player_4_VBar.png');
  gameBG = loadImage('../static/assets/Game_1_Background.png');
  
  
  screenHeight = window.innerHeight;
  screenWidth = screenHeight;
  
  p1x = 0;
  p1y = 0;
  
  p2x = 0;
  p2y = 0;
  
  p3x = 0;
  p3y = screenHeight - 30;
  
  p4x = screenWidth - 30;
  p4y = 0;


  createCanvas(screenWidth, screenHeight); //Canvas Creation w/ 
  
  noStroke(); //disables the drawing of the outline of the ellipse.
  
  frameRate(60); //sets frame rate to 60fps. Please Keep!
  
  ellipseMode(RADIUS); //Possibly don't need??
  
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
  
}

function draw() {
  gameBG.resize(300,300);
  background(220);
  image(gameBG, (screenWidth/2-150), (screenHeight/2 - 150))
  

  drawPlayers()
  keyChecks();
  moveBall();
}

function drawPlayers() {
  image(player1,p1x, p1y);
  image(player2,p2x, p2y);
  image(player3,p3x, p3y);
  image(player4,p4x, p4y);
  player1.resize(100, 30);
  player2.resize(30, 100);
  player3.resize(100, 30);
  player4.resize(30, 100);
}

function keyChecks(){ //use for testing
  if(keyIsDown(UP_ARROW)) {
    if(p2y != 0) {
      p2y = p2y-5;
    }
  }
  if(keyIsDown(DOWN_ARROW)) {
    if(p2y != (screenHeight-100)) {
      p2y = p2y+5;
    }
  }
  if(keyIsDown(LEFT_ARROW)) {
    if(p1x != 0) {
      p1x = p1x-5;
    }
  }
  if(keyIsDown(RIGHT_ARROW)) {
    if(p1x != (screenWidth-100)) {
      p1x = p1x+5;
    }
  }
}

function moveBall(){
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;
  
  
  ellipse(xpos, ypos, rad, rad);
}