class Hero {
    constructor(x, y) {
      var options = {
          'restitution':0.2,
          'friction':1.5,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 100, 100, options);
      this.width = 250;
      this.height = 110;
      this.image = loadImage("Superhero-02.png")

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("red");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  