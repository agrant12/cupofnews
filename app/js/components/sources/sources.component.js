angular.
	module('CupofNews').
	component('sources', {
		templateUrl: 'app/templates/sources.template.html',
		controller: function SourcesController($http, $scope, $filter) {
			var self = this;
			category = '';
			$scope.changedValue = function(category) {
				category = $scope.text;
				$http.get('https://newsapi.org/v1/sources?category=' +  category + '&language=en').then(function(response) {
					self.sources = response.data.sources;
				});
			};
			$http.get('https://newsapi.org/v1/sources?category=' +  category +'&language=en').then(function(response) {
				self.sources = response.data.sources;
			});
		}
	}).
	filter('filterSources', function() {
		return function(data, category) {
			var filteredItems = [];
			if (category === undefined) {
				category = 'general';
			}
			angular.forEach(data, function(item, index) {
				if (item.category === category) {
					filteredItems.push(item);
				}
			});
			return filteredItems;
		}
	});