export default function RosterSlider() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            title: '@',
            roster: '='
        },
        template: `
            <div class="roster-slider">
                <span class="title">{{ title }}</span>

                <div class="roster">
                    <ul>
                        <li ng-repeat="member in roster">
                            <a href="" class="thumbnail" title="">
                                <img ng-src="{{ member.img }}" alt="{{ member.name }}">
                                <div class="overlay">
                                    <span class="arrow"></span>
                                    <span class="overlay-name">{{ member.name }}</span>
                                    <span class="overlay-position">{{ member.title }}</span>
                                </div>
                            </a>

                            <span class="name">{{ member.name }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        `
    };
}
