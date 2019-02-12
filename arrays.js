var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat', 'skittles']
var Cadburry = 'foo';

function addElementToBeginningOfArray(chocolateBars, Cadburry) {
  return [Cadburry,...chocolateBars];
}

function  destructivelyAddElementToBeginningOfArray(chocolateBars, Cadburry) {
  chocolateBars.unshift(Cadburry);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, Cadburry) {
  return [...chocolateBars,Cadburry];
}

function destructivelyAddElementToEndOfArray(chocolateBars,Cadburry) {
  chocolateBars.push(Cadburry);
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index) {
  return 
}