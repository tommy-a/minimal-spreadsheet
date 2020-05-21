import * as webpack from 'webpack';

const config: webpack.Configuration = {
    entry: {
        'minimal-spreadsheet': './src/app.tsx'
    },

    output: {
        path: `${__dirname}/dist/`,
        filename: './[name].js',
        publicPath: '/dist/'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },

    devtool: 'cheap-module-source-map'
};

export default config;
