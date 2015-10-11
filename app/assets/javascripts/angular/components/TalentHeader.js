export default function TalentHeader() {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        template: `
            <header class="talent">
                <div class="background">
                    <img src="http://www.lissfaindance.org/press/downloads/LissFainDance_LindseyFitzmorris_Looking,Looking.jpg">
                </div>

                <div class="talent">
                    <a href="" class="talent-thumb">
                        <img src="http://www.lissfaindance.org/press/downloads/LissFainDance_LindseyFitzmorris_Looking,Looking.jpg">
                    </a>

                    <h1>Napoleon and Tabitha Dumo</h1>
                    <h3>Creative Directors/Choreographers</h3>

                    <social-icons></social-icons>

                    <div class="button-group">
                        <a href="" class="book-btn">Book</a>
                        <a href="" class="share-btn">Share</a>
                    </div>
                </div>
            </header>
        `
    };
}
