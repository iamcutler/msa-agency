describe('Controller: RepresentationForm', () => {
    let $rootScope, $scope, $controller;
    let RepresentationFormCtrl;

    beforeEach(() => {
        angular.mock.module('MSAAgency');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $controller = $injector.get('$controller');

            RepresentationFormCtrl = $controller('RepresentationFormController as RepresentationFormCtrl', {
                $scope: $scope
            });

            RepresentationFormCtrl.form = {
                repCategory: {
                    on_camera: 0,
                    kids_and_teens: 0,
                    dance: 0
                }
            };
        });
    });

    it('is defined', () => {
        expect(RepresentationFormCtrl).toBeDefined();
    });

    describe('method: showVitals', () => {
        it('should get vitals to true / show', () => {
            RepresentationFormCtrl.form.repCategory.dance = 1;

            RepresentationFormCtrl.showVitals(true);

            expect(RepresentationFormCtrl.showVitalsInForm).toBe(true);
        });

        it('should get vitals to false / hide', () => {
            RepresentationFormCtrl.showVitals(false);

            expect(RepresentationFormCtrl.showVitalsInForm).toBe(false);
        });

        it('should overwrite to true if required category is selected', () => {
            RepresentationFormCtrl.form.repCategory.dance = 1;

            RepresentationFormCtrl.showVitals(false);

            expect(RepresentationFormCtrl.showVitalsInForm).toBe(true);
        });
    });
});
