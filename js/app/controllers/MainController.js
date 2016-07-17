function MainController() {
    this.name = 'Steve Jobs';
}



angular
    .module('app')
    .controller('MainController', MainController);

function addNumbers(numberOne, numberTwo) {
  return parseFloat(numberOne,10) + parseFloat(numberTwo,10);
}