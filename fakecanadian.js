function fakeCanadian(array){
  let addString = 'eh';
  return _.map(array, function(string){return string + " " +addString});
}
let array = ['Would you like to eat?', 'No thank you.'];
console.log(fakeCanadian(array));