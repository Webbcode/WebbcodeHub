function ring(x, w, h, val){
  this.x = x;
  this.w = w;
  this.h = h;
  this.val = val;
  
  this.show = function(y){
    fill(0, 255, 0);
    stroke(0);
    
    rect(this.x, y, this.w, this.h);
  }
}