export default function ChooseCity() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            cityName: '@',
            state: '@'
        },
        template: `
            <a ui-sref="{{ state }}" class="choose-city">
                <div class="border"></div>
                <span class="enter">Enter</span>
                <span class="city-name">{{ cityName }}</span>
            </a>
        `
    };
}
