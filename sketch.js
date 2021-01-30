const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1;
var bg;



function preload(){
    bg = loadImage("Background.png")
 

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,500,900,15)
    groundM = new Ground(900,400,80,10)
    box1 = new Box(700,100,50,50)
    box2 = new Box(700,100,50,50)
    box3 = new Box(700,100,50,50)
    box4 = new Box(700,100,50,50)
    box5 = new Box(700,100,50,50)
    box6 = new Box(700,100,50,50)

    box7 = new Box(800,100,50,50)
    box8 = new Box(800,100,50,50)
    box9 = new Box(800,100,50,50)
    box10 = new Box(800,100,50,50)
    box11 = new Box(800,100,50,50)
    box12 = new Box(800,100,50,50)

    box13 = new Box(600,100,50,50)
    box14 = new Box(600,100,50,50)
    box15 = new Box(600,100,50,50)
    box16 = new Box(600,100,50,50)
    box17 = new Box(600,100,50,50)
    box18 = new Box(600,100,50,50)

    ball = new Hero(300,150)
    monster = new Monster(900,300)

    chain = new Chain(ball.body,{x:300,y:50})






}

function draw(){
    background(bg);
    Engine.update(engine);
    strokeWeight(0)
    ground.display();
    groundM.display();

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
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    ball.display();

    monster.display();

    chain.display();

  




}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

