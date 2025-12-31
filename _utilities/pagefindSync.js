const { execSync } = require("child_process");

function pagefindSync(eleventyConfig) {
    eleventyConfig.on("eleventy.after", () => {
        execSync("npx pagefind --site _site", { stdio: "inherit" });
    });
}

module.exports = pagefindSync;