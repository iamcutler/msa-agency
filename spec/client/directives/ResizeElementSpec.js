describe('Directive: ResizeElement', function() {
    var $rootScope, $scope, $compile, element, elementWithNoWidth, elementWithNoHeight;
    var elementWithOffSetBottom, elementWithOffsetTop, elementWithOffSetTop;

    beforeEach(function() {
        module('MSAAgency', 'MSAAgency.directives');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $compile = $injector.get('$compile');

            element = angular.element('<div id="container" resize-element></div>');
            elementWithNoWidth = angular.element('<div resize-element resize-width="false"></div>');
            elementWithNoHeight = angular.element('<div resize-element resize-height="false"></div>');
            elementWithOffSetBottom = angular.element('<div resize-element offset-bottom="200"></div>');
            elementWithOffSetTop = angular.element('<div resize-element offset-top="112"></div>');
        });
    });

    describe('isolate scope', function() {
        it('should pass in resizeWidth of false to disable resize of width', function() {
            element = $compile(elementWithNoWidth)($scope);

            expect(element.isolateScope().resizeWidth).toBe('false');
        });

        it('should pass in resizeHeight of false to disable resize of height', function() {
            element = $compile(elementWithNoHeight)($scope);

            expect(element.isolateScope().resizeHeight).toBe('false');
        });

        it('should pass in offset buttom to pad bottom of screen', function() {
            element = $compile(elementWithOffSetBottom)($scope);

            expect(element.isolateScope().offsetBottom).toEqual('200');
        });

        it('should pass in offset top to pad top of screen', function() {
            element = $compile(elementWithOffSetTop)($scope);

            expect(element.isolateScope().offsetTop).toEqual('112');
        });
    });
});
