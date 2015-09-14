describe('Directive: newsArticle', function() {
    var $rootScope, $scope, $compile, element;
    var mocks;

    beforeEach(function() {
        module('MSAAgency', 'MSAAgency.directives');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $compile = $injector.get('$compile');

            // Mocks
            mocks = {};
            mocks.articles = [
                {title: 'Decendants', date: '2015-10-07', image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                {title: 'ABCD', date: '2015-10-07', image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                {title: 'Amy Tinkham', date: '2015-10-07', image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            ];

            // $scope
            $scope.article = mocks.articles[0];

            element = angular.element('<news-article data="article"></news-article>');
            element = $compile(element)($scope);
        });
    });

    describe('isolate scope', function() {
        it('should pass in article data', function() {
            expect(element.isolateScope().data).toEqual(mocks.articles[0]);
        });
    });
});
