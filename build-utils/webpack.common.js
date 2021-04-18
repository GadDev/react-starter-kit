const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
	devtool: 'source-map',
	entry: path.resolve(__dirname, '..', './src/index.js'),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader'],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	output: {
		path: path.resolve(__dirname, '..', 'dist'),
		filename: 'bundle.js',
	},
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '..', './src/index.html'),
			filename: 'index.html',
			inject: 'body',
			favicon: false,
			showErrors: true,
			cache: true,
		}),
	],

	// 3
	devServer: {
		contentBase: path.resolve(__dirname, '..', 'dist'),
		hot: true,
		open: true,
		overlay: true,
		port: 8802,
	},
};
