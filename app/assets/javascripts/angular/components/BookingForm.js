export default function BookingForm() {
    return {
        restrict: 'E',
        replace: true,
        scope: false,
        template: `
            <section id="contact" class="contact-form">
                <span class="contact-form-notice">
                    I want to book: <span class="client-name">{{ BookingCtrl.client }}</span>
                </span>

                <form name="BookingCtrl.bookingForm" ng-submit="BookingCtrl.submitForm()" novalidate>
                    <animated-input type="text" placeholder="Name:" ng-model="BookingCtrl.booking_form.name" required></animated-input>
                    <animated-input type="text" placeholder="Phone:" ng-model="BookingCtrl.booking_form.phone" required></animated-input>
                    <animated-input type="text" placeholder="Email Address:" ng-model="BookingCtrl.booking_form.email" required></animated-input>
                    <animated-input type="text" placeholder="Message:" ng-model="BookingCtrl.booking_form.message" required></animated-input>
                    <button type="submit">Submit</button>
                </form>
            </section>
        `
    };
}
