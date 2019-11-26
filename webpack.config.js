const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
	mode: "production",
	entry: "./src/index.ts",
	output: {
		path: __dirname + "/	lib",
		filename: "bundle.js"
	},
	resolve: {
		// Add `.ts` and `.tsx` as a resolvable extension.
		extensions: [".ts", ".tsx", ".js"],
		plugins: [
			new TsConfigPathsPlugin({
				configFile: __dirname + "/tsconfig.build.json"
			})
		]
	},
	module: {
		rules: [
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				options: { configFile: __dirname + "/tsconfig.build.json" }
			}
		]
	}
};
