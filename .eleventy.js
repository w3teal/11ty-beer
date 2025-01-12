const slugify = require("slugify");
const configureMarkdown = require("./_utilities/markdown");
const filesMinifier = require("./_utilities/filesMinifier");
const dateFilter = require("./_utilities/dateFilter");
const urlEncode = require("./_utilities/urlEncode");
const postsCollection = require("./_utilities/postsCollection");
const tagsListCollection = require("./_utilities/tagsListCollection");
const filterByTag = require("./_utilities/filterByTag");
const imageShortcode = require("./_utilities/imageShortcode");

module.exports = function (eleventyConfig) {

  configureMarkdown(eleventyConfig, slugify);
  filesMinifier(eleventyConfig);
  eleventyConfig.addFilter("date", dateFilter);
  eleventyConfig.addFilter("urlEncode", urlEncode);
  eleventyConfig.addCollection("posts", postsCollection);
  eleventyConfig.addCollection("tagsList", tagsListCollection);
  eleventyConfig.addFilter("filterByTag", filterByTag);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);

  eleventyConfig.addPassthroughCopy({
    "src/public": "/",
    "node_modules/beercss/dist/cdn": "/modules/beercss",
    "node_modules/material-dynamic-colors/dist/cdn": "/modules/material-dynamic-colors",
    "node_modules/simple-icons-font/font": "/modules/simple-icons-font",
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};