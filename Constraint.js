class SlingShot{
    constructor (body1,point1){

        var options={
         bodyA:body1,
         pointB: point1,
         length: 75,
        stiffness: 0.04
        }
        this.sling=  Constraint.create(options)
        World.add (world,this.sling);
        this.pointB=point;
    }
    display(){
        if(this.sling.bodyA){
            var bodyA=this.sling.bodyA.position;
            var bodyB=this.pointB;
            strokeWeight(10);
            line(bodyA.x, bodyA.y, bodyB.x, bodyB.y);
        }
    }
    fly(){
        this.sling.bodyA=null;
    }
    attach(body){
        this.sling.bodyA=body;
    }
}
    