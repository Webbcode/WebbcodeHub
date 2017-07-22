
function tile(x, y, id, subtype, variant){
  this.x = x;
  this.y = y;
  this.id = id;
  this.subtype = subtype;
  this.variant = variant;
  this.w = width / 25;
  
  this.show = function(){
    fill(tileType[id]);
    
    if(id === 1){
      image(tileImgs[1], this.x * this.w, this.y * this.w, this.w, this.w);
    }else if(id === 0){
      image(tileImgs[0], this.x * this.w, this.y * this.w, this.w, this.w);
    }else{
      rect(this.x * this.w, this.y * this.w, this.w, this.w);
    }
  }
  
  this.isSolid = function(){
    if(this.id > 0){
      return true;
    }
  }
}