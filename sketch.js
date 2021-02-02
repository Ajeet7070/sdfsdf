var cat, cat1I, catA, cat4I;
var garden, gardenI;
var mouse,mouse1I, mouseA, mouse4I
function preload() 
{
    cat1I = loadAnimation("images/cat1.png");
    cat4I = loadAnimation("images/cat4.png");
    mouse1I = loadAnimation("images/mouse1.png");
    mouse4I = loadAnimation("images/mouse4.png");

    gardenI = loadImage("images/garden.png");

    catA = loadAnimation("images/cat2.png","images/cat3.png");
    mouseA = loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    //garden = createSprite(450,300);
    //garden.addImage(gardenI);
    

    cat = createSprite(870, 600);
    cat.addAnimation("imgc",cat1I);
    cat.scale = 0.15;

    mouse = createSprite(200, 600);
    mouse.addAnimation("imgm",mouse1I);
    mouse.scale = 0.15;


}

function draw() {
    background(gardenI);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        cat.velocityX = 0;
        cat.addAnimation("lastImgCat",cat4I);
        cat.changeAnimation("lastImgCat");
       cat.x=250;

        mouse.addAnimation("lastImgJerry",mouse4I);
       mouse.changeAnimation("lastImgJerry" );
        
    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW)
  {
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catA);
      cat.changeAnimation("catRunning");
      cat.scale = 0.15;

      mouse.addAnimation("jumping",mouseA);
      mouse.changeAnimation("jumping");
  }

}