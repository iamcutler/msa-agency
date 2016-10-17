export default function ClientRoster($timeout, $state) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            title: '@',
            type: '@',
            roster: '=',
            slider: '@',
            showSocialStats: '@'
        },
        template: `
            <div class="client-roster" ng-class="{slider: slider, 'client-roster--stats': showSocialStats}">
                <span class="title">{{ title }}</span>

                <div class="roster">
                    <div class="navigation left" ng-if="rosterListCount > 6" ng-click="previousSlide()">
                        <div class="arrow"></div>
                    </div>

                    <div class="thumbs">
                        <ul>
                            <li ng-repeat="member in roster">
                                <a ng-href="{{ getStateName({ slug: member.slug }) }}" class="thumbnail" title="">
                                    <img ng-src="{{ member.default_image.sizes.thumb }}" alt="{{ member.full_name }}">
                                    <div class="overlay">
                                        <span class="arrow"></span>
                                        <span class="overlay-name">{{ member.full_name }}</span>
                                        <span class="overlay-position">{{ member.title }}</span>
                                    </div>
                                </a>

                                <span class="name">{{ member.full_name }}</span>

                                <ul class="client-social-stats" ng-if="showSocialStats">
                                    <li class="twitter" ng-if="::member.social.stats.twitter">
                                        <i></i>
                                        {{ ::member.social.stats.twitter | number }}
                                    </li>
                                    <li class="instagram" ng-if="::member.social.stats.instagram">
                                        <i></i>
                                        {{ ::member.social.stats.instagram | number }}
                                    </li>
                                    <li class="youtube" ng-if="::member.social.stats.youtube">
                                        <i></i>
                                        {{ ::member.social.stats.youtube | number }}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div class="navigation right" ng-if="rosterListCount > 6" ng-click="nextSlide()">
                        <div class="arrow"></div>
                    </div>
                </div>
            </div>
        `,
        link: (scope, element) => {
            $timeout(() => {
                let countPerSlide = 6;
                let rosterContainer = angular.element(element[0].querySelector('.thumbs'));
                let rosterList = angular.element(element[0].querySelector('.thumbs ul'));

                // Current visible slide
                scope.currentSlide = 0;

                scope.$watch('roster', (newVal) => {
                    if(newVal) {
                        // roster count
                        scope.rosterListCount = newVal.length;

                        // Max available slides
                        scope.maxSlides = scope.rosterListCount > countPerSlide ? Math.ceil(scope.rosterListCount / countPerSlide) - 1 : 0;
                    }
                }, true);

                /**
                 * Navigate slider location
                 *
                 * @param {Number} destination
                 */
                var _navigateSlider = (destination = 0) => {
                    let rosterListWidth = rosterList[0].clientWidth;

                    if(destination < 0) {
                        scope.currentSlide = scope.maxSlides;
                    } else if(destination > scope.maxSlides) {
                        scope.currentSlide = 0;
                    } else {
                        scope.currentSlide = destination;
                    }

                    rosterContainer.animate({
                        left: `-${scope.currentSlide <= 0 ? 0 : (rosterListWidth * scope.currentSlide)}px`
                    }, 500);
                };

                /**
                 * Previous slide
                 */
                scope.previousSlide = () => {
                    _navigateSlider(scope.currentSlide - 1);
                };

                /**
                 * Next slide
                 */
                scope.nextSlide = () => {
                    _navigateSlider(scope.currentSlide + 1);
                };

                /**
                 * Get state name for ui router
                 *
                 * @param {Object} params
                 * @param {String} params.slug
                 */
                scope.getStateName = (params = {}) => {
                    let stateName = '';

                    switch(scope.type) {
                        case 'talent':
                            stateName = $state.href('app.client-page', params);
                            break;
                        case 'staff':
                            stateName = $state.href('app.staff-page', params);
                            break;
                    }

                    return stateName;
                };
            }, 0, true);
        }
    };
}

ClientRoster.$inject = ['$timeout', '$state'];
