const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {

	entry: {
		print:'./src/print.js',
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
			use: [
				'style-loader', 'css-loader'
			]
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
		})
	]


}