const path = require('path');

module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: { 
            'Utils': path.resolve(__dirname, 'src/utils'),
            'Reducers': path.resolve(__dirname, 'src/reducers'),
        },
    };

    return config;
};
