var deadNum = 0;
var invadW = 16
function invader(x, y){
  this.x = x;
  this.y = y;
  this.w = invadW;
  this.speed = 1.5;
  this.path = [];
  this.pathPos = 0;
  this.dead = false;
  this.addedP = false;
  
  this.path[0] = (width - 64 - 11 * this.w - this.w / 2);
  this.path[1] = this.w / 2 + this.w / 4;
  this.path[2] = -(width - 64 - 11 * this.w - this.w / 2);
  this.path[3] = this.w / 2 + this.w / 4;
  
  this.tP = this.path[this.pathPos] + this.x;
  
  this.move = function(){
    
    if(this.dead){
      if(!this.addedP){
        deadNum++;
        this.addedP = true;
      }
      return;
    }
    
    if(this.pathPos % 2 === 0){
      if(abs(this.x - this.tP) <=3){
        this.x = this.tP;
        this.pathPos+=1;
        
        if(this.pathPos > 3){
          this.pathPos = 0;
        }
    
        this.tP = this.path[this.pathPos] + this.y;
      }else if(this.x >= this.tP){
        this.x -= this.speed;
      }else if(this.x <= this.tP){
        this.x += this.speed;
      }
      
      
    }else{
      
        if(abs(this.y - this.tP) <=3){
          this.y = this.tP;
          this.pathPos+=1;
          if(this.pathPos > 3){
            this.pathPos = 0;
          }
          this.tP = this.path[this.pathPos] + this.x;
        }else if(this.y >= this.tP){
          this.y -= this.speed;
        }else if(this.y <= this.tP){
          this.y += this.speed;
        }
      }
  }
  
  this.disp = function(){
    if(this.dead){
      return;
    }
    rect(this.x, this.y, this.w, this.w);
  }
}
