class Ground{

constructor(x,y,w,h){
this.x = x
this.y = y
this.w = w
this.h = h
var options = {
    
isStatic:true }
this.body = Matter.Bodies.rectangle(x,y,w,h,options)
World.add(world,this.body)
}
display(){
var groundPos = this.body.position 
push()
translate(groundPos.x,groundPos.y)
rectMode(CENTER)
strokeWeight(4)
fill("blue")
rect(0,0,this.w,this.h)
pop()
}






}

