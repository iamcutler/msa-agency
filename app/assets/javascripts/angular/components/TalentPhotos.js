export default function TalentPhotos() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            data: '='
        },
        template: `
            <section id="talent-photos">
                <div class="app-container">
                    <figure ng-repeat="img in data track by $index">
                        <img ng-src="{{ img.sizes.thumb }}">
                    </figure>
                </div>
            </section>
        `
    };
}
