describe('Controller: Contact', () => {
    var $rootScope, $scope, $controller;
    var ContactCtrl;

    beforeEach(() => {
        angular.mock.module('MSAAgency.controllers');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');

            ContactCtrl = $controller('ContactController as ContactCtrl', {
                $scope: $scope
            });
        });
    });

    it('is defined', () => {
        $scope.$digest();

        expect(ContactCtrl).toBeDefined();
    });

    describe('Contact Form', () => {
        describe('Default props', () => {
            it('should have regarding', () => {
                expect(ContactCtrl.contact_form.hasOwnProperty('regarding')).toBe(true);
            });

            it('should have name', () => {
                expect(ContactCtrl.contact_form.hasOwnProperty('name')).toBe(true);
            });

            it('should have email', () => {
                expect(ContactCtrl.contact_form.hasOwnProperty('email')).toBe(true);
            });

            it('should have phone', () => {
                expect(ContactCtrl.contact_form.hasOwnProperty('phone')).toBe(true);
            });

            it('should have message', () => {
                expect(ContactCtrl.contact_form.hasOwnProperty('message')).toBe(true);
            });
        });
    });

    describe('method: submitContactForm', () => {

    });

    describe('method toggleContactForms', () => {
        it('should set showContactForm to false if true', () => {
            ContactCtrl.showContactForm = true;

            ContactCtrl.toggleContactForms();

            expect(ContactCtrl.showContactForm).toBe(false);
        });

        it('should set showContactForm to true if false', () => {
            ContactCtrl.showContactForm = false;

            ContactCtrl.toggleContactForms();

            expect(ContactCtrl.showContactForm).toBe(true);
        });

        it('should set showRepresentationForm to false if true', () => {
            ContactCtrl.showRepresentationForm = true;

            ContactCtrl.toggleContactForms();

            expect(ContactCtrl.showRepresentationForm).toBe(false);
        });

        it('should set showRepresentationForm to true if false', () => {
            ContactCtrl.showRepresentationForm = false;

            ContactCtrl.toggleContactForms();

            expect(ContactCtrl.showRepresentationForm).toBe(true);
        });
    });
});
