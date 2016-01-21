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
                    dance: 0, commercials: 0, tv_film: 0, print: 0,
                    musical_theatre: 0, kids_and_teens: 0,
                    stunts: 0, speciality_act: 0, choreographer: 0,
                    director: 0, production_designer: 0, lighting_designer: 0,
                    music_director: 0, other: 0
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
