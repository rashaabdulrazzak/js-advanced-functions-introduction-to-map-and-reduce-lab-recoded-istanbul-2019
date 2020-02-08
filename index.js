// Your code here
const mapToNegativize = function(sourceArray){
  return sourceArray.map(element => element * -1)
}
const mapToNoChange= function(sourceArray) {
    return sourceArray.map(element => element)
}

const mapToDouble=function(sourceArray) {
    return sourceArray.map(element => element * 2)
}

const  mapToSquare = function(sourceArray) {
    return sourceArray.map(element => element * element)
}

const reduceToTotal = function(sourceArray, startingPoint = 0) {
    return sourceArray.reduce((total, element) => total + element, startingPoint);
}
const reduceToAllTrue = function(sourceArray){
  let newarray = [];
  for (let val of sourceArray){
    if(val === false) newarray.push(val)
  }
  if(newarray.length > 0 ) return false;
  else return true ;
}
const reduceToAnyTrue = function(sourceArray){
  let newarray = [];
  for (let val of sourceArray){
    if(val === true) newarray.push(val)
  }
  if(newarray.length > 0 ) return true;
  else return false ;
}