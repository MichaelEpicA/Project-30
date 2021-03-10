const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,holder;
var engine,world,platform,platform2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygonImage,slingShot;
function preload() {
polygonImage = loadImage("polygon.png");
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,40);
    platform = new Ground(500,240,260,20);
    platform2 = new Ground(850,150,200,20);

    //first level
    block1 = new Box(400,210,30,40);
    block2 = new Box(addX(block1),210,30,40);
    block3 = new Box(addX(block2),210,30,40);
    block4 = new Box(addX(block3),210,30,40);
    block5 = new Box(addX(block4),210,30,40);
    block6 = new Box(addX(block5),210,30,40);
    block7 = new Box(addX(block6),210,30,40);
    //second level
    block8 = new Box(430,172,30,40);
    block9 = new Box(addX(block8),172,30,40);
    block10 = new Box(addX(block9),172,30,40);
    block11 = new Box(addX(block10),172,30,40);
    block12 = new Box(addX(block11),172,30,40);
    //third level
    block13 = new Box(460,132,30,40);
    block14 = new Box(addX(block13),132,30,40);
    block15 = new Box(addX(block14),132,30,40);
    //fourth level
    block16 = new Box(490,93,30,40);

    //second platform
    //first level
    block17 = new Box(790,120,30,40);
    block18 = new Box(addX(block17),120,30,40);
    block19 = new Box(addX(block18),120,30,40);
    block20 = new Box(addX(block19),120,30,40);
    block21 = new Box(addX(block20),120,30,40);
    //second level
    block22 = new Box(820,80,30,40);
    block23 = new Box(addX(block22),80,30,40);
    block24 = new Box(addX(block23),80,30,40);
    //third level
    block25 = new Box(850,40,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);


    slingShot = new Slingshot(this.polygon, {x: 100, y: 200});


}

function draw(){
    background(15);
    Engine.update(engine);
    textSize(20);
    text("Drag the hexagonal stone and release it, to launch it towards the blocks.",200,20);
    text("Press space to try again!",800,200);
    ground.display();   
    platform.display();
    platform2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    imageMode(CENTER);
    image(polygonImage,polygon.position.x,polygon.position.y,40,40);

    slingShot.display();
}

function mouseDragged() {
    Matter.Body.setPosition(polygon,{x: mouseX, y: mouseY});
}

function mouseReleased() {
    slingShot.fly();
}

function keyPressed(){
    if(keyCode == 32) {
        slingShot.attach(this.polygon);
    }
}

function addX(previousblock) {
return previousblock.body.position.x + 30;
}