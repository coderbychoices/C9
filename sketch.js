var dog 

var dogImage

function preload(){
 dogImage = loadImage("dog.jpeg")

}

function setup() {
  createCanvas(400,400);

  dog = createSprite (100,100,10,10)
  dog.shapeColor = "brown"
  dog.addImage(dogImage)
}

function draw() 
{
  background("#8B0000");
  if(keyDown("left")){
    dog.x = dog.x -2
  }
  if(keyDown("right")){
    dog.x = dog.x +2
  }
  if(keyDown("up")){
    dog.y = dog.y -2
  }
  if(keyDown("down")){
    dog.y = dog.y +2
  }
  drawSprites()
}




