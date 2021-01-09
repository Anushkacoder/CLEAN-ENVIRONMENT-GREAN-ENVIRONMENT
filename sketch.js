var World = Matter.World;
var Bodies = Matter.Bodies;
var Engine = Matter.Engine;
var world22, engine22;
var bgimage, dustbin, paper, dustbinIMG;

function preload(){
   bgimage = loadImage("bgimage.jpg");
   dustbinIMG = loadImage("dustbingreen.png");
}
function setup(){
createCanvas(1250,550);
engine22 = Engine.create();
world22 = engine22.world;    

fill("white");
trash = new Paper(150,510,20);
dustbin1 = new Dustbin(1150,538,170,15);
dustbin2 = new Dustbin(1060,430,15,185);
dustbin3 = new Dustbin(1240,430,15,185);
ground = new Ground(width/2,540,width,20);
}

function draw(){
	background('black');
	imageMode(CENTER);
	image(bgimage,width/2,height/2,width,height);
	rectMode(CENTER);
	trash.display();
	dustbin1.display();
	ground.display();
	textSize(30);
	textFont("Algerian");
	fill("darkblue")
	text("LET'S KEEP OUR ENVIRONMENT CLEAN & GREEN",280,50);
	fill("orangered");
	text("PRESS THE UP ARROW TO TRASH THE TRASH !! ",290,100);
	textSize(20);
	textFont("Arial");
	fill("yellow");
	text("TRASH",120,548);
	text("DUSTBIN",1110,548);
	Engine.update(engine22);
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	 Matter.Body.setStatic(trash.body, false);
	 Matter.Body.applyForce(trash.body,trash.body.position,{x: 87, y: -87});
	 }
}



