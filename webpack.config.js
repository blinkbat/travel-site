var path = require('path');

module.exports = {
	entry: {
		// use two source files
		App: "./app/assets/scripts/App.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),
		// keeps filename dynamic
		filename: "[name].js"
	},
	module: {
		loaders: [ 
			{
				loader: 'babel-loader',
				query: { presets: ['es2015'] },
				test: /\.js$/,
				exclude: /node_modules/ 
			}
		]
	}

}