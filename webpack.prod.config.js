const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.bundle.min.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	stats: {
		colors: true
	},
	plugins: [
		new UglifyJSPlugin({
			uglifyOptions: {
				compress: true,
				mangle: false,
				output: {
					comments: false,
					beautify: false
				}
			},
			parallel: true
		})
	]
};