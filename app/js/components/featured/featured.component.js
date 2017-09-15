'use strict';

angular.
module('CupofNews').
component('latestArticles', {
	templateUrl: 'app/templates/featured.template.html',
	controller: function LatestArticlesController($http) {
		var self = this;
		$http.get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=95be7c9f148d4f8794ac5c5f53d19d88').then(function(response) {
			self.articles = response.data.articles;
		});
	}
});