const markdownIt = require("markdown-it");
const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");

function slugify(text) {
  return text.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "");
}

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);

  const md = markdownIt({ html: true }).use((md) => {
    const defaultRender = md.renderer.rules.heading_open || function(tokens, idx) {
      return md.renderer.renderToken(tokens, idx);
    };

    md.renderer.rules.heading_open = (tokens, idx) => {
      const content = tokens[idx + 1].content;
      const slug = slugify(content);
      tokens[idx].attrSet("id", slug);
      return `<${tokens[idx].tag} id="${slug}"><a class="header-anchor" href="#${slug}" aria-label="Link to ${content}"></a>`;
    };

    md.renderer.rules.heading_close = defaultRender;
  });

  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addFilter("date", (dateObj) => {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  });

  eleventyConfig.addCollection("posts", (collectionApi) => 
    collectionApi.getFilteredByGlob("src/posts/*.md")
  );

  eleventyConfig.addFilter("filterByTag", (posts, tag) => 
    posts.filter(post => post.data.tags?.includes(tag))
  );

  eleventyConfig.addCollection("tagsList", (collectionApi) => {
    const tagsSet = new Set();
    collectionApi.getAll().forEach(item => {
      item.data.tags?.forEach(tag => tagsSet.add(tag));
    });
    return [...tagsSet];
  });

  eleventyConfig.addLiquidShortcode('image', (filename, alt, size) => {
    const [width, height] = size.split('x');
    return `<img class="block" src="${filename}" alt="${alt}" width="${width}" height="${height}" />`;
  });  

  eleventyConfig.addPassthroughCopy({
    "node_modules/gmx.css/gmx.css": "/modules/gmx.css",
    "node_modules/gmx.css/theme.css": "/modules/theme.css",
    "node_modules/iconify-icon/dist/iconify-icon.min.js": "/modules/iconify-icon.min.js"
  });

  eleventyConfig.addPassthroughCopy({ "src/public": "/" });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
