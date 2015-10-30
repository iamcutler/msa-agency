/**
 * Return resolved or rejected promise
 *
 * @param $q - mock q dependency
 * @param {*} data
 * @param {Boolean} success
 * @param {String} errorMessage
 * @returns {Function}
 */
export function MockPromise($q, data, success = true, errorMessage = '') {
    return function() {
        var defer = $q.defer();
        success ? defer.resolve(data) : defer.reject(errorMessage);
        return defer.promise;
    }
}
