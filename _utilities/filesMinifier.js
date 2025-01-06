const filesMinifier = require("@sherby/eleventy-plugin-files-minifier");

function configureFilesMinifier(eleventyConfig) {
    eleventyConfig.addPlugin(filesMinifier);
}

module.exports = configureFilesMinifier;