const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground;
var fruit;
var rope;
var link;

function setup() {
  createCanvas(500, windowHeight-1);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground();

  fruit = Bodies.circle(50, 200, 10);
  World.add(world, fruit)

  rope = new Rope(8, {x: 150, y: 50});

  Matter.Composite.add(rope.body, fruit);

  link = new Link(rope, fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50);
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.display();

  fill("yellow");
  ellipse(fruit.position.x, fruit.position.y, 20,20);
  
  rope.show();

}




