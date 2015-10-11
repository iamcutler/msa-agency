export default function TalentNavigation() {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        template: `
            <nav class="talent-navigation">
                <div class="app-container">
                    <a href="" class="active">Biography</a>
                    <a href="">Reel</a>
                    <a href="">Resume</a>
                    <a href="">Photos</a>
                    <a href="">Videos</a>
                    <a href="">Press</a>
                </div>
            </nav>
        `
    };
}
