let player1;
let p1x;
let p1y;

let player2;
let p2x;
let p2y;

let player3; 
let p3x;
let p3y;

let player4;
let p4x;
let p4y;

let gameBG;
let screenWidth;
let screenHeight;

let rad = 20; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 5.0; // Speed of the shape
let yspeed = 5.0; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

function setup() {
  
  player1 = loadImage('Player_1_Bar.png');
  player2 = loadImage('Player_2_VBar.png');
  player3 = loadImage('Player_3_Bar.png');
  player4 = loadImage('Player_4_VBar.png');
  gameBG = loadImage('Game_1_Background.png');
  
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
  
  p1x = 0;
  p1y = 0;
  
  p2x = 0;
  p2y = 0;
  
  p3x = 0;
  p3y = screenHeight - 30;
  
  p4x = screenWidth - 30;
  p4y = 0;
  
  
  createCanvas(screenWidth, screenHeight);
  
  noStroke();
  frameRate(60);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
  
}

function draw() {
  gameBG.resize(300,300);
  background(220);
  image(gameBG, (screenWidth/2-150), (screenHeight/2 - 150))
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;
  image(player1,p1x, p1y);
  image(player2,p2x, p2y);
  image(player3,p3x, p3y);
  image(player4,p4x, p4y);
  player1.resize(100, 30);
  player2.resize(30, 100);
  player3.resize(100, 30);
  player4.resize(30, 100);
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }
  ellipse(xpos, ypos, rad, rad);
  
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

function keyPressed() {
  
  if(keyCode == LEFT_ARROW) {
  }
  if(keyCode == RIGHT_ARROW) {
  }
}