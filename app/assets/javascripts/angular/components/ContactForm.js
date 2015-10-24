export default function ContactForm() {
    return {
        restrict: 'E',
        replace: true,
        template: `
            <section id="contact-form">
                <header class="section-header">
                    Get in touch with us
                </header>

                <span class="contact-form-notice">FILL OUT OUR CONTACT FORM AND WE’LL GET BACK WITH YOU</span>

                <form name="contactForm" novalidate>
                    <animated-input type="text" placeholder="Regarding:" ng-model="ContactCtrl.contact_form.regarding" required></animated-input>
                    <animated-input type="text" placeholder="Name:" ng-model="ContactCtrl.contact_form.name" required></animated-input>
                    <animated-input type="text" placeholder="Phone:" ng-model="ContactCtrl.contact_form.phone" required></animated-input>
                    <animated-input type="text" placeholder="Email Address:" ng-model="ContactCtrl.contact_form.email" required></animated-input>
                    <animated-input type="text" placeholder="Message:" ng-model="ContactCtrl.contact_form.message" required></animated-input>
                    <button type="submit">Submit</button>
                </form>
            </section>
        `
    };
}
