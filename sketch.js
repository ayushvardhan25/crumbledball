
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var line ;
var line2;
var line3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball=new paper(50,375,30,30);
//World.add(world,ball);
ground = new ground1(400,400,800,20)

line1 = new Dustbin(650,380,150,20)
line2 = new Dustbin(570,340,20,100)
line3 = new Dustbin(720,340,20,100)

//keyPressed();
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

