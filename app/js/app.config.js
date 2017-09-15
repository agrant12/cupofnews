angular.
	module('CupofNews').
	config(['$locationProvider', '$routeProvider',
	function config($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');

		$routeProvider.
			when('/', {
			  template: '<sources></sources>'
			}).
			when('/source/:sourceId', {
			  template: '<source-detail></source-detail>'
			}).
			otherwise('/');
		}
	]);