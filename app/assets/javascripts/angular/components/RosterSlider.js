// @ngInject
export default function RosterSlider($timeout, $state) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            title: '@',
            type: '@',
            roster: '='
        },
        template: `
            <div class="roster-slider">
                <span class="title">{{ title }}</span>

                <div class="roster">
                    <div class="navigation left" ng-if="rosterListCount > 6" ng-click="previousSlide()">
                        <div class="arrow"></div>
                    </div>

                    <div class="thumbs">
                        <ul>
                            <li ng-repeat="member in roster">
                                <a ng-href="{{ getStateName({ slug: member.slug }) }}" class="thumbnail" title="">
                                    <img ng-src="{{ member.img || '/assets/img-placeholder.jpg' }}" alt="{{ member.full_name }}">
                                    <div class="overlay">
                                        <span class="arrow"></span>
                                        <span class="overlay-name">{{ member.full_name }}</span>
                                        <span class="overlay-position">{{ member.title }}</span>
                                    </div>
                                </a>

                                <span class="name">{{ member.full_name }}</span>
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
                    switch(scope.type) {
                        case 'talent':
                            return $state.href('app.talent.page', params);
                            break;
                        case 'staff':
                            return ''; // Integration once staff page is done
                            break;
                        default:
                            return '';
                    }
                };
            }, 0, true);
        }
    };
}
