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
        var input = 'Kenny Ortega is directing the Fox reboot of the movie TheRocky Horror Picture Show. &nbsp;Tony Testa is the Choreographer, with&nbsp;Jeff Mortensen assisting.&nbsp;&nbsp;&nbsp;';

        expect(stripHTML(input)).toBe("Kenny Ortega is directing the Fox reboot of the movie TheRocky Horror Picture Show.  Tony Testa is the Choreographer, with Jeff Mortensen assisting.   ");
    });

    it('should replace ampersand encoding', function() {
        var input = 'Nappy &amp; Dumo';

        expect(stripHTML(input)).toBe("Nappy & Dumo");
    });
});
