'use strict';

/**
 * @ngdoc function
 * @name simonApp.controller:SimonCtrl
 * @description
 * # SimonCtrl
 * Controller of the simonApp
 */
angular.module('simonApp')
  .controller('SimonCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


$(document).ready(function(){
		
	$("#verde").click(function(){
	$("#titulo").text("VERDE");
		
	})
	
	$("#rojo").click(function(){
	$("#titulo").text("ROJO");
		
	})
	
	$("#amarillo").click(function(){
	$("#titulo").text("AMARILLO");
		
	})
	
	$("#azul").click(function(){
	$("#titulo").text("AZUL");
		
	})

})
