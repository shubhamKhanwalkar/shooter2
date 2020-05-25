class Pol{
    constructor(x, y, sides,radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.polygon(x, y, sides,radius, options);
        //this.width = width;
       // this.height = height;
        this.image = loadImage("poly.png");
       this.sides = sides;
       this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        fill("blue");
       // rect(0,0, this.sides, this.radius);
        image(this.image, 0, 0, this.width, this.height);
       
        pop();
      }
}