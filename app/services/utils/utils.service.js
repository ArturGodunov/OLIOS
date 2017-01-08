function utilsService() {
    function isPlainObject(prop) {
        return Object.prototype.toString.call(prop) === '[object Object]';
    }

    return {
        isPlainObject
    };
}

export default utilsService;
