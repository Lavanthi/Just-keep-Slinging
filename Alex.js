class Alex {
    constructor(){
        var options={
            density : 1.5,
           
        } 
        this.body = Bodies.rectangle(520, 250, 40, 70, options); 
        this.image = loadImage("Images/alex.png");
        
        World.add(world, this.body);
    }
    display(){
       var pos = this.body.position;
      
       imageMode(CENTER);
       push();
       image(this.image, pos.x, pos.y, 50, 100);
       pop();
    
    }
   
}