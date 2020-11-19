var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var survivalTime = 0;


function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.13;

  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  ground.shapeColor = "Brown";
  
  score = 0;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
 
}

function draw() {
background("lightGreen");
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")){
    monkey.velocityY = -12 ; 
   }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);  
  
   food(); 
 Obstacle();
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.round(random(frameCount/getFrameRate()));
  text("Survival Time: " + survivalTime, 100,50)
  
  drawSprites(); 
  }

function food(){
  if(frameCount%80===0){
    banana = createSprite(200,100);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale  = 0.1;
    
    banana.velocityX = -5;
    banana.setLifetime = 80;
    
    FoodGroup.add(banana);
  }
}

function Obstacle(){
  if(frameCount%300===0){
    obstacle = createSprite(400,325);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    
    obstacle.velocityX = -5;
    obstacle.setLifetime = 10;
    
    obstacleGroup.add(obstacle);
    
  } 
}


