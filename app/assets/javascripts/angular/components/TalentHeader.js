export default function TalentHeader() {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        template: `
            <header class="talent">
                <div class="background">
                    <img src="http://msaagency.com/images/clients/528356101013.jpeg">
                </div>

                <div class="talent">
                    <a href="" class="talent-thumb">
                        <img src="http://msaagency.com/images/clients/21132325101013.jpeg">
                    </a>

                    <h1>Napoleon and Tabitha Dumo</h1>
                    <h3>Creative Directors/Choreographers</h3>

                    <social-icons
                        website="http://shop.nappytabs.com/"
                        facebook="http://msaagency.com/nappytabs"
                        twitter="http://msaagency.com/nappytabs"
                        instagram="https://instagram.com/nappytabs/"
                        youtube="http://www.youtube.com/user/Nappytabs"></social-icons>

                    <div class="button-group">
                        <a href="" class="book-btn">Book</a>
                        <a href="" class="share-btn">Share</a>
                    </div>
                </div>
            </header>
        `
    };
}
