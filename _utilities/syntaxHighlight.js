const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

function addSyntaxHighlight(eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);
};

module.exports = addSyntaxHighlight;