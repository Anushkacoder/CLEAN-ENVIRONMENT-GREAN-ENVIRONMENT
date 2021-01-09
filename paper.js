class Paper {
    constructor(x,y,radius){
    var options = {
        isStatic : true,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
    };
    this.body = Bodies.circle(x,y,radius,options); 
    this.radius = radius;
    this.image = loadImage("paper.png");
    Matter.World.add(world22, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        fill("white");
        imageMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
        image(this.image,pos.x,pos.y,50,60);
        pop();
    }
}