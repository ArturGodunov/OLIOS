function immutableService(utils) {
    function immutable(obj) {
        Object.keys(obj)
            .forEach(name => {
                const prop = obj[name];

                if (utils.isPlainObject(prop) || Array.isArray(prop)) {
                    immutable(prop);
                }
            });

        return Object.freeze(obj);
    }

    return {
        turn: immutable
    };
}

export default immutableService;
