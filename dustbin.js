class Dustbin {
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        };
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        Matter.World.add(world22, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rect(pos.x,pos.y,this.width,this.height);
        image(this.image,1150,440,190,190);
        pop();
    }
}