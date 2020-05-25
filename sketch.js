const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,platform; 
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10,polygon,sling;
// new Box(100,50,50,50);
function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground (width/2,height - 30,width,20);
  platform = new Ground(900,250,250,10);
  box1 = new Box(825,225,50,40);
  box2 = new Box(875,225,50,40);
  box3 = new Box(925,225,50,40);
  box4 = new Box(975,225,50,40);
  box5 = new Box(850,205,50,40);
  box6 = new Box(900,205,50,40);
  box7 = new Box(950,205,50,40);
  box8 = new Box(875,175,50,40);
  box9 = new Box(925,175,50,40);
  box10 = new Box(900,155,50,40);
  polygon = new Pol(100,50,50,50);
  sling = new SlingShot(polygon.body,{x:200, y:50});
}

function draw() {
  background(0,255,0);  
  Engine.update(engine);
  ground.display();
  platform.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  polygon.display();
  sling.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}
function keyPressed() {
 if (keyCode === 32) {
  sling.attach(polygon.body); 
  
 }
}