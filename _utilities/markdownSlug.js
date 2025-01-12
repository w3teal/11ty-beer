const markdownIt = require("markdown-it");

function generateSlug(eleventyConfig, slugify) {
  const md = markdownIt({ html: true }).use((md) => {
    const slugMap = new Map();

    md.renderer.rules.heading_open = (tokens, idx) => {
      const content = tokens[idx + 1]?.content || "heading";
      let slug = slugify(content).toLowerCase();

      if (slugMap.has(slug)) {
        const count = slugMap.get(slug) + 1;
        slugMap.set(slug, count);
        slug = `${slug}-${count + 1}`;
      } else {
        slugMap.set(slug, 0);
      }

      tokens[idx].attrSet("id", slug);
      return `<${tokens[idx].tag} id="${slug}">`;
    };

    md.renderer.rules.heading_close = (tokens, idx) => {
      const content = tokens[idx - 1]?.content || "heading";
      const slug = slugify(content).toLowerCase();
      const count = slugMap.get(slug) || 0;
      const finalSlug = count > 0 ? `${slug}-${count + 1}` : slug;
      return `<a href="#${finalSlug}" class="header-anchor" aria-label="Permalink to ${content}"><div class="tooltip">Permanent link</div></a></${tokens[idx].tag}>`;
    };
  });

  eleventyConfig.setLibrary("md", md);
}

module.exports = generateSlug;