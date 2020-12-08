class Drop{
    construter(x,y){
        var options ={    
       friction:0.001,
       restitution:0.1,
        }
        this.rain=Bodies.cirlce(x,y,5,options)
        this.radius=5
        World.add(world,this.rain)
    }
    updateY(){
        if(this.rain.position>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }
showDrop(){
    fill("blue")
    ellpiseMode(CENTRE)
    ellpise(this.rain.position.x,this.rain.position.y,this.radius,this.radius)
}
}