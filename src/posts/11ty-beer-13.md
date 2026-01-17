---
title: 11ty Beer 1.3
description: Google Sans and Code as native font, supported custom Cover image.
date: 2026-01-17
tags:
 - release-note
---

Happy new year, [Don't Be Dumb](https://www.albumoftheyear.org/album/564912-asap-rocky-dont-be-dumb.php) by A$AP Rocky is finally released after 8 years!!  
Improvement are never have the limit. That's how 11ty Beer actively maintained.

## Fonts

The current approach for fonts is using the native fonts, which is doesn't consistent in all devices, and mostly just doesn't looks pretty blanded with another style. Considering that the Google's properiaty **Google Sans** font is become open sourced and available for all users, I considering to use it. And it's looks better with the Material Design guidelines. The code font is also switched into **Google Sans Code**.

But, there's no simple way to installing the fonts with package manager, so for now, I just downloading the zip at the **[Google Fonts website](https://fonts.google.com/)**, put the folders into `src/public/fonts`, and importing them manually with `@font-face` property in `style.css`.

If there's an issue with the fonts, or maybe there's a version update to the fonts, you can make an issue or simply do an Pull Request!

## Cover image

The post layout is inspired by Material Design Blog ([e.g.](https://m3.material.io/blog/building-with-m3-expressive)). If used for overall, it would be used for Opengraph image. In the post, the image will be shown at the header. If you didn't use it, the Opengraph image will be using the 11ty webpage screenshot, and in the header, the image will be an [noisy](https://css-tricks.com/grainy-gradients/) mesh gradient.

You can add `cover` with `img` and `alt` inside to the frontmatter, the image should be under the website and not an external image, as in the Opengraph meta, it's use `site.url cover.img`. You can add the images to `src/public/img`, and use them as `/img/...`.

```markdown
---
cover:
    img: /img/getting-started.png
    alt: Terminal screenshot with homepage screenshot
---
```

## Other changes

- Resorting the selectors and make it more readable in `style.css`.
- Seperate the author as "Posted by" below the header.
- Hmm, the last version is should be `1.3`, I didn't noticed that [`1.2`](https://github.com/w3teal/11ty-beer/releases/tag/v1.2.0) has been applied [before](https://github.com/w3teal/11ty-beer/commit/197715503b602e489c6dfbe215026d5494bd5360), but not an big problem, so this minor changes also fix the versioning :P

Before:  
{% image '/img/cover_1.png' 'Not so big' '480x400' 'lazy' %}  
After:  
{% image '/img/cover_2.png' 'Not so big' '480x400' 'lazy' %}

Made with 💔🥀 by W3Teal (dumb dumb dumb)