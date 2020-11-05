var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, bottom, right, left, bottomSprite, leftSprite, rightSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
		packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	

	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 

	 bottom=Bodies.rectangle(400,650,200,20,{isStatic:true});
	 World.add(world,bottom);

	 bottomSprite=createSprite(bottom.position.x,bottom.position.y,200,20);

	 left=Bodies.rectangle(300,605,20,100,{isStatic:true});
	 World.add(world,left);
	 leftSprite=createSprite(left.position.x,left.position.y,20,100);

	 right=Bodies.rectangle(500,605,20,100,{isStatic:true});
	 World.add(world,right);
	 rightSprite=createSprite(right.position.x,right.position.y,20,100);

	// left=Bodies.rectangle();
	console.log(helicopterSprite.x);
	console.log(helicopterSprite.y);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on pressing down arrow
	Matter.Body.setStatic(packageBody,false);
    
  }
}



