var database;
var foodS,foodStock;
var dog,dogImage,dogHappyImage;

function preload() {
  dogImage = loadImage("Dog.png");
  dogHappyImage = loadImage("happydog.png");
}

function setup() {

  database = firebase.database();
	createCanvas(1400, 650);
  dog = createSprite(1200,370,50,50);
  dog.addImage(dogImage);
  dog.scale = 0.3;
  foodStock = database.ref('Food'); 
  foodStock.on("value",readStock)

  database.ref('/').update({Food:30})

  var button = createButton(' Feed Bolt⚡ ');
  var button2 = createButton(' Add Food ');

  button.position(650,100);
  button2.position(750,100);
        
  button.mousePressed(function() {
    writeStock(foodS);
    dog.addImage(dogHappyImage);
  })
      
  button2.mousePressed(function() {
    writeStock2(foodS);
    foodS = foodS + 1;
  })

  food = new Food();
}
function draw() {  
  background(46, 139, 87);

  drawSprites();
  textSize(30);
  stroke("black");
  fill("orange");
  database.ref('/').update({Food:foodS})

  food.display();
  if(foodS<=0) {
    text("no food left!",1100,70);
  }

  if(foodS>=75) {
    text("Excess food!",1100,70);
  }
   
}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {
  if(x<=0) {
    x = 0;
    
  }
  else {
    x = x - 1;
  }

  database.ref('/').update({Food:x})
}

function writeStock2(y) {
  if(y>=75) {
    y = 74;
  }

  database.ref('/').update({Food:y})
}