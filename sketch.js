var background,drops,boy

function preload(){
   boy =loadImage("walking_1.png")
}

function setup(){
    var canvas = createCanvas(500,400)
  drops=new Drop(100,100) 
    
}

function draw(){
  
 background=background("black")   





 drops.display();
}   

