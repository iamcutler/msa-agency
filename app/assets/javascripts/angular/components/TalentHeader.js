export default function TalentHeader() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            name: '@',
            title: '@',
            basic: '=', // basic header
            social: '=',
            coverImage: '=',
            defaultImage: '=',
            hideBookBtn: '=',
            hideSocialIcons: '='
        },
        template: `
            <header class="talent" ng-class="{basic: basic}">
                <div class="background">
                    <img ng-src="{{ coverImage.sizes.large }}">
                </div>

                <div class="talent" ng-if="!basic">
                    <a ng-href="{{ defaultImage.sizes.large }}" ng-if="!basic" class="talent-thumb fancybox">
                        <img ng-src="{{ defaultImage.sizes.square }}">
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
                        <a ui-sref="app.book-client({ client: name })" class="book-btn" ng-hide="hideBookBtn === true">
                            <span>Book</span>
                        </a>
                        <a href="" class="share-btn">Share</a>
                    </div>
                </div>
            </header>
        `
    };
}
