const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
	entry: './src/index.tsx',
	output: {
		// filename: 'bundle.js',
		// path: __dirname + '/dist'
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},
	// Enable sourcemaps for debugging webpack's output.
	devtool: 'source-map',
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'initial'
				}
			}
		}
	},
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ['.ts', '.tsx', '.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/, ///\.(ts|tsx)$/,
				loader: 'awesome-typescript-loader',
				exclude: /node_modules/
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader'
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
						// options: {
						// 	// you can specify a publicPath here
						// 	// by default it use publicPath in webpackOptions.output
						// 	publicPath: '../'
						// }
					},
					// {
					// 	loader: 'style-loader'
					// },
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					// {
					// 	loader: 'postcss-loader',
					// 	options: {
					// 		sourceMap: true
					// 	}
					// },
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},
	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.
	// If you use externals, add the corresponding script tags in the html file
	// externals: {
	// 	react: 'React',
	// 	'react-dom': 'ReactDOM'
	// },
	externals: {},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: devMode ? '[name].css' : '[name].[hash].css',
			chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
		})
	]
};
