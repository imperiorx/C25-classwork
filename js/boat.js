class boat{
    constructor(x,y,w,h,boatpos){
        this.body=Bodies.rectangle(x,y,w,h)
        this.width=w;
        this.height=h;
        this.boatposition=boatpos;
        this.image=loadImage("assets/boat.png")
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.image,0,this.boatposition,this.width,this.height)
        pop()
    }
}