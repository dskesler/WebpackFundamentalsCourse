var path = require('path');

module.exports = {
	context: path.resolve('js'),
	entry: ["./app"],
	output: {
		path: path.resolve('build/js/'),
		publicPath: '/public/assets/js/',
		filename: "bundle.js"
	},

	devServer: {
		contentBase: 'public'
	},

	module: {
        preLoaders: [
            // Javascript
            { test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ }
        ],
		loaders: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader"
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
}