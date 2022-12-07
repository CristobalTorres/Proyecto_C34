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
var ball;
var blower;
var blowerMouth;
var button;

//lo que hice 
function preload(){
backgroundImg =loadImage("./assets/background.png")

}

function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);

  button = createImg('click.png');
button.position(20,30);
button.size(50,50);

//segundo reto
 button.mouseClicked(blow);



}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  blower.show();
  ball.show();
  blowerMouth.show();
}

function blow() {
  
  // Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: 0, y: -0.05 });
  
  // Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: 0.05, y: 0.05 });
  
  Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: 0, y: 0.05 });
  
  // Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: -0.05, y: 0.05 });

}
