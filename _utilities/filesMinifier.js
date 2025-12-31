const { minify } = require("html-minifier-terser");

function configureFilesMinifier(eleventyConfig) {
  eleventyConfig.addTransform("htmlmin", async function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return await minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true
      });
    }
    return content;
  });
}

module.exports = configureFilesMinifier;