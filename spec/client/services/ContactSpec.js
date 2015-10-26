describe('Service: Contact', () => {
    var $httpBackend, ContactService;

    beforeEach(() => {
        module('MSAAgency.services');

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

        it('should call backend to submit form', (done) => {
            $httpBackend.whenPOST('api/v1/contact').respond({
                success: true
            });

            ContactService.submitForm(contact_fields)
                .then(data => {
                    expect(data.success).toBe(true);
                })
                .finally(done);

            $httpBackend.flush();
        });
    });
});
