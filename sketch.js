// namespacing 
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState=1;
var engine, world;
var tunnel, tunnelImg;
var hook1, hook2,hook3, hookImg;
var alex, alexSprite;
var sling;
var hook1Sprite, hook2Sprite, hook3Sprite;
var lavaImg;
var score=0;
var swordImg, sword1, sword2, sword3, sword4;

function preload(){
   tunnelImg=loadImage("Images/DarkTunnel.jpeg");
   hookImg=loadImage("Images/hook.png");
   lavaImg = loadImage("Images/lava.png");
   swordImg = loadImage("Images/swords.png")
}

function setup(){
    createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;
    
    tunnel = createSprite(width/2, height/2, width, height);
    tunnel.addImage(tunnelImg);
    tunnel.scale = 0.65;
    tunnel.velocityX=-5;

    sword1 = createSprite(59,200,50,70);
    sword1.addImage(swordImg);
    sword1.scale = 0.15;

    sword2 = createSprite(59,250,50,70);
    sword2.addImage(swordImg);
    sword2.scale = 0.15;

    sword3 = createSprite(59,150,50,70);
    sword3.addImage(swordImg);
    sword3.scale = 0.15;

    sword4 = createSprite(59,300,50,70);
    sword4.addImage(swordImg);
    sword4.scale = 0.15;

    hook1 = new Hook(width/3, random(50,100));
    hook1Sprite = createSprite(width/3,hook1.body.position.y, 50, 70);
    hook1Sprite.visible= false;

    hook2 = new Hook(2*width/3, random(50,100));
    hook2Sprite = createSprite(2*width/3,hook2.body.position.y, 50, 70);
    hook2Sprite.visible= false;
  
    hook3 = new Hook(width, random(50,100));
    hook3Sprite = createSprite(width,hook3.body.position.y, 50, 70);
    hook3Sprite.visible= false;

    alex = new Alex();
    alexSprite = createSprite(alex.body.position.x,alex.body.position.y,alex.body.width, 40,70 )
    alexSprite.visible = false;
    sling = new Sling(alex.body,hook2.body)
}

function draw(){
    background(0);
    Engine.update(engine);

    //infinitybackground
    if(tunnel.x<280){
        tunnel.x=530;
    }

    score=score+frameCount/200;
    fill("orange");
    textSize(13);
    text("score:"+score,600,310);

    //resetting hook
    resetHook(hook1);
    resetHook(hook2);
    resetHook(hook3);
    hook1Sprite.x = hook1.body.position.x
    hook1Sprite.y = hook1.body.position.y
    hook2Sprite.x = hook2.body.position.x
    hook2Sprite.y = hook2.body.position.y
    hook3Sprite.x = hook3.body.position.x
    hook3Sprite.y = hook3.body.position.y

    alexSprite.x = alex.body.position.x;
    alexSprite.y = alex.body.position.y;


    if(alexSprite.isTouching(sword1)|| alexSprite.isTouching(sword2)|| alexSprite.isTouching(sword3) ||alexSprite.isTouching(sword4)){
     gameState=2;
    }


    if(gameState===2){
        background("pink");
        //making the right things Disappear 
        tunnel.visible = false;
        sword1.visible = false;
        lavaImg.visible = false;
        sword2.visible = false;
        sword3.visible = false;
        sword4.visible = false;
        fill("orange");
        textSize(25);
        text("GameOver",1500,200);
        text("Refresh The Page To Play Again",1400,260);
        camera.x=1600
    }

    //to make the movement occur
    if (mousePressedOver(hook1Sprite)){
        sling.swapHooks(hook1)
    } 
     if(mousePressedOver(hook2Sprite)){
        sling.swapHooks(hook2)
    } 
    if(mousePressedOver(hook3Sprite)){
        sling.swapHooks(hook3)
    } 
       
    drawSprites();

    // display lava and thorns
    imageMode(CENTER);
    image(lavaImg, 400, 370, 930,150);

    alex.display();
    sling.display();  
    hook1.display();
    hook2.display();  
    hook3.display();
    
}

function resetHook(hook){
    if(hook.body.position.x <= 0){
        hook.body.position.x=820;
        hook.body.position.y = random(50,100);   
    }
}