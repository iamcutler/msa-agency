export function RepresentationForm() {
    return {
        restrict: 'E',
        replace: true,
        controller: 'RepresentationFormController as RepresentationFormCtrl',
        bindToController: true,
        template: `
            <section id="representation" class="contact-form">
                <span class="contact-form-notice">FILL OUT OUR FORM TO REQUEST REPRESENTATION</span>

                <div id="contact-message" ng-if="RepresentationFormCtrl.formSubmitted">
                    Thank you for submitting for representation. We'll get back to you as soon as possible.
                </div>

                <form name="RepresentationFormCtrl.representationForm"
                      ng-submit="RepresentationFormCtrl.submitForm(RepresentationFormCtrl.representationForm)"
                      ng-if="!RepresentationFormCtrl.formSubmitted" novalidate>
                    <!-- Destination -->
                    <span class="contact-form-notice section-title">DESTINATION</span>

                    <select ng-model="RepresentationFormCtrl.form.destination" required>
                        <option value="">Select:</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="New York">New York</option>
                    </select>
                    <!-- End Destination -->

                    <!-- Representation -->
                    <span class="contact-form-notice section-title">REPRESENTATION</span>

                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.repCategory.dance"
                               ng-change="RepresentationFormCtrl.showVitals(RepresentationFormCtrl.form.repCategory.dance)">
                        Dance
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.repCategory.commercials"
                               ng-change="RepresentationFormCtrl.showVitals(RepresentationFormCtrl.form.repCategory.commercials)">
                        Commercials
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.repCategory.tv_film"
                               ng-change="RepresentationFormCtrl.showVitals(RepresentationFormCtrl.form.repCategory.tv_film)">
                        TV/FILM
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.repCategory.print"
                               ng-change="RepresentationFormCtrl.showVitals(RepresentationFormCtrl.form.repCategory.print)">
                        Print
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.repCategory.musical_theatre"
                               ng-change="RepresentationFormCtrl.showVitals(RepresentationFormCtrl.form.repCategory.musical_theatre)">
                        Musical Theatre
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.repCategory.kids_and_teens"
                               ng-change="RepresentationFormCtrl.showVitals(RepresentationFormCtrl.form.repCategory.kids_and_teens)">
                        Kids & Teens
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.repCategory.stunts"
                               ng-change="RepresentationFormCtrl.showVitals(RepresentationFormCtrl.form.repCategory.stunts)">
                        Stunts
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.repCategory.specialty_act"
                               ng-change="RepresentationFormCtrl.showVitals(RepresentationFormCtrl.form.repCategory.specialty_act)">
                        Specialty Act
                    </div>

                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.repCategory.Choreographer"
                               ng-change="RepresentationFormCtrl.showVitals(RepresentationFormCtrl.form.repCategory.Choreographer)">
                        Choreographer
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.repCategory.director"
                               ng-change="RepresentationFormCtrl.showVitals(RepresentationFormCtrl.form.repCategory.director)">
                        Director
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.repCategory.production_designer"
                               ng-change="RepresentationFormCtrl.showVitals(RepresentationFormCtrl.form.repCategory.production_designer)">
                        Production Designer
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.repCategory.lighting_designer"
                               ng-change="RepresentationFormCtrl.showVitals(RepresentationFormCtrl.form.repCategory.lighting_designer)">
                        Lighting Designer
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.repCategory.music_director"
                               ng-change="RepresentationFormCtrl.showVitals(RepresentationFormCtrl.form.repCategory.music_director)">
                        Music Director
                    </div>

                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.repCategory.other"
                               ng-change="RepresentationFormCtrl.showVitals(RepresentationFormCtrl.form.repCategory.other)">
                        Other
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
                    <div class="vitals" ng-show="RepresentationFormCtrl.showVitalsInForm">
                        <span class="contact-form-notice section-title">VITAL</span>

                        <div class="split-column">
                            <animated-input type="text" placeholder="DOB: MM/DD/YYYY" ng-model="RepresentationFormCtrl.form.dob"></animated-input>
                            <animated-input type="text" placeholder="Height: (Bare Foot)" ng-model="RepresentationFormCtrl.form.height"></animated-input>
                            <animated-input type="text" placeholder="Weight:" ng-model="RepresentationFormCtrl.form.weight"></animated-input>
                            <animated-input type="text" placeholder="Eye Color:" ng-model="RepresentationFormCtrl.form.eye_color"></animated-input>
                            <animated-input type="text" placeholder="Hair Color:" ng-model="RepresentationFormCtrl.form.hair_color"></animated-input>
                            <animated-input type="text" placeholder="Hips:" ng-model="RepresentationFormCtrl.form.hips"></animated-input>
                            <animated-input type="text" placeholder="Bust: (Women)" ng-model="RepresentationFormCtrl.form.bust"></animated-input>
                            <animated-input type="text" placeholder="Waist:" ng-model="RepresentationFormCtrl.form.waist"></animated-input>
                            <animated-input type="text" placeholder="Chest: (Men)" ng-model="RepresentationFormCtrl.form.chest"></animated-input>
                            <animated-input type="text" placeholder="Inseam:" ng-model="RepresentationFormCtrl.form.inseam"></animated-input>
                        </div>
                    </div>
                    <!-- End Vital -->

                    <!-- History -->
                    <span class="contact-form-notice section-title">HISTORY</span>

                    <animated-input type="text" placeholder="Current / Past Representation" ng-model="RepresentationFormCtrl.form.history"></animated-input>
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
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.union.SDC">
                        SDC
                    </div>
                    <div class="representation-option">
                        <input type="checkbox" ng-model="RepresentationFormCtrl.form.union.other">
                        Other
                    </div>
                    <!-- End Union -->

                    <!-- Materials -->
                    <span class="contact-form-notice section-title">MATERIALS (HEADSHOT, RESUME, REEL)</span>

                    <div class="split-column">
                        <input type="file" ngf-select ng-model="RepresentationFormCtrl.files.material1" required>
                        <input type="file" ngf-select ng-model="RepresentationFormCtrl.files.material2" required>
                        <input type="file" ngf-select ng-model="RepresentationFormCtrl.files.material3" required>
                    </div>
                    <div class="clearfix"></div>

                    <!-- End Materials -->

                    <animated-input type="textarea" placeholder="Special Skills / Notes:" ng-model="RepresentationFormCtrl.form.skills"></animated-input>

                    <animated-input type="textarea" placeholder="Message:" ng-model="RepresentationFormCtrl.form.message" required></animated-input>

                    <div class="form-errors" ng-if="RepresentationFormCtrl.validationsErrors.length">
                        <ul>
                            <li ng-repeat="err in RepresentationFormCtrl.validationsErrors">
                                {{ err }}
                            </li>
                        </ul>
                    </div>

                    <button type="submit" ng-class="{ submitting: RepresentationFormCtrl.isSubmitting }"
                            ng-disabled="RepresentationFormCtrl.isSubmitting">
                            Submit
                    </button>
                </form>
            </section>
        `
    };
}

export class RepresentationFormController {
    // @ngInject
    constructor(ContactService, UploadService, ALLOWED_UPLOAD_TYPES) {
        this.contactService = ContactService;
        this.uploadService = UploadService;
        this.ALLOWED_UPLOAD_TYPES = ALLOWED_UPLOAD_TYPES.list;

        this.showVitalsInForm = false;
        this.isSubmitting = false;
        this.formSubmitted = false;
        this.files = {
            material1: {},
            material2: {},
            material3: {}
        };
        this.form = {}; // Representation form
        this.validationsErrors = []; // form validation error messages
    }

    /**
     * Show vitals in form
     *
     * @param {Boolean} model
     */
    showVitals(model) {
        // Overwrite if a required rep category is selected
        if(this.form.repCategory.dance ||
           this.form.repCategory.commercials ||
           this.form.repCategory.tv_film ||
           this.form.repCategory.print ||
           this.form.repCategory.musical_theatre ||
           this.form.repCategory.kids_and_teens ||
           this.form.repCategory.stunts && model
        ) {
            this.showVitalsInForm = true;
            return;
        }

        this.showVitalsInForm = false;
    }

    /**
     * Submit representation form
     *
     * @param {object} form
     */
    submitForm(form) {
        this.isSubmitting = true;

        if(form.$valid) {
            // Check file types
            if(this.uploadService.checkFileTypeOnFileCollection(this.files)) {
                if(this.uploadService.validateFileSizeOnFileCollection(this.files)) {
                    this.uploadService.uploadFiles([
                            this.files.material1,
                            this.files.material2,
                            this.files.material3
                        ])
                        .then(response => {
                            try {
                                // Loop through files
                                // Add material upload values to form submission
                                response.forEach((file, index) => {
                                    this.form[`material${index + 1}`] = file.file_path;
                                });

                                this.contactService.submitRepresentationForm(this.form)
                                    .then(() => {
                                        // Successful form submission
                                        this.formSubmitted = true;
                                    })
                                    .catch(err => {
                                        this.validationsErrors = RepresentationFormController.formatErrors(err.message);
                                    })
                                    .finally(() => this.isSubmitting = false);
                            } catch(e) {
                                this.isSubmitting = false;
                                this.validationsErrors = RepresentationFormController.formatErrors(e.message);
                            }
                        })
                        .catch(err => {
                            this.validationsErrors = RepresentationFormController.formatErrors(err);
                        })
                        .finally(() => this.isSubmitting = false);
                } else {
                    this.isSubmitting = false;
                    this.validationsErrors = RepresentationFormController.formatErrors(
                        `One or more of your files are over the size limit. Allowed file size: 8MB per file`
                    );
                }
            } else {
                this.isSubmitting = false;
                this.validationsErrors = RepresentationFormController.formatErrors(
                    `Invalid file type present. Allowed file types: ${this.ALLOWED_UPLOAD_TYPES.join(', ')}`
                );
            }
        } else {
            this.isSubmitting = false;
            this.validationsErrors = RepresentationFormController.formatErrors('Required fields missing.');
        }
    }

    /**
     * Format form errors
     *
     * @param {String|Array} errors
     * @returns {Array}
     */
    static formatErrors(errors) {
        if(!Array.isArray(errors)) {
            return [errors];
        }

        return errors.map(err => {
            return err;
        });
    }
}
