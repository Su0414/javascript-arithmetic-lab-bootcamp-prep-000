// Mathematical operations practice lab

function add(a, b){
  return a+b;
}

function subtract(a, b){
  return a-b;
}

function multiply(a, b){
  return a*b;
}

function divide(a, b){
  return a/b;
}

function inc(a){
  return a+1;
}

function dec(a){
  return a-1;
}

function makeInt(a){
  var test = parseInt(a);
  if(test.isNaN()){
    return "NaN as appropriate";
  }else{
    return test;
  }
}



