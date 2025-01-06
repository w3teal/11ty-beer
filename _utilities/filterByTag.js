function filterByTag(posts, tag) {
    return posts.filter((post) => post.data.tags?.includes(tag));
}

module.exports = filterByTag;