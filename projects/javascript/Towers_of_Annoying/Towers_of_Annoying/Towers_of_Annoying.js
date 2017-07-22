var tileWidth;
var level;
var tileType;
var tileImgs = [];

function setup() {
  tileType = [255, 0, color(255, 0, 0), color(0, 255, 0)];
  
  createCanvas(32 * 25, 32 * 25);
  tileWidth = 3;
  
  tileImgs[0] = loadImage('https://webbcode.github.io/WebbcodeHub/projects/javascript/Towers_of_Annoying/images/floor.png')
  tileImgs[1] = loadImage('https://webbcode.github.io/WebbcodeHub/projects/javascript/Towers_of_Annoying/images/Wall.png')
  
  /*for(var x = 0; x < width / tileWidth;x++){
    for(var y = 0; y < width / tileWidth;y++){
      if(x === 0 || y === 0 || x === width / tileWidth - 1 || y === width / tileWidth - 1){
        tiles[x + y * (width / tileWidth)] = new tile(x, y, 0);
      }else{
        tiles[x + y * (width / tileWidth)] = new tile(x, y, 1);
      }
    }
  }*/
  
  for(var i = 0; i < levelsData.length;i++){
    addLevelData(levelsData[i]);
  }
  
  level = new level();
}

function draw() {
  background(51);
  
  level.show();
  
}