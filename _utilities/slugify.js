function slugify(text) {
    return text.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "");
}

module.exports = slugify;