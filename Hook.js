class Hook{
    constructor(x,y){
        var options={
            density : 1.5,
            isStatic : true
        } 
        this.body = Bodies.rectangle(x, y, 50, 75, options); 
        this.image = loadImage("Images/hook.png");
        World.add(world, this.body);

    }
    display(){
       this.body.position.x = this.body.position.x - 8;
       var pos = this.body.position;
       imageMode(CENTER);
       push();
       image(this.image, pos.x, pos.y, 50, 70);
       pop();
    
    }
   
}