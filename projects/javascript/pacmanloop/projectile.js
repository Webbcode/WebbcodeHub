function proj(x, y){
  this.x = x;
  this.y = y;
  this.speed = -3;
  this.dead = false;
  
  this.move = function(){
    if(this.dead){
      return;
    }
    
    if(this.y < -10){
      this.dead = true;
    }
    
    this.y += this.speed;
    
    for ( var i = 0; i < invaders.length;i++){
      inv = invaders[i]
      if(collideRectCircle(inv.x, inv.y, 32, 32, this.x, this.y, 10) && inv.dead === false){
        inv.dead = true;
        this.dead = true;
      }
    }
  }
  
  this.disp = function(){
    if(this.dead){
      return;
    }
    fill(255);
    arc(this.x , this.y, 10, 10, 0, TWO_PI);
  }
  
}