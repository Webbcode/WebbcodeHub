function contains(x, y, rx, ry, rw, rh){
  if(x >= rx && x <= rx + rw && y >= ry && y <= ry + rh){
    return true;
  }else{
    return false;
  }
}