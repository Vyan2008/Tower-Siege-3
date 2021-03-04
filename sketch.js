const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var polygonImage;
var score = 0;
function preload() {

polygonImage = loadImage("polygon.png");

}
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    

    
    stand1 = new Ground (600,600,250,20);
    block1 = new box (600,565,25,50);
    block2 = new box (700,565,25,50);
    block3 = new box (500,565,25,50);
    block4 = new box (550,565,25,50);
    block5 = new box (650,565,25,50);
    block6 = new box (675,565,25,50);
    block7 = new box (525,565,25,50);
    block8 = new box (575,565,25,50);
    block9 = new box (625,565,25,50);

    block10 = new box (525,525,25,50);
    block11 = new box (550,525,25,50);
    block12 = new box (575,525,25,50);
    block13 = new box (600,525,25,50);
    block14 = new box (625,525,25,50);
    block15 = new box (650,525,25,50);
    block16 = new box (675,525,25,50);

    block17 = new box (550,485,25,50);
    block18 = new box (575,485,25,50);
    block19 = new box (600,485,25,50);
    block20 = new box (625,485,25,50);
    block21 = new box (650,485,25,50);

    block22 = new box (575,445,25,50);
    block23 = new box (600,445,25,50);
    block24 = new box (625,445,25,50);
  
    block25 = new box (600,405,25,50);
   
  
    



    //block15 = new box (587.5,525,25,50);
   
    polygon = Bodies.circle(50,500,20);
    World.add(world,polygon);

    slingShot = new slingshot (this.polygon,{x:100,y:500})

}

function draw(){
    background("purple");
    Engine.update(engine);
textSize(50);
text("Score:"+score,600,200);

    stand1.display();
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

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();

   
   
    
    
    image(polygonImage,polygon.position.x,polygon.position.y,50,50);
    slingShot.display();

   

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY}); } 

    function mouseReleased(){
         slingShot.fly(); 
        }