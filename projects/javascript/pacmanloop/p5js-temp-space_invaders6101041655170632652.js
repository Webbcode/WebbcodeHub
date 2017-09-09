var invaders = [];
var invadNum = 50;
var projectiles = [];
var spaceship;
var state = 0;
var score = 0;


function setup() {
  
  
  
  
  for(var i = 0;i < invadNum;i++){
    invaders[i] = new invader((i % 10) * 40 + 16, floor(i / 10) * 40 + 16);
  }
  
  spaceship = new ship(width / 2 - 16, height - 32);
}

function draw() {
  background(0, 0, 0);
  
  
  if(state === 0){
    
    textSize(32);
    fill(255);
    invadBuffer.text("Press any key to continue", width / 2 - 32 * 25 / 4, height / 2);
    
//     stroke(255);
//     line(0, height / 2, width, height / 2);
//     line(width / 2, 0, width / 2, height);
    
    
  }else if(state === 1){
    
    textSize(16);
    fill(255);
    text("Score:" + score, 0, 16);
    
    for (var i = 0;i < invadNum;i++){
      
      
        invaders[i].move();
        invaders[i].disp();
        
        
      
      if(deadNum === invadNum){
        state === 3
      }
      
      if(deadNum !== 0){
        invaders[i].speed = 1.5 + 3 * deadNum / invadNum;
      }
    }
    
    spaceship.update();
    spaceship.disp();
  }else if(state === 2){
    
    textSize(32);
    fill(255);
    text("Game over", width / 2 - 32 * 9 / 4.5, height / 2);
    
//     stroke(255);
//     line(0, height / 2, width, height / 2);
//     line(width / 2, 0, width / 2, height);
    
  }else if(state === 3){
    
    textSize(16);
    fill(255);
    text("Score:" + score, 0, 16);
    
    textSize(32);
    fill(255);
    
    invadBuffer.text("You won!(a round)", width / 2 - 32 * 17 / 4.5, height / 2);
    
//     stroke(255);
//     line(0, height / 2, width, height / 2);
//     line(width / 2, 0, width / 2, height);
    
  }
  
}



function keyPressed() {
  if(state === 0){
    state = 1;
  }else if(state === 2){
    state = 1;
    
    for(var i = 0;i < invadNum;i++){
      invaders[i] = new invader((i % 10) * 40 + 16, floor(i / 10) * 40 + 16);
    }
    
    spaceship = new ship(width / 2 - 16, height - 32);
    
    score = 0;
    
  }else if(state === 3){
    state = 1;
    
    for(var i = 0;i < invadNum;i++){
      invaders[i] = new invader((i % 10) * 40 + 16, floor(i / 10) * 40 + 16);
    }
  
    spaceship = new ship(width / 2 - 16, height - 32);
  
  }
  
  return false;
}
