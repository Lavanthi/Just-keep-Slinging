class Sling {
    constructor(bodyA, bodyB){
        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.3,
            length : 150,
        }  
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    swapHooks(newHook){
      this.sling.bodyB =newHook.body;
    }


    display(){
       var pointA = this.sling.bodyA.position;
       var pointB = this.sling.bodyB.position;

       push ();
       fill("255,214,113");
       strokeWeight(4)
       line(pointA.x, pointA.y, pointB.x, pointB.y);
       pop ();
    }
   
}