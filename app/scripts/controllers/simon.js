'use strict';

/**
 * @ngdoc function
 * @name simonApp.controller:SimonCtrl
 * @description
 * # SimonCtrl
 * Controller of the simonApp
 */
angular.module('simonApp')
  .controller('SimonCtrl', function ($scope) {

  	$scope.colores = [];
  	$scope.titulo ='SIMON';
  	$scope.acumuladorverde = 0;
  	$scope.acumuladorrojo = 0;
  	$scope.acumuladoramarillo = 0;
  	$scope.acumuladorazul = 0;


  	$scope.play = function(color){

  			if(color=='verde'){
  				$scope.acumuladorverde = $scope.acumuladorverde + 1;
  			}

  			if(color=='rojo'){
  				$scope.acumuladorrojo = $scope.acumuladorrojo + 1;
  			}

  			if(color=='amarillo'){
  				$scope.acumuladoramarillo = $scope.acumuladoramarillo + 1;
  			}

  			if(color=='azul'){
  				$scope.acumuladorazul = $scope.acumuladorazul + 1;
  			}

  			$scope.colores.push(color);
  	}

  	$scope.reset = function(){
  			$scope.colores = [];
  			$scope.acumuladorverde = 0;
  			$scope.acumuladorrojo = 0;
  			$scope.acumuladoramarillo = 0;
  			$scope.acumuladorazul = 0;
  	}



	/*$(document).ready(function(){
		
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

	})*/

  	});



