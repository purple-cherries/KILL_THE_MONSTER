class Monster {
  constructor(x, y) {
    var options = {
        'restitution':0.2,
        'friction':1.5,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 100;
    this.height = 100;
    this.image = loadImage("Monster-01.png")
    
    World.add(world, this.body);
  }


  display(){
    var pos =this.body.position;

    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0, 0, this.width, this.height);
    pop();
  }
};

