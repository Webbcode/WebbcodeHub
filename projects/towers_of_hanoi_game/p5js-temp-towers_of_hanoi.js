var pegs = [];
var pegNum = 3;
var oPeg = null;
var ringNum = 3;
var moves = 0;
var slider;
var reset;
var sliderVal;

function setup() {
  createCanvas(windowWidth, 400);
  
  reset = createButton('Reset');
  slider = createSlider(3, 19, 3, 1);
  sliderVal = createP(slider.value());
  
  reset.mousePressed(resetGame);
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
  sliderVal.addClass('white');
}

function resetGame(){
  ringNum = slider.value();
  
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
    
    moves = 0;
    oPeg = null;
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
  
  
  sliderVal.html(slider.value());
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
