function tagsListCollection(collectionApi) {
    const tagsSet = new Set();
    collectionApi.getAll().forEach((item) => {
        item.data.tags?.forEach((tag) => tagsSet.add(tag));
    });
    return [...tagsSet];
}

module.exports = tagsListCollection;