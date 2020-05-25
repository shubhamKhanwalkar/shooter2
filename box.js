class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity = 255;
       // this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
      
       
       // image(this.image, 0, 0, this.width, this.height);
       if (this.body.speed<5) {
           push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("blue");
        rect(0,0, this.width, this.height); 
        pop();
       }
       else{
        World.remove(world,this.body);
       push();
       this.visiblity = this.visiblity - 5;
       tint(255,this.visiblity);
        
      
      pop();
    }
      }
}