var path = require('path');
var webpack = require('webpack');
var NODE_ENV = process.env.NODE_ENV;

var plugins = [
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
	}),
];

module.exports = [
	{
		mode: NODE_ENV === 'production' ? 'production' : 'development',

		context: path.resolve(__dirname + './../src'),

		devtool: NODE_ENV === 'production' ? false : 'eval',

		entry: { app: [ '@babel/polyfill', './entry.js' ] },

		output: {
			path: path.resolve(__dirname, '../public/js'),
			filename: '[name].bundle.js'
		},

		optimization: { minimize: false },

		plugins: plugins,

		resolve: {
			alias: {
				'react': 'preact-compat',
				'react-dom': 'preact-compat',
			}
		},

		module: {
			rules: [
				{
					test: /\.css$/,
					use: [ 'style-loader', 'css-loader' ]
				},
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow' ],
							plugins: [ '@babel/plugin-proposal-class-properties' ]
						}
					},
				}
			]
		}
	},
];
