export function RepresentationForm() {
    return {
        restrict: 'E',
        replace: true,
        controller: 'RepresentationFormController as RepresentationFormCtrl',
        bindToController: true,
        template: `
            <section id="representation" class="contact-form">
                <span class="contact-form-notice">FILL OUT OUR FORM TO REQUEST REPRESENTATION</span>

                <form name="RepresentationFormCtrl.representationForm" ng-submit="RepresentationFormCtrl.submitForm(RepresentationFormCtrl.representationForm)" novalidate>
                    <!-- Destination -->
                    <span class="contact-form-notice section-title">DESTINATION</span>

                    <select ng-model="RepresentationFormCtrl.form.destination">
                        <option value="">Select:</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="New York">New York</option>
                    </select>
                    <!-- End Destination -->

                    <!-- Representation -->
                    <span class="contact-form-notice section-title">REPRESENTATION</span>

                    <div class="representation-option">
                        <input type="checkbox" name="" ng-model="RepresentationFormCtrl.form.repCategory.adult_commerical">
                        Adult Commerical
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.repCategory.print">
                        Print
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.repCategory.young_people">
                        Young People
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.repCategory.dance">
                        Dance
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.repCategory.choreography">
                        Choreography
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.repCategory.creative_development">
                        Creative &amp; Development
                    </div>
                    <!-- End Representation -->

                    <!-- Contact information -->
                    <span class="contact-form-notice section-title">Contact Information</span>

                    <div class="split-column">
                        <animated-input type="text" placeholder="Name:" ng-model="RepresentationFormCtrl.form.name" required></animated-input>
                        <animated-input type="email" placeholder="Email Address:" ng-model="RepresentationFormCtrl.form.email" required></animated-input>
                        <animated-input type="text" placeholder="Phone:" ng-model="RepresentationFormCtrl.form.phone" required></animated-input>
                        <animated-input type="text" placeholder="Manager Name:" ng-model="RepresentationFormCtrl.form.manager_name" required></animated-input>
                        <animated-input type="phone" placeholder="Manager Phone:" ng-model="RepresentationFormCtrl.form.manager_phone" required></animated-input>
                    </div>
                    <!-- End Contact information -->

                    <!-- Vital -->
                    <span class="contact-form-notice section-title">VITAL</span>

                    <div class="split-column">
                        <animated-input type="text" placeholder="DOB: MM/DD/YYYY" ng-model="RepresentationFormCtrl.form.dob" required></animated-input>
                        <animated-input type="text" placeholder="Height: (Bare Foot)" ng-model="RepresentationFormCtrl.form.height" required></animated-input>
                        <animated-input type="text" placeholder="Weight:" ng-model="RepresentationFormCtrl.form.weight" required></animated-input>
                        <animated-input type="text" placeholder="Eye Color:" ng-model="RepresentationFormCtrl.form.eye_color" required></animated-input>
                        <animated-input type="text" placeholder="Hair Color:" ng-model="RepresentationFormCtrl.form.hair_color" required></animated-input>
                        <animated-input type="text" placeholder="Hips:" ng-model="RepresentationFormCtrl.form.hips" required></animated-input>
                        <animated-input type="text" placeholder="Bust: (Women)" ng-model="RepresentationFormCtrl.form.bust"></animated-input>
                        <animated-input type="text" placeholder="Waist:" ng-model="RepresentationFormCtrl.form.waist" required></animated-input>
                        <animated-input type="text" placeholder="Chest: (Men)" ng-model="RepresentationFormCtrl.form.chest"></animated-input>
                        <animated-input type="text" placeholder="Inseam:" ng-model="RepresentationFormCtrl.form.inseam" required></animated-input>
                    </div>
                    <!-- End Vital -->

                    <!-- History -->
                    <span class="contact-form-notice section-title">HISTORY</span>

                    <animated-input type="text" placeholder="Current / Past Representation" ng-model="RepresentationFormCtrl.form.history" required></animated-input>
                    <!-- End History -->

                    <!-- Union -->
                    <span class="contact-form-notice section-title">UNION AFFILIATION</span>

                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.union.non">
                        Non Union
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.union.SAG_AFTRA">
                        SAG-AFTRA
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.union.SAG_AFTRA_ELIGIBLE">
                        SAG-AFTRA Eligible
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.union.AEA">
                        AEA
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.union.ACTRA">
                        ACTRA
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.union.AGVA">
                        AGVA
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.union.WGA">
                        WGA
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.union.DGA">
                        DGA
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.union.other">
                        Other
                    </div>
                    <!-- End Union -->

                    <!-- Materials -->
                    <span class="contact-form-notice section-title">MATERIALS (HEADSHOT, RESUME, REEL)</span>

                    <div class="split-column">
                        <input type="file" ng-model="RepresentationFormCtrl.form.material1">
                        <input type="file" ng-model="RepresentationFormCtrl.form.material2">
                        <input type="file" ng-model="RepresentationFormCtrl.form.material3">
                    </div>
                    <div class="clearfix"></div>

                    <!-- End Materials -->

                    <animated-input type="textarea" placeholder="Special Skills / Notes:" ng-model="RepresentationFormCtrl.form.skills" required></animated-input>

                    <animated-input type="textarea" placeholder="Message:" ng-model="RepresentationFormCtrl.form.message" required></animated-input>

                    <button type="submit">Submit</button>
                </form>
            </section>
        `
    };
}

export class RepresentationFormController {
    // @ngInject
    constructor($http) {
        this.$http = $http;

        this.form = {}; // Representation form
    }

    /**
     * Submit representation form
     *
     * @param {object} form
     */
    submitForm(form) {
        if(form.$valid) {

        }
    }
}
