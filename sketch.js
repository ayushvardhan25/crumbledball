
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var line1 ;
var line2;
var line3;
var line4;
var world, engine;

function preload()
{
	
}

function setup() {
	createCanvas(1440, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball=new paper(200,450,40);
//World.add(world,ball);
ground = new ground1(720,650,1440,20)

line1 = new Dustbin(1200,540,20,200)
line1.shapeColor = 'green'
line2 = new Dustbin(1100,630,150,20)
line3 = new Dustbin(1080,540,20,200)
//line4 =  new Dustbin(1200,550,200,200)
//keyPressed();

Engine.run(engine);
}


function draw() {
 
  background('green');
 ball.display(); 
 ground.display();
line1.display();
line2.display();  
line3.display();
//line4.display();
drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:153,y:-153});
}


}

