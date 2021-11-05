
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball,ball1;
var ground;
var Ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }

   
   var ground_options ={
     isStatic: true
   };

  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball1 = Bodies.circle(300,20,10,ball_options);
  World.add(world,ball1);

  Ground = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,Ground);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball1.position.x,ball1.position.y,10);
  rect(ground.position.x,ground.position.y,400,20);
  rect(Ground.position.x,Ground.position.y,200,20);
 
}

