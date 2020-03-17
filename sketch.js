
var Red = 0;;
var Green = 255;
var Blue = 15;
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

var Rand;

var ellipse;

function setup(){
  createCanvas(canvasWidth,canvasHeight);

 ellipse = createSprite (World.mouseX,300,50,50);
 background (Red,Green,Blue);
}

function draw(){
   Rand = Math.random(1,5);

   var mousePosition = World.mouseX;
   var scale = canvasWidth/255;

   var colorNo = Math.round(mousePosition/scale);

   Red = colorNo;
   Green = colorNo - Rand;
   Blue = colorNo + Rand;

   background (Red,Green,Blue);
}