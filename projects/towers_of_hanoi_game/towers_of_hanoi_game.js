var pegs = [];
var pegNum = 3;
var oPeg = null;
var ringNum = 19;
var moves = 0;

function setup() {
  //creatP('Towers of Hanoi');
  createCanvas(windowWidth, 400);
  
  for(var i = 0; i < pegNum;i++){
    if(i === 0){
      var vals = [];
      for(var j = 0; j < ringNum;j++){
        vals[j] = j;
      }
      vals.reverse();
      pegs[i] = new peg(width / 4 * i + width / 4, 20, 200, vals);
    }else{
      pegs[i] = new peg(width / 4 * i + width / 4, 20, 200, null);
    }
  }
}

function draw() {
  background(51);
  
  for(var i = 0; i < pegNum;i++){
    pegs[i].show(); 
  }
  
  
  for(var i = 0; i < pegNum;i++){
    pegs[i].ringShow(); 
  }
  
  var size = 20;
  textSize(size);
  
  fill(255);
  text(moves, width / 2 - size / 2 * moves.toString().length / 2, 50);
  
}

function mousePressed(){
  for(var i = 0; i < pegNum;i++){
    if(pegs[i].click(mouseX, mouseY)){
      break;
    } 
  }
}

function mouseMoved(){
  for(var i = 0; i < pegNum;i++){
    console.log(pegs[i].hoverCheck(mouseX, mouseY));
  }
}