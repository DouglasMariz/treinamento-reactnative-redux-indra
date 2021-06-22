module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            'module:metro-react-native-babel-preset',
            'babel-preset-expo'
        ],
        plugins: [
            'react-native-reanimated/plugin',
            [
                'babel-plugin-root-import',
                {
                    rootPathPrefix: '~',
                    rootPathSuffix: 'src',
                },
            ],
        ],
        env: {
            production: {
                plugins: ['react-native-paper/babel'],
            },
        },
    };
};
