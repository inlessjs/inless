const makeConfig = require('./webpack.make');

const PackageNames = {
    UTIL_CYCLER: 'util-cycler',
    UI_SCENE: 'ui-scene',
};

const packages = {
    [PackageNames.UTIL_CYCLER]: {
        name: PackageNames.UTIL_CYCLER,
        dir: `./packages/${PackageNames.UTIL_CYCLER}`,
        externals: [],
        modules: {
            html: {},
        },
    },
    [PackageNames.UI_SCENE]: {
        name: PackageNames.UI_SCENE,
        dir: `./packages/${PackageNames.UI_SCENE}`,
        modules: {
            html: {},
            css: {},
        },
        externals: [],
    },
};

module.exports = ({ package }) => makeConfig(packages[package]);
