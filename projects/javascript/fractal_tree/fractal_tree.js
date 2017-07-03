var angle;
var minLen = 4;
var angSlider;
var minSlider;

function setup() {
  createCanvas(windowWidth, 500);
  
  minSlider = createSlider(2, 99, 4, 1);
  angSlider = createSlider(0.001, 0.1, 0.01, 0.001);
  
  angle = radians(90);
}

function draw() {
  angle += angSlider.value();
  minLen = minSlider.value();
  
  background(51);
  translate(width / 2, height);
  stroke(255);
  branch(lenSlider.value());
}

function branch(len){
  line(0, 0, 0, -len);
  translate(0, -len);
  if(len > 4){
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}
