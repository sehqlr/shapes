module.exports = {
        mode: "development",
	entry: './js/blocks.js',
	output: {
		path: __dirname,
		filename: 'js/blocks.build.js',
	},
	module: {
		rules: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};
