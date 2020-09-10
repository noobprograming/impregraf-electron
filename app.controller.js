var app = angular.module('app', ['ui.router']);

myApp.config(function($stateProvider) {
  var helloState = {
    name: 'dashboard',
    url: '/dashboard',
    template: ''
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});