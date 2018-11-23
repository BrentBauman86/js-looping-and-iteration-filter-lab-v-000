// Code your solution in this file

function findMatching(list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, startName) {
  let lengthOfName = startName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === startName;
  });
}

function matchName(name) {
  name.filter(function (driverName){
    return driverName === name
  });
}
