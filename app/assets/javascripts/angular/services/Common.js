export default class CommonService {
    // @ngInject
    constructor($q) {
        this.$q = $q;
    }

    /**
     * Handle $http response
     * @param {String} error_message
     */
     handleHttpResponse(error_message = 'Error contacting the server')
     {
         return (response) => {
             if( !response ||
                 !response.data ||
                 response.status.toString().slice(0, 1) == 4 ||
                 response.status.toString().slice(0, 1) == 5
             ) {
                 return this.$q.reject(error_message);
             }

             return response.data;
         }
     }
}
