angular.module('ncsApp', ['firebase']).
		value('fbURL', 'https://angularjs-projects.firebaseio.com/').
				factory('Projects', function(angularFireCollection, fbURL) {
					return angularFireCollection(fbURL);
				}).config(function($routeProvider) {
					$routeProvider.
							when('/', {controller:HomeCtl, templateUrl:'./html/Welcome.html'}).
							when('/product', {controller:ProductCtl, templateUrl:'./html/product.html'}).
							when('/about', {controller:AboutCtl, templateUrl:'./html/AboutUs.html'}).
							when('/projects', {controller:DefaultCtl, templateUrl:'./html/Projects.html'}).
							when('/ourexp', {controller:DefaultCtl, templateUrl:'./html/OurExperties.html'}).
							when('/carrer', {controller:DefaultCtl, templateUrl:'./html/Carrer.html'}).
							when('/contactus', {controller:DefaultCtl, templateUrl:'./html/ContactUs.html'}).
							when('/conforreq', {controller:DefaultCtl, templateUrl:'./html/RequestForServices.html'}).
							otherwise({redirectTo:'/'});
				});
 
function HomeCtl($scope) {
	$scope.value="Home page" ;
}
     
function ProductCtl($scope) {
	$scope.value="Product Page" ;
}
 
function AboutCtl($scope) {
	$scope.value="About Page" ;
}
     
function DefaultCtl($scope) {
	$scope.value="No link called so far ....." ;
}