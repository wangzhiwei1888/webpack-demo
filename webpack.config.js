const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const webpack = require('webpack');

module.exports = {

	entry: {
		another:'./src/another-module.js',
		app:'./src/index.js'
		
	},
	// devtool: 'inline-source-map',
	devtool: 'cheap-module-source-map',
	devServer:{
		contentBase: './dist'
	},
	module:{
		rules: [{
			test: /\.css$/,
			// use: [
			// 	'style-loader', 'css-loader'
			// ]
			use: ExtractTextPlugin.extract({
	          fallback: "style-loader",
	          use: "css-loader"
	        })
		}]
	},
	output:{

		filename: '[name].bundle.js',
		path: path.resolve(__dirname,'dist')
	},
	plugins:[
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title:'Output Management'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common' // Specify the common bundle's name.
		}),
		new ExtractTextPlugin("style.css")
	]


}