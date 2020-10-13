const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

var ball;
var ground;

function setup() {
  createCanvas(400,400);

  engine= Engine.create();
  world= engine.world;

  var groundOptions ={
    isStatic: true
  }

ground=Bodies.rectangle(200,390,200,20,groundOptions)
World.add(world,ground);

var ballOptions={
  restitution:1
}

ball= Bodies.circle(200,100,50,ballOptions);
World.add(world,ball);

console.log(ball);
 
}

function draw() {
  background("black"); 
  
  Engine.update(engine);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,50);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

}