describe('filter: stripHTML', function() {
    var $filter, stripHTML;

    beforeEach(function() {
        angular.mock.module('MSAAgency.filters');

        inject(function($injector) {
            $filter = $injector.get('$filter');

            stripHTML = $filter('stripHTML');
        });
    });

    it('should strip html tags', function() {
        var input = '<a href="test">Anchor Tags</a> are used to <i>link</i> to other <strong>pages</strong> or <p>external sites</p>';

        expect(stripHTML(input)).toBe("Anchor Tags are used to link to other pages or external sites");
    });

    it('should remove non-breaking spaces', function() {
        var input = '<a href="test">Anchor Tags</a> are used to <i>link</i>&nbsp; to other <strong>pages</strong> or <p>external sites</p>';

        expect(stripHTML(input)).toBe("Anchor Tags are used to link to other pages or external sites");
    });
});
