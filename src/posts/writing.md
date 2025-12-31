---
title: Writing
description: The right way to writing a Markdown posts.
date: 2025-02-13
tags:
 - tutorial
 - markdown
---

## Naming file

You can naming the post file as you want, just keep it short and fit to the title. If the file is `a-title.md`, in url it should be automically set to `http://...../posts/a-title/`. But you can also change the url slug with `permalink` in frontmatter.
```yaml
permalink: "posts/a-different-title/"
```

## Frontmatter

First thing you need to check is the frontmatter, which is started from the first line of every posts files.
Example of good frontmatter:

```yaml
---
title: A title
description: A description of the page
date: 2024-01-31
tags:
 - some
 - tagging
---
```

If you updating the post in a different date, you can add `lastUpdated` below `date` in the frontmatter. For example:

```yaml
...
date: 2024-01-31
lastUpdated: 2025-12-31
...
```

## Start writing

Now, you can start writing an markdown content after the frontmatter are ready. If you not sure how to writing in Markdown (that's the most common lesson), you can learn at [Markdown Guide website](https://www.markdownguide.org/basic-syntax/) or in our [Markdown Test Page](https://github.com/w3teal/11ty-beer/blob/main/src/posts/markdown-test-page.md?plain=1) code.

If you want to learn more about exclusive shortcodes that you can use in 11ty Beer, visit the [Extras post](/posts/extras/).
