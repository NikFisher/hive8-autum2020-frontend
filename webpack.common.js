const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const SriPlugin = require('webpack-subresource-integrity');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const gitRevisionPlugin = new GitRevisionPlugin();

const assetsDir = path.resolve(__dirname, 'src/assets/');
const srcDir = path.resolve(__dirname, 'src/');
const distDir = path.resolve(__dirname, 'dist');

module.exports = {
	watch: false,
	context: srcDir,
	entry: {
		app: './index.jsx'
	},
	output: {
		path: distDir,
		filename: '[name].[hash].js',
		publicPath: '/'
	},
	resolve: {
		modules: [
			path.resolve(__dirname, 'node_modules'),
			path.resolve(__dirname, 'src'),
			path.resolve(__dirname, './')
		],
		extensions: ['.js', '.jsx', '.html', '.jpg', '.jpeg', '.svg', '.png', '.woff2', '.woff'],
		alias: {
			'lodash-es': 'lodash'
			// Preact is encouraged, but you need to run Styled Components 3.4.X for it to actually work and it's possible some other libraries need to be downgraded as well
			//react: "preact-compat",
			//"react-dom": "preact-compat"
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: [
					{
						loader: 'babel-loader'
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.(jpg|jpeg|svg|png|woff2|woff)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							emitFile: false
						}
					}
				],
				include: assetsDir,
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin('dist'),
		new CopyWebpackPlugin([
			{
				from: `${srcDir}/assets/`,
				to: `${distDir}/assets/` // Ugly as shit, but is a fix until we manage to get paths to work correctly again
			}
		]),
		new HtmlWebpackPlugin({
			template: path.join(srcDir, 'index.html'),
			path: distDir,
			filename: 'index.html',
			minify: {
				collapseInlineTagWhitespace: true,
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true
			}
		}),
		new PreloadWebpackPlugin({
			rel: 'preload',
			include: 'allChunks'
		}),
		new CspHtmlWebpackPlugin(
			{
				'default-src': "'none'",
				'script-src': ["'self'", 'https://storage.googleapis.com/', 'https://cdn.polyfill.io/'],
				'style-src': "'self'",
				'img-src': ["'self'", 'data:'],
				'font-src': "'self'",
				'media-src': "'self'",
				'manifest-src': "'self'",
				'worker-src': "'self'",
				'connect-src': "'self'",
				'object-src': "'none'",
				'frame-src': "'self'",
				'child-src': "'self'",
				'base-uri': "'none'"
			},
			{
				enabled: false,
				hashingMethod: 'sha256'
			}
		),
		new ScriptExtHtmlWebpackPlugin({
			defaultAttribute: 'defer',
			preload: /\.js$/
		}),
		new SriPlugin({
			hashFuncNames: ['sha256', 'sha384'],
			enabled: process.env.NODE_ENV === 'production'
		}),
		//gitRevisionPlugin,
		new webpack.DefinePlugin({
			APP_VERSION: JSON.stringify(require('./package.json').version)
			/*
			VERSION: JSON.stringify(gitRevisionPlugin.version()),
			COMMITHASH: JSON.stringify(gitRevisionPlugin.commithash()),
			BRANCH: JSON.stringify(gitRevisionPlugin.branch())
			*/
		})
	]
};
