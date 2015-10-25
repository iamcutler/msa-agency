describe('Service: Contact', () => {
    var ContactService;

    beforeEach(() => {
        module('MSAAgency.services');

        inject($injector => {
            ContactService = $injector.get('ContactService');
        });
    });

    it('to be defined', () => {
        expect(ContactService).toBeDefined();
    });
});
