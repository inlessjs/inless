const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

const moduleHandlers = {
    html: (config, options) => {
        config.plugins.push(new HtmlWebpackPlugin(options));
        return config;
    },
    css: (config, options, dir) => {
        config.module.loaders.push({
            test: /\.css$/,
            include: path.join(__dirname, `${dir}/src`),
            use: [
                'style-loader',
                {
                    loader: 'typings-for-css-modules-loader',
                    options: {
                        modules: true,
                        namedExport: true
                    }
                },
                'postcss-loader'
            ]
        });
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
                        path.join(__dirname, 'ts-cssdts-loader'),
                    ],
                },
            ],
        },
        externals,
        plugins: [
            new CheckerPlugin(),
            new webpack.WatchIgnorePlugin([
                path.join(__dirname, `${dir}/dist`)
            ]),
        ],
    };

    return Object.keys(modules).reduce((history, key) => moduleHandlers[key](history, modules[key], dir), config);
}
