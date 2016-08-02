var path=require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');
var TARGET ='dev';
var ROOT_PATH=path.resolve(__dirname);
var mainFolder="application";
var outputFolder=process.env.CLIENT_STATIC || 'build';
var common={
    entry:[path.resolve(ROOT_PATH,mainFolder+'/app.js')],
    resolve:{
        extensions:['','.js','.jsx'],
    },
    output:{
        path:path.resolve(ROOT_PATH,outputFolder),
        filename:'[hash].bundle.js',
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new HtmlWebpackPlugin({
            title: 'Swie',
            template: 'index-template.html', // Load a custom template
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "root.jQuery": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendors",
            filename: "vendors.bundle.js"
        })
    ],
};

if (TARGET === 'dev') {
    module.exports = merge(common, {
        entry: [
            'webpack/hot/dev-server'
        ],
        module: {
            preLoaders: [


            ],
            loaders: [
                {
                    test: /\.css$/,
                    loader: "style!css!less"
                },
                {
                    test: /\.less$/,
                    loader: "style!css!less"
                },
                {
                    test: /\.jsx?$/,
                    loaders: ['react-hot'],
                    include: path.resolve(ROOT_PATH, mainFolder),
                },
                {
                    test: /\.(js|es6|jsx)$/,
                    loaders: ['babel?stage=1&blacklist=flow'],
                    include: path.resolve(ROOT_PATH, mainFolder),
                    exclude: /node_modules/
                },
                {
                    test: /\.json$/,
                    loader: 'json'
                },
                // Any png-image or woff-font below or equal to 10K will be converted
                // to inline base64 instead
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "url-loader?limit=10000&minetype=application/font-woff"
                },
                {
                    test: /\.(ttf|eot|webm|svg|png|gif|jpg|pdf|ico|pcbdoc|zip|xlsx)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "file-loader?name=/[name].[ext]"
                }
            ],
        },
        devtool: 'source-map',
        // Proxy requests to the backend
        devServer: {
            port: 8080,
            host: '0.0.0.0',
            inline: true,
            //proxy: [
            //    {
            //        // proxy all requests to API to backend server
            //        path: '/api/v1/*',
            //        // express running /server code
            //        target: 'http://0.0.0.0:8091'
            //    },
            //    {
            //        // proxy all requests to API to backend server
            //        path: '/images/*',
            //        // express running /server code
            //        target: 'http://0.0.0.0:8091'
            //    },
            //    {
            //        path: '/admin/*',
            //        target: 'http://0.0.0.0:8091'
            //    }]
        }
    });
}