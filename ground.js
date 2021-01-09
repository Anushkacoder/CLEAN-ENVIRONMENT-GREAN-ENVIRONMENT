class Ground {
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        Matter.World.add(world22, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        stroke("brown");
        fill("saddlebrown");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}