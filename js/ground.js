class Ground{
  constructor(){
    this.ground = Bodies.rectangle(width/2,height -10, width, 20,{isStatic:true})
    World.add(world,this.ground)
  }

  display(){
    var pos = this.ground.position
    noStroke();
    fill("#626b78")
    rectMode(CENTER)
    rect(pos.x,pos.y,width,20)
  }
}