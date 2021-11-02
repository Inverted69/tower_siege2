class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic : false
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
         this.image= loadImage("block.png");
         this.visiblity = 255;
        World.add(world, this.body);
      }

      display(){

        var pos= this.body.position;
        imageMode(CENTER);

        if(this.body.speed <2){
          var angle = this.body.angle;
           push();
           translate(pos.x, pos.y);
           rotate(angle);
           imageMode(CENTER);
           image(this.image, 0, 0, this.width, this.height);
           pop();
        }
        else{
          World.remove(world, this.body);
          push();
          tint(255,this.visiblity);
          this.visiblity=this.visiblity-5;
          image(this.image, pos.x, pos.y,this.width, this.height);
          pop();
        }
      }
}