'use strict';

angular.
	module('CupofNews').
	component('filter', {
		templateUrl: 'app/templates/menu.template.html',
		controller: function FilterController($scope) {
			var self = this;
			$scope.items = [
				{
					text: 'Home',
					url: '/'
				}
			]
		}
	});