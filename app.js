
//Módulo de la aplicación
var app= angular.module('menuApp',[]);

//Controllador de contenido
app.controller("contentController",function($scope,$http){

	$scope.news=[];

	
	//Método http para obtener las vistas desde el archivo JSON ubicado en assets/json

	//Arquitectura MV VM

	$http({
  	method: 'GET',
	  url: 'assets/json/news_mock.json'
	}).then(function successCallback(response) {

	   //variable de scope que contiene todo el objeto de las noticias	

	   //Se accede al atributo data que contiene el contenido del JSON
	   $scope.news=response.data;
	   
	  }, function errorCallback(response) {
	   	 console.log('Algo malo ha ocurrido '+response);
	  });

	$scope.titleChange=function(title){

		//Cambio de titulo Según el articulo seleccionado

		$scope.title=title;

	};


});


