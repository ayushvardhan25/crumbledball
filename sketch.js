
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var line1 ;
var line2;
var line3;
var world, engine;

function preload()
{
	
}

function setup() {
	createCanvas(1440, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball=new paper(200,450,30);
//World.add(world,ball);
ground = new ground1(720,650,1440,20)

line1 = new Dustbin(1200,540,20,200)
line2 = new Dustbin(1120,630,150,20)
line3 = new Dustbin(1050,540,20,200)

//keyPressed();

Engine.run(engine);
}


function draw() {
 
  background(0);
 ball.display(); 
 ground.display();
line1.display();
line2.display();  
line3.display();
drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
}


}

