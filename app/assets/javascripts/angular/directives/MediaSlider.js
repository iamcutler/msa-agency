export default function MediaSlider($timeout, $interval) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            data: '='
        },
        template: `
            <section id="media-slider">
                <div class="slide-navigation previous" ng-click="previousSlide()" ng-if="data.length > 1">
                    <div class="overlay"></div>
                    <div class="arrow left"></div>
                </div>

                <div class="slides">
                    <ul>
                        <li ng-repeat="slide in data">
                            <img ng-src="{{ slide.sizes.large }}">

                            <a href="https://www.youtube.com/embed/{{ slide.media_source }}" class="play-btn fancybox" ng-if="slide.type === 'video'"></a>

                            <div class="caption" ng-if="slide.caption">
                                {{ slide.caption }}
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="slide-navigation next" ng-click="nextSlide()" ng-if="data.length > 1">
                    <div class="overlay"></div>
                    <div class="arrow right"></div>
                </div>
            </section>
        `,
        link: (scope, element, attrs) => {
            $timeout(() => {
                let sliderElement = angular.element(element[0].querySelector('ul'));
                let slideList = sliderElement.find('li');
                let _slideCount = slideList.length;
                let _currentSlide = 0;
                let _slideDelay = 5000;

                // Cancel timer when clicked on slides
                sliderElement.bind('click', () => {
                    $interval.cancel(slideTimer); // Cancel timer'
                });

                /**
                 * Move slide position
                 *
                 * @param {int} nextSlide
                 */
                let moveSlidePosition = (nextSlide = 0) => {
                    let slideWidth = $('#media-slider ul li').first().width();

                    sliderElement.animate({
                        left: `-${slideWidth * nextSlide}px`
                    }, 400);
                };

                /**
                 * Set next slide count
                 */
                let setNextSlide = () => {
                    if(_currentSlide + 1 >= _slideCount) {
                        _currentSlide = 0;
                    } else {
                        _currentSlide++; // increment current slide
                    }
                };

                /**
                 * Previous slide
                 */
                scope.previousSlide = () => {
                    $interval.cancel(slideTimer); // Cancel timer

                    if(_currentSlide < 0) {
                        _currentSlide = 0;
                        return moveSlidePosition();
                    }

                    if(_currentSlide === 0) {
                        _currentSlide = (_slideCount - 1);
                        return moveSlidePosition(_currentSlide);
                    }

                    _currentSlide--; // reverse increment current slide
                    moveSlidePosition(_currentSlide);
                };

                /**
                 * Next slide
                 */
                scope.nextSlide = () => {
                    setNextSlide();

                    $interval.cancel(slideTimer); // Cancel timer

                    moveSlidePosition(_currentSlide);
                };

                let slideTimer = $interval(() => {
                    setNextSlide();
                    moveSlidePosition(_currentSlide);
                }, _slideDelay);
            }, 0);
        }
    };
}

MediaSlider.$inject = ['$timeout', '$interval'];
