module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{png,jpg,css,js,html,svg}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'dist/sw.js'
};