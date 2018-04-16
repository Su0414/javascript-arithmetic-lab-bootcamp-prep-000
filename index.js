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
  
  if(isNaN(test)){
    return "NaN as appropriate";
  }
  
  if(Math.log10(test)){
    return 0;
  }
  
  return test;

}



