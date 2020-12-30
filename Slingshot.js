class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 10
        }
        this.image=loadImage("./sprites/sling1.png")
        this.image2=loadImage("./sprites/sling2.png")
        this.image3=loadImage("./sprites/sling3.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image,200,100,50,120)
        image(this.image2,165,90,50,80)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(42,28,4)
            line(pointA.x-15, pointA.y, pointB.x, pointB.y);
            line(pointA.x-15, pointA.y, pointB.x+40, pointB.y-10);
            image(this.image3,pointA.x-17, pointA.y, 10, 30)
            
        }
    }
    
}