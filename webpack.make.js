const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

const moduleHandlers = {
    html: (config, options) => {
        config.plugins.push(new HtmlWebpackPlugin(options));
        return config;
    }
};

module.exports = function({
    name,
    dir,
    entry = './src/index.ts',
    externals = [],
    modules = [],
}) {
    const config = {
        entry: path.join(__dirname, dir, entry),
        output: {
            path: path.join(__dirname, `${dir}/dist`),
            filename: `${name}.js`,
            library: `@inless/${name}`,
            libraryTarget: 'umd',
        },
        resolve: { extensions: ['.ts', '.tsx', '.js'] },
        devtool: 'source-map',
        module: {
            loaders: [
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: `awesome-typescript-loader`,
                            options: {
                                configFileName: `${dir}/tsconfig.json`
                            },
                        },
                    ],
                },
            ],
        },
        externals,
        plugins: [
            new CheckerPlugin(),
        ],
    };

    return Object.keys(modules).reduce((history, key) => moduleHandlers[key](history, modules[key]), config);
}
