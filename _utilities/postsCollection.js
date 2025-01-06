function postsCollection(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
}

module.exports = postsCollection;