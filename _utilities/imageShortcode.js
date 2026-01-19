function imageShortcode(filename, alt, size, loading = "lazy") {
    const [width, height] = size.split("x");
    return `<img src="${filename}" alt="${alt}" title="${alt}" width="${width}" height="${height}" loading="${loading}" />`;
}

module.exports = imageShortcode;