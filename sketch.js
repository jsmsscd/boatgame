const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,
  world,
  backgroundImg;
  

function preload() {
  backgroundImg = loadImage("./assets/background2.gif");
 }

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  engine = Engine.create();
  world = engine.world;
 
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, displayWidth, displayHeight);

 
}

