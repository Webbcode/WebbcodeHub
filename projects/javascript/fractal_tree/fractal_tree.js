var angle;
var angSlider;

function setup() {
  createCanvas(windowWidth, 500);
  
  angSlider = createSlider(0.001, 0.1, 0.01, 0.001);
  
  angle = radians(90);
}

function draw() {
  angle -= angSlider.value();
  
  background(51);
  translate(width / 2, height);
  stroke(255);
  branch(100);
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
