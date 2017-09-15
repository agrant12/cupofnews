'use strict';

angular.
	module('CupofNews').
	component('menu', {
		templateUrl: 'app/templates/menu.template.html',
		controller: function MenuController($scope) {
			var self = this;
			$scope.items = [
				{
					text: 'Home',
					url: '/'
				}
			]
		}
	});