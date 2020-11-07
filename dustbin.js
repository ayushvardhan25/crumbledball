class Dustbin {
    constructor(x, y,width,height ) {
      var options = {
        isStatic:true, 
        
      }
      this.body = Bodies.rectangle(x, y, width,height, options)
      this.width = width;
      this.height = height;
      this.image = loadImage("dusabin1.png");
      World.add(world, this.body);
    }
    display(){
     
     
     
      imageMode(CENTER);
      fill('yellow');
      image(this.image,1200, 550, this.width, this.height);
     
    }
  };
  