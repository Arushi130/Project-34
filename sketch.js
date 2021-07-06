var dog;
var happyDog;
var Database;
var foodS;
var foodStock;

function foodSTock()
foodStock=database.ref('food');
foodStock.on("value,readStock");



//Create variables here

function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
  
}
var firebaseConfig = {
  apiKey: "AIzaSyCZb12UcyOe_7Op_6QIVDhYAN8pcOcBIlM",
  authDomain: "virtual-pet-efd74.firebaseapp.com",
  databaseURL: "https://virtual-pet-efd74-default-rtdb.firebaseio.com",
  projectId: "virtual-pet-efd74",
  storageBucket: "virtual-pet-efd74.appspot.com",
  messagingSenderId: "781832164161",
  appId: "1:781832164161:web:c7546a1a6f0bb27c6cc7c0"
}
function draw() {  
  background("yellow",46,139,87);

  if(keyDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(happydog);
  }

  drawSprites();
  //add styles here

}



