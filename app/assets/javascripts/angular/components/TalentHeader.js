export default function TalentHeader() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            name: '@',
            title: '@',
            social: '=',
            coverImage: '=',
            defaultImage: '=',
            hideBookBtn: '=',
            hideSocialIcons: '='
        },
        template: `
            <header class="talent">
                <div class="background">
                    <img ng-src="{{ coverImage.sizes.large }}">
                </div>

                <div class="talent">
                    <a ng-href="{{ defaultImage.sizes.large }}" data-lightbox="clientDefaultImg" class="talent-thumb">
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
                        <a href="" class="book-btn" ng-hide="hideBookBtn === true">Book</a>
                        <a href="" class="share-btn">Share</a>
                    </div>
                </div>
            </header>
        `
    };
}
