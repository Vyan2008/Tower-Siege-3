class box {
    constructor(x,y,width,height) {
      var options = {
          restitution:0.4,
          friction:0
      }
      this.visibility = 225;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3) {
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
      }
      else {
        World.remove(world, this.body);
        this.visibility = this.visibility-5;
      }
    }
    score() {
      if(this.visibility<0 && this.visibility>-105) {
        score++;
      }
    }
  };



 