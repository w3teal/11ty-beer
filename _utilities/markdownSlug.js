const markdownIt = require("markdown-it");

function generateSlug(eleventyConfig, slugify) {
  const md = markdownIt({ html: true }).use((md) => {
    md.renderer.rules.heading_open = (tokens, idx) => {
      const content = tokens[idx + 1]?.content || "heading";
      const slug = slugify(content).toLowerCase();

      tokens[idx].attrSet("id", slug);
      return `<${tokens[idx].tag} id="${slug}">`;
    };

    md.renderer.rules.heading_close = (tokens, idx) => {
      const content = tokens[idx - 1]?.content || "heading";
      const slug = slugify(content).toLowerCase();
      return `<a data-pagefind-ignore href="#${slug}" class="header-anchor" aria-label="Permalink to ${content}"><div class="tooltip">Permanent link</div></a></${tokens[idx].tag}>`;
    };
  });

  eleventyConfig.setLibrary("md", md);
}

module.exports = generateSlug;