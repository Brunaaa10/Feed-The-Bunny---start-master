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
var bgImg;
var fruitImg;
var bunny;
var eat;
var sad;
var blink;
var button1;

var air;
var eatSound;
var sadSound;
var ropeCut;
var sound1;
var cutSound;

function preload(){
  bgImg = loadImage("./images/background.png");
  eat = loadAnimation("./images/eat_0.png", "./images/eat_1.png", "./images/eat_2.png", "./images/eat_3.png", "./images/eat_4.png");
  sad = loadAnimation("./images/sad_1.png", "./images/sad_2.png", "./images/sad_3.png");
  blink = loadAnimation("./images/blink_1.png", "./images/blink_2.png", "./images/blink_3.png");
  fruitImg = loadImage("./images/melon.png");

  //carreagando os sons
  air = loadSound("./sounds/air.wav");
  eatSound = loadSound("./sounds/eating_sound.mp3");
  sadSound = loadSound("./sounds/sad.wav");
  ropeCut = loadSound("./sounds/rope_cut.mp3");
  sound1 = loadSound("./sounds/sound1.mp3");
  cutSound = loadSound("./sounds/Cutting Through Foliage.mp3");

 blink.playing = true;
 eat.playing = true;
 sad.playing = true;

 sad.looping = false;
 eat.looping = false;


}

function setup() {
  createCanvas(500, windowHeight-1);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground();

  fruit = Bodies.circle(50, 200, 10);
  World.add(world, fruit)

  //botões
  button1 = createImg("./images/cut_btn.png");
  button1.position(130, 50);
  button1.size(50,50);
  button1.mouseClicked(drop);

  rope = new Rope(8, {x: 150, y: 50});

  Matter.Composite.add(rope.body, fruit);

  link = new Link(rope, fruit);

  blink.frameDelay = 20;
  eat.frameDelay = 20;
  sad.frameDelay = 20;

  bunny = createSprite(170, height - 80, 100, 100);
  bunny.scale = 0.2;
  bunny.addAnimation("blink", blink);

  bunny.addAnimation("eat", eat);
  bunny.addAnimation("sad", sad);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50);
}

function draw() {
  background(51);
  sound1.play();
  image(bgImg, width/2, height/2, width, height);
  Engine.update(engine);

  ground.display();

  fill("yellow");

  image(fruitImg, fruit.position.x, fruit.position.y, 60,60);
  
  rope.show();

  drawSprites();

}

function drop(){
  rope.break();
  link.detach();

  link = null;

}


