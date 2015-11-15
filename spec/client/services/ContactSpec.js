describe('Service: Contact', () => {
    var $httpBackend, ContactService;

    beforeEach(() => {
        angular.mock.module('MSAAgency.services');

        inject($injector => {
            $httpBackend = $injector.get('$httpBackend');
            ContactService = $injector.get('ContactService');
        });
    });

    it('to be defined', () => {
        expect(ContactService).toBeDefined();
    });

    describe('method: submitForm', () => {
        let contact_fields = {
            regarding: 'Bug',
            name: 'Tony Selznick',
            email: 'tony@msaagency.com',
            phone: '3101234567',
            message: 'This is a bug/feedback'
        };

        it('should call backend to submit form', () => {
            $httpBackend.expectPOST('api/v1/contact/form').respond({
                success: true
            });

            ContactService.submitForm(contact_fields)
                .then(data => {
                    expect(data.success).toBe(true);
                });

            $httpBackend.flush();
        });
    });

    describe('method: newsletterSignup', () => {
        it('should call api for newsletter submission', () => {
            $httpBackend.expectPOST('api/v1/newsletter').respond({
                success: true
            });

            ContactService.newsletterSignup('test@msaagency.com')
                .then(response => {
                    expect(response.success).toBe(true);
                });

            $httpBackend.flush();
        });
    });
});
