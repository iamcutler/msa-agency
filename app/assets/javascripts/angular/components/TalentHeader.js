export default function TalentHeader() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            name: '@',
            title: '@',
            social: '=',
            hideBookBtn: '=',
            hideSocialIcons: '='
        },
        template: `
            <header class="talent">
                <div class="background">
                    <img src="http://msaagency.com/images/clients/528356101013.jpeg">
                </div>

                <div class="talent">
                    <a href="" class="talent-thumb">
                        <img src="http://msaagency.com/images/clients/21132325101013.jpeg">
                    </a>

                    <h1>{{ name }}</h1>
                    <h3>{{ title }}</h3>

                    <social-icons
                        ng-hide="hideSocialIcons === true"
                        website="{{ ::social.website }}"
                        facebook="{{ ::social.facebook }}"
                        twitter="{{ ::social.twitter }}"
                        instagram="{{ ::social.instagram }}"
                        youtube="{{ ::social.youtube }}"></social-icons>

                    <div class="button-group">
                        <a href="" class="book-btn" ng-hide="hideBookBtn === true">Book</a>
                        <a href="" class="share-btn">Share</a>
                    </div>
                </div>
            </header>
        `
    };
}
