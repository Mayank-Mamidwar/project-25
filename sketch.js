
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var rect1;
var rect2;
var rect3;

function preload() {

}

function setup() {
	createCanvas(1200, 1200);
	


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,120);

	//Create the Bodies Here.

	rect1 = new Dustbin(1000, 1030, 225, 225);
//	rect2 = new Dustbin(900, 1090, 200, 200);
	//rect3 = new Dustbin(1101, 1090, 50, 200);
	
	paper = new Paper(100,500,40);

	Engine.run(engine);



}


function draw() {
 
	background(255);
	//rect( 900, 1125, 200, 20);
	//rect(900, 1050, 20, 100);
	//rect(1101, 1050, 20, 100); 
	



	keyPressed();



	drawSprites();

	rect1.display();
	// rect2.display();
	// rect3.display();
	ground.display();
	paper.display();

	function keyPressed(){
		if(keyCode	== UP_ARROW){
			Matter.Body.applyForce(paper.body,paper.body.position,{x:1, y:-12});
		}
	}
}




