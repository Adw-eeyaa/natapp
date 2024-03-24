const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry:'./index.web.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js',
    },
    resolve: {
        alias: {
            'react-native$':'react-native-web',
        },
        extensions: ['.web.js','.js', '.json'],
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',
                    },
                },
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'images/',
                  },
                },
              },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'index.html',
        }),
    ],
    resolve: {
        fallback: {
            crypto: require.resolve('crypto-browserify')
        },
    },
};