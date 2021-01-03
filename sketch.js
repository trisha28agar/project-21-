var bullet,wall,thickness
var speed,weight

function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90)
  weight=random(400,1500)
  bullet=createSprite(50,200,10,100)
  bullet.shapeColor="white"
  wall=createSprite(1200,200,thickness,height/2)
  bullet.velocityX=speed 
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
}

function draw() {
  background(255,255,255);  
  backgroundColor="black"

  if (wall.x-bullet.x <=(bullet.width/2+wall.width/2)){
  bullet.velocityX=0
  var deformation=0.5 * weight * speed * speed/22509
  if(deformation>180){
    var result=isTouching(wall,bullet)
    if (result===true){
      bullet.shapeColor="red"}
    }else {
      bullet.shapeColor="green"
  }
   
  }
  if(deformation<180 && deformation>100){
    bullet.shapeColor="blue"
  }
  if(deformation<100){
    
  }

  }
  drawSprites();
}