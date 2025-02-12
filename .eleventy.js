const slugify = require("slugify");
const filesMinifier = require("./_utilities/filesMinifier");
const generateSlug = require('./_utilities/markdownSlug');
const syntaxHighlight = require("./_utilities/syntaxHighlight");
const dateFilter = require("./_utilities/dateFilter");
const urlEncode = require("./_utilities/urlEncode");
const tagsListCollection = require("./_utilities/tagsListCollection");
const filterByTag = require("./_utilities/filterByTag");
const imageShortcode = require("./_utilities/imageShortcode");
const getIcons = require("./_utilities/getIcons");

module.exports = function (eleventyConfig) {

  filesMinifier(eleventyConfig);
  generateSlug(eleventyConfig, slugify);
  syntaxHighlight(eleventyConfig);
  eleventyConfig.addFilter("date", dateFilter);
  eleventyConfig.addFilter("urlEncode", urlEncode);
  eleventyConfig.addCollection("tagsList", tagsListCollection);
  eleventyConfig.addFilter("filterByTag", filterByTag);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  getIcons(eleventyConfig);

  eleventyConfig.addPassthroughCopy({
    "src/public": "/",
    "node_modules/beercss/dist/cdn/beer.min.css": "/modules/beercss/beer.min.css",
    "node_modules/beercss/dist/cdn/beer.min.js": "/modules/beercss/beer.min.js",
    "node_modules/material-dynamic-colors/dist/cdn/material-dynamic-colors.min.js": "/modules/material-dynamic-colors/material-dynamic-colors.min.js",
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};