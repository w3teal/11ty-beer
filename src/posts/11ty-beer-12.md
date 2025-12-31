---
title: 11ty Beer 1.2
description: Better update to the most opinionated 11ty started, so far
date: 2025-12-30
tags:
 - release-note
---

**This project isn't dead yet!** Yes, This project is already knocking a year anniversary, and the changes are really small, and some packages is already obsolete. Just like my other projects, they're all really, really slow to upgraded, because my lazy self :P

## Search

Using Pagefind with Modular UI, as you can see it's simply fit with the Material Design. You don't need to setup anything, it's work out of the box, and seamless sync with 11ty serve.

If there's a page you want to excluded from the search you can add `pagefind_ignore` to the frontmatter of the page/post. (Tags and Tags list page is ignored by default.)
```markdown
---
pagefind_ignore: true
---
```

## Better code

Now this `code` and `pre` has better padding and colors. And now, you can easily copy the `pre` codes with an simple button. The codes in this page is the example (:P)

## Lucide as UI icons

I finding that the Material Design Icons is too sharp in terms of comfortable UI, so I replace them with the community maintained icon packs, and I choose Lucide. It's just simply good.

<p>
  <i>{% icon 'lucide:smile' %}</i>
  <i>{% icon 'lucide:laptop-minimal-check' %}</i>
  <i>{% icon 'lucide:thumbs-up' %}</i>
  <i>{% icon 'lucide:house-wifi' %}</i>
  <i>{% icon 'lucide:image' %}</i>
  <i>{% icon 'lucide:bolt' %}</i>
</p>

## Toolbar

~~Stoled~~ Inspired by [Duckquill](https://duckquill.daudix.one/). You can see it at the very top of this page 🔝. Search, themes, dark mode, and RSS is enabled by default, with big Giscus comments button if enabled.

You can easily change the elements available by editing `toolbarItems` in `/src/_data/site.json`.

```json
...
    "toolbarItems": [
        { "name": "Search", "type": "button", "icon": "lucide:search", "onClick": "document.getElementById('search-wrapper').classList.toggle('active');" },
        { "name": "Theme", "type": "link", "icon": "lucide:palette", "href": "javascript:ui('#dialog-themes');" },
        { "name": "Toggle theme", "type": "themeToggle", "iconDark": "lucide:moon", "iconLight": "lucide:sun", "onClick": "mode()" },
        { "name": "RSS", "type": "menu", "icon": "lucide:rss",
          "items": [
            { "label": "Atom", "href": "/feed.xml" },
            { "label": "RSS" },
            { "label": "JSON", "href": "/feed.json" }
        ]}
    ],
...
```

## Other changes

- New date formatting (`Month DD, YYYY`) with Luxon, from the former vanilla JS (`YYYY-MM-DD`).
- Better header and posts grid layout.
- Minify using the newer `html-minifier-terser`, replacing `@sherby/eleventy-plugin-files-minifier`.
- All packages updated to the latest (see `package.json`).  
Especially: `@11ty/eleventy` 3.0.0 > 3.1.0 and `beercss` 3.8.0 > 3.13.1.
- Beautiful mesh gradient background inspired by [this article](https://webdesign.tutsplus.com/how-to-create-a-mesh-gradient-generator-with-html-css-and-javascript--cms-109183t).
- New 11ty-beer logo (created within 5 minute in Figma)


## It is ready to use?

Yes, it's already stable enough, but a lot of breaking changes still happen eventually :P. Especially, this project is built to be
- Simple to use.
- One configuration > done.
- Throw all the things to 11ty.
- **Just use it forever and just writing.**

But if you want something that actively maintained, this project can be, but it's not today, maybe tomorrow or someday. And it's still way so far from popularity, so if you like this project and want to supporting it, you can share it to whatever place, and give a star to the repository!

If you found an issue, or you want to requesting an feature, or even contributing, you can go to the [GitHub page](https://github.com/w3teal/11ty-beer). I actively checking my Mastodon and GitHub, so just keep on sight!
