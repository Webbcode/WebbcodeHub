function peg(x, w, h, rings){
  this.x = x;
  this.y = height - h;
  this.w = w;
  this.h = h;
  this.b = width / 6 - width / 20;
  this.hovering = false;
  
  if(rings !== null){
    var ringsArray = [];
    var maxW = 100 + 12 * (ringNum - 5);
    var minW = 40;
    for(var num = 0; num < rings.length; num++){
      var wid = num * (maxW - minW) / rings.length + minW;
      ringsArray[num] = new ring(this.x - wid / 2 + this.w / 2, wid, 10, num);
      ringsArray[num].show();  
    }
    this.rings = ringsArray;
    this.rings.reverse();
  }else{
    this.rings = [];
  }
  
  this.show = function(){
    fill(165,42,42);
    noStroke();
    
    if(oPeg === this){
      fill(205,82,82);
    }else if(this.hovering){
      fill(125,2,2);
    }
    
    rect(this.x, this.y, this.w, this.h);
  }
  
  this.click = function(x, y){
    var xb = this.x - this.b;
    var yb = this.y - this.b;
    var wb = this.w + this.b * 2;
    var hb = this.h + this.b;
    
    if(oPeg !== this && oPeg === null && contains(x, y, xb, yb, wb, hb) && this.rings.length > 0){
      oPeg = this;
      return true;
    }else if(contains(x, y, xb, yb, wb, hb) && oPeg !== this){
      if(this.getTop() === undefined){
        append(this.rings, oPeg.getTop());
        shorten(oPeg.rings);
        
        var ring = this.rings[this.rings.length - 1];
        ring.x = this.x - ring.w / 2 + this.w / 2;
        
        oPeg = null;
        
        moves++;
        return true;
      }else if(oPeg.getTop().val < this.getTop().val){
        append(this.rings, oPeg.getTop());
        shorten(oPeg.rings);
        
        var ring = this.rings[this.rings.length - 1];
        ring.x = this.x - ring.w / 2 + this.w / 2;
        
        oPeg = null;
        
        moves++;
        return true;
      }
    }else if (oPeg === this && contains(x, y, xb, yb, wb, hb)){
      
      var ring = this.rings[this.rings.length - 1];
      ring.x = this.x - ring.w / 2 + this.w / 2;
      
      oPeg = null;
      return true;
    }else{
      return false;
    }
  }
  
  this.getTop = function(){
    if(this.rings.length === 0){
      return undefined;
    }
    
    return this.rings[this.rings.length - 1];
  }
  
  this.hoverCheck = function(x, y){
    var xb = this.x - this.b;
    var yb = this.y - this.b;
    var wb = this.w + this.b * 2;
    var hb = this.h + this.b;
    
    if(contains(x, y, xb, yb, wb, hb)){
      this.hovering = true;
      return true;
    }else{
      this.hovering = false;
      return false;
    }
  }
  
  this.ringShow = function(){
    if(!this.rings){
      return;
    }
    
    for(var i = 0; i < this.rings.length; i++){
      var ring = this.rings[i];
      if(oPeg === this && i === this.rings.length - 1){
        ring.x = mouseX - ring.w / 2;
        ring.show(mouseY - ring.h / 2);
      }else{
        ring.show(height - i * ring.h - ring.h);
      }
    }
  }
}