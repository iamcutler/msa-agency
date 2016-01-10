import { file1, invalidFile1 } from '../fixtures/files';

describe('Service: Upload', () => {
    let $rootScope, $scope, $q, UploadService, allowedFileTypeSpy, validateFileSizeSpy;

    beforeEach(() => {
        angular.mock.module('MSAAgency');

        inject($injector => {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $q = $injector.get('$q');
            UploadService = $injector.get('UploadService');
        });

        /**
         * Spies
         */
        spyOn($q, 'all');
        allowedFileTypeSpy = spyOn(UploadService, 'allowedFileType').and.callThrough();
        validateFileSizeSpy = spyOn(UploadService, 'validateFileSize').and.callThrough()
    });

    it('should be defined', () => {
        expect(UploadService).toBeDefined();
    });

    describe('method: allowedFileType', () => {
        it('should return true for valid file extension', () => {
            expect(UploadService.allowedFileType(file1)).toBe(true);
        });

        it('should return false for invalid file extension', () => {
            expect(UploadService.allowedFileType(invalidFile1)).toBe(false);
        });

        it('should return false for invalid/no file extension', () => {
            expect(UploadService.allowedFileType({
                name: 'test'
            })).toBe(false);
        });
    });

    describe('method: checkFileTypeOnFileCollection', () => {
        it('should return true for valid extensions in files collection', () => {
            let collection = {material1: file1, material2: file1};

            expect(UploadService.checkFileTypeOnFileCollection(collection)).toBe(true);
        });

        it('should return true for invalid extensions in files collection', () => {
            let collection = {material1: file1, material2: invalidFile1};

            expect(UploadService.checkFileTypeOnFileCollection(collection)).toBe(false);
        });

        it('should call allowedFileType method in class on each iteration', () => {
            let collection = {material1: file1, material2: file1, material3: file1};

            UploadService.checkFileTypeOnFileCollection(collection);

            expect(UploadService.allowedFileType).toHaveBeenCalled();
            expect(allowedFileTypeSpy.calls.count()).toEqual(3);
        });
    });

    describe('method: validateFileSize', () => {
        it('should return true if file size is less than max', () => {
            expect(UploadService.validateFileSize(file1)).toBe(true);
        });

        it('should return false if file size is more than max', () => {
            expect(UploadService.validateFileSize(invalidFile1)).toBe(false);
        });
    });

    describe('method: validateFileSizeOnFileCollection', () => {
        it('should call validateFileSize method on every iteration', () => {
            let files = {material1: file1, material2: file1};

            UploadService.validateFileSizeOnFileCollection(files);

            expect(UploadService.validateFileSize).toHaveBeenCalled();
            expect(validateFileSizeSpy.calls.count()).toBe(2);
        });
    })
});
