
function preload() {
    gardenImg=loadImage("images/garden.png")
    cat_rest=loadImage("images/cat1.png")
    rat_rest=loadImage("images/mouse1.png")
    mouse_moving=loadAnimation("images/mouse2.png", "images/mouse3.png")
    cat_moving=loadAnimation("images/cat2.png", "images/cat3.png")
    tom_happy=loadImage("images/cat4.png")
    jerry_happy=loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    tom=createSprite(800,700,100,20)
   
    tom.scale=0.15
    jerry=createSprite(150,700,20,50)
    

    jerry.scale=0.15

}

function draw() {
    tom.addImage(cat_rest)
    jerry.addImage(rat_rest)
    background(gardenImg);
    
    keyPressed();
if(tom.x-jerry.x<(tom.width+jerry.width)/2){
    tom.addImage("catmoving",tom_happy)
    jerry.addImage("mousemoving",jerry_happy)
    tom.velocityX=0
    tom.x=250
    
    
}


    drawSprites();
}


function keyPressed(){
    if(keyCode===RIGHT_ARROW||keyCode===LEFT_ARROW){
        jerry.addAnimation("mousemoving",mouse_moving)
        jerry.changeAnimation("mousemoving")
        jerry.frameDelay = 25
        tom.addAnimation("catmoving",cat_moving)
        tom.changeAnimation("catmoving")
        tom.velocityX=-2
        
    }
   

  


}
