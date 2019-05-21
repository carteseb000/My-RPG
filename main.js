var Player = function(x,y,size,speed) {
  this.x = x;
  this.y = y;
  this.size = size; 
  this.speed = speed;
   this.update = function() {
      ellipse(this.x,this.y,this.size,this.size);
   };
};

var player = new Player(100,100,9,3);

draw = function() {
   player.update();
};
