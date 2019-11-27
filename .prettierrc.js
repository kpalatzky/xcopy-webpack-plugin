// http://json.schemastore.org/prettierrc
module.exports = {
	trailingComma: "none",
	useTabs: true,
	tabWidth: 2,
	quoteProps: "as-needed",
	arrowParens: "always",
	overrides: [
		{
			files: "*.md",
			options: {
				useTabs: false
			}
		}
	]
};
