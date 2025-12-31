const pluginTOC = require('@uncenter/eleventy-plugin-toc');

function createToc(eleventyConfig) {
    eleventyConfig.addPlugin(pluginTOC, {
        tags: ["h2", "h3", "h4"],
        ignoredHeadings: ["[data-toc-exclude]"],
        ignoredElements: [".header-anchor"],
        ul: false,
        wrapper: function (toc) {
            return `<div class="overlay transparent"></div>
                <dialog class="right" id="dialog-toc">
                    <h5>Table of Contents</h5>
                    <div class="toc vertical-padding">${toc}</div>
                </dialog>`;
        }
    });
}

module.exports = createToc;