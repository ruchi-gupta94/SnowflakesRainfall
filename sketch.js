var snowflaxes =[];


function setup() {
  createCanvas(400, 400);
   for (var i = 0; i < 1000; i++) {
     snowflaxes.push(new SnowFlakes());
   }

}

function draw() {
  background(220);
   for (var i = 0; i < 1000; i++) {
     snowflaxes[i].display();
    // snowflaxes[i].update();
   }

}