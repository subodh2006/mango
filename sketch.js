
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5;
var boy,boyImg;
var ground1;
var world,engine;
var tree,treepic; 
var stonepic,stone;
var  chain;

function preload(){
treepic = loadImage("plucking+mangoes/images/tree.png"); 
boyImg = loadImage("plucking+mangoes/images/boy.png");	
stonepic = loadImage("plucking+mangoes/images/stone.png");
}

function setup() {
createCanvas(800, 700);

engine = Engine.create();
world = engine.world;

Engine.run(engine);

tree = createSprite(540,300,20,20);
tree.addImage(treepic);
tree.scale = 0.5;

stone = createSprite(200,200);
stone.addImage(stonepic);
stone.scale = 0.1;

chain = new Chain(stone.body,{x:200,y:200});

mango1 = new Mango(600,150,30);
mango2 = new Mango(750,200,45);



boy = createSprite(200,540);
boy.addImage(boyImg);
boy.scale = 0.1;


ground1 = new Ground(400,620,800,20);





}


function draw() {
   background("lightgreen");
  rectMode(CENTER);
  ground1.display();
  mango1.display();
  mango2.display();
  chain.display();
  drawSprites();
 
}



