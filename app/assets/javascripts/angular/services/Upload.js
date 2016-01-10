export default class UploadService {
    // @ngInject
    constructor($q, Upload, CommonService, ALLOWED_UPLOAD_TYPES) {
        this.$q = $q;
        this.Upload = Upload;
        this.commonService = CommonService;
        this.ALLOWED_UPLOAD_TYPES = ALLOWED_UPLOAD_TYPES.list;
    }

    /**
     * Upload file to S3 storage
     *
     * @param {Object} file
     * @returns {Promise}
     */
    uploadFile(file) {
        if (file) {
            return this.Upload.upload({
                    url: '/api/v1/storage/upload',
                    data: {
                        file: file
                    }
                }).then(this.commonService.handleHttpResponse('Error uploading file', true));
        }

        return this.$q.reject('No file provided');
    }

    /**
     * Upload files to web service
     *
     * @returns {Promise}
     */
    uploadFiles(files) {
        try {
            return this.$q.all([
                this.uploadFile(files[0]),
                this.uploadFile(files[1]),
                this.uploadFile(files[2])
            ]);
        } catch(err) {
            return this.$q.reject(err);
        }
    }

    /**
     * Check allowed file types
     *
     * @param {Object} file
     * @param {string} file.name
     * @returns {boolean}
     */
    allowedFileType(file) {
        let fileExtension = file.name.toLowerCase().match(/\.[0-9a-z]+$/i);

        if (!fileExtension.length) return false;

        return this.ALLOWED_UPLOAD_TYPES.indexOf(fileExtension[0].replace('.', '')) !== -1;
    }

    /**
     * Check for valid file types in collection
     * @param {Object} files
     * @returns {Boolean}
     */
    checkFileTypeOnFileCollection(files = {}) {
        let valid = true;

        for(let file in files) {
            let fileObj = files[file];

            if(!this.allowedFileType(fileObj)) {
                valid = false;
            }
        }

        return valid;
    }
}
