var tiles = [];
var tileWidth;
var tNum = 2;
var sTB1, sTB5;
var vB1, vB5, vB10, vB_1, vB_5, vB_10;
var currentTileInfo;
var modeP;

function setup() {
  createCanvas(500, 500);
  tileWidth = width / 25
  
  modeP = createP('TC mode');
  
  sTB1 = createButton('change subtype by 1');
  sTB5 = createButton('change subtype by 5');
  vB1 = createButton('change variant by 1');
  vB5 = createButton('change variant by 5');
  vB10 = createButton('change variant by 10');
  vB_1 = createButton('change variant by -1');
  vB_5 = createButton('change variant by -5');
  vB_10 = createButton('change variant by -10');
  sTB1.mousePressed(changeType1);
  sTB5.mousePressed(changeType5);
  vB1.mousePressed(changeVariant1);
  vB5.mousePressed(changeVariant5);
  vB10.mousePressed(changeVariant10);
  vB_1.mousePressed(changeVariant_1);
  vB_5.mousePressed(changeVariant_5);
  vB_10.mousePressed(changeVariant_10);
  
  currentTileInfo = createP('Tile Info: X: N/A Y: N/A Type: N/A Subtype: N/A Variant: N/A');
  
  tileType = [255, 0, color(255, 0, 0), color(0, 255, 0)];
  
  for(var x = 0; x < width / tileWidth;x++){
    for(var y = 0; y < width / tileWidth;y++){
      if(x === 0 || y === 0 || x === width / tileWidth - 1 || y === width / tileWidth - 1){
        tiles[x + y * (width / tileWidth)] = new square(1, x * tileWidth, y * tileWidth);
      }else{
        tiles[x + y * (width / tileWidth)] = new square(0, x * tileWidth, y * tileWidth);
      }
    }
  }
}

function draw() {
  for(var i = 0; i < tiles.length;i++){
    tiles[i].show();
  }
}

function mouseReleased(){
  if(tileMode === SVC){
    return;
  }
  
  for(var i = 0; i < tiles.length;i++){
    if(contains(mouseX, mouseY, tiles[i].x, tiles[i].y, width / 25, width / 25)){
      tiles[i].click();
    }
  }
}

function keyReleased(){
  if(keyCode === 77){
    var foundTile = 0;
    for(var i = 0; i < tiles.length;i++){
      if(contains(mouseX, mouseY, tiles[i].x, tiles[i].y, width / 25, width / 25) && foundTile !== 1){
        foundTile += tiles[i].alternateMode(0);
      }else{
        tiles[i].alternateMode(1);
      }
    }
    return;
  }
  
  var data = "";
  for(var i = 0; i < tiles.length;i++){
    if(i === 0){
      data += '[[' + tiles[i].id + ', ' + tiles[i].subtype + ', ' + tiles[i].variant + '], ';
    }else if (i != tiles.length - 1){
      data += '[' + tiles[i].id + ', ' + tiles[i].subtype + ', ' + tiles[i].variant + '], ';
    }else{
      data += '[' + tiles[i].id + ', ' + tiles[i].subtype + ', ' + tiles[i].variant + ']]';
    }
  }
  console.log(data);
}

function changeType1(){
  console.log('changed by 1');
  for(var i = 0; i < tiles.length;i++){
    if(tiles[i].mode === SVC){
      tiles[i].subtype++;
      if(tiles[i].subtype > tNum){
        tiles[i].subtype = 0;
      }
      tiles[i].updateInfo();
    }
  }
}

function changeType5(){
  for(var i = 0; i < tiles.length;i++){
    if(tiles[i].mode === SVC){
      tiles[i].subtype += 5;
      while(tiles[i].subtype > tNum || tiles[i].subtype < 0){
        if(tiles[i].subtype > tNum){
          tiles[i].subtype -= tNum + 1;
        }else if(tiles[i].subtype < 0){
          tiles[i].subtype += tNum
        }
      }
      tiles[i].updateInfo();
    }
  }
}

function changeVariant1(){
  for(var i = 0; i < tiles.length;i++){
    if(tiles[i].mode === SVC){
      tiles[i].variant++;
      tiles[i].updateInfo();
    }
  }
}

function changeVariant5(){
  for(var i = 0; i < tiles.length;i++){
    if(tiles[i].mode === SVC){
      tiles[i].variant += 5;
      tiles[i].updateInfo();
    }
  }
}

function changeVariant10(){
  for(var i = 0; i < tiles.length;i++){
    if(tiles[i].mode === SVC){
      tiles[i].variant += 10;
      tiles[i].updateInfo();
    }
  }
}

function changeVariant_1(){
  for(var i = 0; i < tiles.length;i++){
    if(tiles[i].mode === SVC){
      tiles[i].variant--;
      tiles[i].updateInfo();
    }
  }
}

function changeVariant_5(){
  for(var i = 0; i < tiles.length;i++){
    if(tiles[i].mode === SVC){
      tiles[i].variant -= 5;
      tiles[i].updateInfo();
    }
  }
}

function changeVariant_10(){
  for(var i = 0; i < tiles.length;i++){
    if(tiles[i].mode === SVC){
      tiles[i].variant -= 10;
      tiles[i].updateInfo();
    }
  }
}