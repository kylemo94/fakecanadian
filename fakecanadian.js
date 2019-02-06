function fakeCanadian(array) {
  const addString = ' eh';
  return _.map(array, function (string) { return string + addString; });
}
const array = ['Would you like to eat?', 'No thank you.'];
console.log(fakeCanadian(array));
