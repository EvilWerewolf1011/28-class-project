
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tree;

function preload()
{
	
	backgroundImg = loadImage("ground.PNG");

}

function setup() {
	createCanvas(1350, 650);

	tree = new Tree(10,10,600,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(680,height,1350,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);  
  
  ground.display();
 
  tree.display();

}



