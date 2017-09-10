var invaders = [];
var invadNum = 50;
var spaceship;
var canva;

function setup() {
  
  for(var i = 0;i < invadNum;i++){
    invaders[i] = new invader((i % 10) * 40 + 16, floor(i / 10) * 40 + 16);
    
    
  }
  
  spaceship = new ship(width / 2 - 16, height - 32);
}

function draw() {
  if(!canvas){
    canva = document.getElementById("defaultCanvas0");
    
    canva.resizeCanvas(windowWidth, windowHeight);
  }else{
    return;
  }
  background(0, 0, 0);
  
  for (var i = 0;i < invadNum;i++){
    
    invaders[i].move();
    invaders[i].disp();
    
    if(deadNum !== 0){
      invaders[i].speed = 1.5 + 1.5 * deadNum / invadNum;
    }
  }
  
  spaceship.update();
  spaceship.disp();
}
