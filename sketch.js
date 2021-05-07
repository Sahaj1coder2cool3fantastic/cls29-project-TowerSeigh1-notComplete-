const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,slingShot;
var ground1,ground2;
var block8, block9, block10, block11, block12, block13, block14, block15, block16;

function preload(){
  var picture = loadImage('polygon.png');
}

function setup() {
  createCanvas(800,400);


  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  var ball = Bodies.circle(50,200,20);
  World.add(world,ball);

slingShot = new SlingShot(this.ball,{x:100,y:200});

  ground1 = new Ground(400,400,800,70);
  ground2 = new Ground(400,249,400,20);

block8 = new Box(330,235,30,40);
block9 = new Box(360,235,30,40);
block10= new Box(390,235,30,40);
block11= new Box(420,235,30,40);
block12= new Box(450,235,30,40);

block13= new Box(360,195,30,40);
block14= new Box(360,195,30,40);
block15= new Box(420,195,30,40);

block16= new Box(330,155,30,40);


}

function draw() {
  background(255,255,255);  

block8.display();
block9.display();
block10.display();
block11.display();
block12.display();

block13.display();
block14.display();
block15.display();

block16.display();

ground1.display();
ground2.display();
polygon.display();

imageMode(CENTER);
image(picture,ball.postion.x,ball.position.y,30,30);
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

