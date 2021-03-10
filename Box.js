class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    //this.color = color;
    this.visibility = 255;
  }
  display() {
    if(this.body.speed < 3) {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      //fill(this.color);
      pop();
    } else {
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility - 5;
      pop();
    }
  }
};

