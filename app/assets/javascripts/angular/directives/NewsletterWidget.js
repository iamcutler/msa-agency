export default function NewsletterWidget() {
    return {
        restrict: 'E',
        replace: true,
        controller: 'NewsletterController as NewsletterCtrl',
        template: `
            <div class="newsletter-widget">
                <h5>Sign up for our newsletter</h5>
                <h6>to stay up to date with all things MSA</h6>

                <form name="NewsletterCtrl.newsletterForm" ng-submit="NewsletterCtrl.submit()" novalidate>
                    <input type="email" ng-model="NewsletterCtrl.email" placeholder="Email address:" required>
                    <button type="submit">Submit</button>
                </form>

                <span class="bottom-notice">
                    Please notify me of special events and news.
                </span>
            </div>
        `
    };
}
