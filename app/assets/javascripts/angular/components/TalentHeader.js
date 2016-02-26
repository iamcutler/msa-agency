export default function TalentHeader() {
    var domain = 'http://msaagency.com/';

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
            hideSocialIcons: '=',
            hideShareBtn: '=',
            slug: '='
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
                        <a href="#share" class="share-btn fancybox" ng-if="!hideShareBtn">Share</a>

                        <!-- Share -->
                        <div style="display:none">
                            <div id="share">
                                <div>
                                    <a href="#"
                                        socialshare
                                        socialshare-provider="facebook"
                                        socialshare-text="MSA Agency | {{ name }}"
                                        socialshare-type="feed"
                                        socialshare-url="${domain}{{ slug }}">
                                            <i class="fa fa-facebook"></i> Facebook
                                    </a>
                                </div>
                                <div>
                                    <a href="#"
                                        socialshare
                                        socialshare-provider="twitter"
                                        socialshare-text="MSA Agency | {{ name }}"
                                        socialshare-hashtags="msaagency, msafam"
                                        socialshare-url="${domain}{{ slug }}">
                                            <i class="fa fa-twitter"></i> Twitter
                                    </a>
                                </div>
                                <div>
                                    <a ng-href="mailto:insert_email_here?subject=${encodeURIComponent('MSA Agency |')} {{ name }}&body=Hi. Check out this MSA client at: ${domain}{{ slug }}">
                                        <i class="fa fa-envelope"></i> Email
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        `
    };
}
