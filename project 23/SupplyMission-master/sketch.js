var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, box1, box2, box3;
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
	

	

	var pac = {
		isStatic: true


	}
	var pac ={
		restitution : 0

	}


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , pac);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 ,  {isStatic:true} );
	 World.add(world, ground);
	 
	 box1 = Bodies.rectangle(400,620,60,20, {isStatic:true} );
	 box1.shapeColor = (240);
     World.add(world, box1);
    
    box2 = Bodies.rectangle(370,650,20,60, {isStatic:true} );
    World.add(world,box2);

    box3 = Bodies.rectangle(430,650,20,60, {isStatic:true} );
	World.add(world,box3); 
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if(keyPressed === DOWN_ARROW) {
	pac = {

    isStatic:false

	}
    
  }



  drawSprites();
 
}

function keyPressed() {
 if (keyCode === "a") {
	pac = {

    isStatic: false

	}
    
  }
}



