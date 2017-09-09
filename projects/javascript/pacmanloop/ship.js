function ship(x, y){
  this.x = x;
  this.y = y;
  this.speed = 3
  this.projs = [];
  
  this.update = function(){
    if(mouseIsPressed && frameCount % 60 === 0){
      this.projs.push(new proj(this.x + 16, this.y - 10));
    }
    for(var i = 0; i < this.projs.length;i++){
      this.projs[i].move();
    }
    if(keyIsPressed){
      if(keyIsDown(65)){
        this.x -= this.speed;
      }
      if(keyIsDown(68)){
        this.x += this.speed;
      }
      if(keyIsDown(37)){
        this.x -= this.speed;
      }
      if(keyIsDown(39)){
        this.x += this.speed;
      }
    }
  }
  
  this.disp = function(){
    rect(this.x, this.y, 32, 10);
    
    for(var i = 0; i < this.projs.length;i++){
      this.projs[i].disp();
    }
  }
}