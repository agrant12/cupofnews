angular.
module('sourceDetail').
component('sourceDetail', {
	templateUrl: 'app/templates/source-detail.template.html',
	controller: ['$routeParams', '$http',
		function SourceDetailController($routeParams, $http) {
			var self = this;
			this.sourceId = $routeParams.sourceId;
			$http.get('https://newsapi.org/v1/articles?source=' + this.sourceId + '&apiKey=' + apiKey).then(function(response) {
				self.articles = response.data.articles;
				console.log(self.articles);
			});

		}
	]	
});