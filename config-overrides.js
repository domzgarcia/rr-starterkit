const path = require('path');

module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: { 
            'reducers': path.resolve(__dirname, 'src/reducers'),
            'partials': path.resolve(__dirname, 'src/partials'),
            'styles': path.resolve(__dirname, 'src/styles'),
            'scenes': path.resolve(__dirname, 'src/scenes'),
            'utils': path.resolve(__dirname, 'src/utils'),
        },
    };
    return config;
};
