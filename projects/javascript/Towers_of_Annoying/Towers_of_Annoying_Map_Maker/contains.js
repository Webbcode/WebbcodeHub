function contains(x1, y1, x2, y2, w2, h2){
  if(x1 <= x2 + w2 && y1 <= y2 + h2 && x1 >= x2 && y1 >= y2){
    return true;
  }else{
    return false;
  }
}