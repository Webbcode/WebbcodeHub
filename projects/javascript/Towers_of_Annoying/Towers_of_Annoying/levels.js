function level(fullLoad){
  this.tiles = [];
  this.tileIds;
  
  if(fullLoad){
  }else{
    eval(getRandomLevelData());
    this.tiles = [];
    for(var i = 0; i < this.tileIds.length;i++){
      this.tiles[i] = new tile(i % 25, floor(i / 25), this.tileIds[i][0], this.tileIds[i][1], this.tileIds[i][2]);
    }
  }
  
  this.show = function (){
    for(var i = 0; i < this.tiles.length;i++){
      this.tiles[i].show();
    }
  }
}