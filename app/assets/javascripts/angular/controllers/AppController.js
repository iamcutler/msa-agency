angular.module('MSAAgency.controllers')
.controller('AppController', AppController);

function AppController() {
  var vm = this;
  
  vm.toggleNavigation = function() {
    console.log('YAY');
  };
}