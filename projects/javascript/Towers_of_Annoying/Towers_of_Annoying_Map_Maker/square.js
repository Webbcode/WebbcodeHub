var tileType = [];
var SVC = 1;
var TC = 0;
var tileMode = TC;

function square(startId, x, y){
  this.id = startId;
  this.x = x;
  this.y = y;
  this.mode = 0;
  this.subtype = 0;
  this.variant = 0;
  
  this.show = function(){
    fill(tileType[this.id]);
    
    if(this.mode === SVC && tileMode === SVC){
      strokeWeight(5);
      
      rect(this.x + 2.5, this.y + 2.5, width / 25 - 5, width / 25 - 5);
    }else{
      
      this.mode = TC;
      
      strokeWeight(1);
      
      rect(this.x, this.y, width / 25, width / 25);
    }
  }
  
  this.click = function(){
    this.id++;
    if(this.id === tileType.length){
      this.id = 0;
    }
  }
  
  this.alternateMode = function(m){
    if(this.mode === TC && m === 0){
      this.mode = SVC;
      tileMode = SVC;
      
      currentTileInfo.html('Tile Info: X: ' + (this.x / tileWidth) + ' Y: ' + (this.y / tileWidth) + ' Type: ' + this.id + ' Subtype: ' + this.subtype + ' Variant: ' + this.variant);
      
      modeP.html('SVC mode');
      
      return 1;
    }else if(this.mode === SVC && m === 0){
      this.mode = TC;
      tileMode = TC;
      
      currentTileInfo.html('Tile Info: X: N/A Y: N/A Type: N/A Subtype: N/A Variant: N/A');
      
      modeP.html('TC mode');
      
      return 1;
    }else if(this.mode === SVC && m === 1){
      this.mode = TC;
      
      return 0;
    }
  }
  
  this.updateInfo = function(){
    console.log("called");
    currentTileInfo.html('Tile Info: X: ' + (this.x / tileWidth) + ' Y: ' + (this.y / tileWidth) + ' Type: ' + this.id + ' Subtype: ' + this.subtype + ' Variant: ' + this.variant);
  }
}