class SnowFlakes{
    constructor(){
          this.x = random(3, 400);
          this.y = random(0, 400);
          this.image =loadImage("snow.png");
          }

          update() {
              this.y = this.y + 50

              if (this.y > 400) {
                  this.y = random(0, 100);
                  this.x = random(3, 400)
              }
          }

          display() {
              push();
              imageMode(CENTER);
              image(this.image,this.x,this.y,40,40);
              pop();
          }
    
}