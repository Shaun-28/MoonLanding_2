var gameState = START;
var START = 0;
var PLAY = 1;
var END = 2;
var bg,backgroundImage
var rocket,rocketImage
var asteroid,asteroidImage
var moon,moonImage
var powerUp,powerUpImage
function preload(){
backgroundImage = loadImage('background.png')
rocketImage = loadImage('rocket.png')
asteroidImage = loadImage('Asteroid.png')
}
function setup(){
createCanvas(1300,700)

bg = createSprite(650,350,1300,700)
bg.addImage(backgroundImage)
bg.scale = 3
bg.y = bg.width/2
rocket = createSprite(630,550,20,20)
rocket.addImage(rocketImage)
rocket.scale = 0.05 
}
function draw(){
  background(0);
  if(gameState === START){
    console.log("gameState start")
    textFont("bold");
    textSize(20)
    text("PRESS SPACE TO START",900,500);
    if(keyDown("UP_ARROW")){
      gameState = PLAY;
    }

  }
  if(gameState === PLAY){
  spawnAsteroids();
  console.log("gameState play")
  if(keyDown("LEFT_ARROW")){
    rocket.x = rocket.x+-2;
  }
  if(keyDown("RIGHT_ARROW")){
    rocket.x = rocket.x+2;
  }
  bg.velocityY = 2
  if(bg.y<0){
    bg.y = 600;
  }}
  drawSprites()
}
function spawnAsteroids(){

if(frameCount%20 === 0)
{var x = Math.round(random(0,1300))
  var y = Math.round(random(-20,-10))
  asteroid = createSprite(x,y,50,50)
  asteroid.addImage(asteroidImage)
  asteroid.scale = 0.1
  asteroid.velocityY = 2
}
}

