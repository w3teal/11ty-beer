const pluginIcons = require('eleventy-plugin-icons');

function getIcons(eleventyConfig) {
    eleventyConfig.addPlugin(pluginIcons, {
        mode: 'inline',
        sources: [{
                name: 'si',
                path: 'node_modules/simple-icons/icons'
            },
            {
                name: 'mdi',
                path: 'node_modules/@mdi/svg/svg'
            }
        ],
        icon: {
            shortcode: 'icon',
            delimiter: ':',
            transform: async (content) => content,
            class: (name, source) => `icon icon-${name}`,
            id: (name, source) => `icon-${name}`,
            attributes: {},
            attributesBySource: {},
            overwriteExistingAttributes: true,
            errorNotFound: true,
        },
        sprite: {
            shortcode: 'spriteSheet',
            attributes: {
                class: 'sprite-sheet',
                'aria-hidden': 'true',
                xmlns: 'http://www.w3.org/2000/svg',
            },
            extraIcons: {
                all: false,
                sources: [],
                icons: [],
            },
            writeFile: false,
        },
    });
}

module.exports = getIcons;