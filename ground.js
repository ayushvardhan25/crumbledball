class ground1 {
    constructor(x, y, width, height) {
      var options = {
        isStatic:true, 
        'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, width,height)
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      
      rectMode(CENTER);
      fill('yellow');
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  