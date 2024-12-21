---
layout: layouts/post.njk
title: Configuration
description: Makes your website yours with the customizable configuration.
date: 2024-12-21
tags:
 - tutorial
 - config
 - theme
---

Already getting started your post? It's time to **learn more** for makes your website yours with the customizable configuration.

Here's some customization to make your site more yours.  
Firstly, you can open the `_data/site.json` file, you will find some configuration here.
```
{
    "theme": "blue",
    "author": "LIGMATV",
    "url": "https://www.11ty.dev/",
    "title": "11ty GMX",
    "shortTitle": "11ty",
    "description": "Welcome to my blog, powered by 11ty & GMX.css.",
    "keywords": ["eleventy", "material", "pwa"],
    "socialItems": [
        { "title": "GitHub", "url": "https://github.com/LIGMATV/11ty-gmx", "icon": "mdi:github" },
        { "title": "DEV.to", "url": "https://dev.to/ligmatv", "icon": "mdi:dev-to" }
    ],
    "menuItems": [
        { "title": "Home", "url": "/", "icon": "mdi:home-variant-outline" },
        { "title": "Posts", "url": "/posts/", "icon": "mdi:file-star-four-points-outline" },
        { "title": "Tags", "url": "/tags/", "icon": "mdi:tag-multiple-outline" }
    ]
}
```

## Themes

You can select your favorite theme here by changes the `theme` string. You can also demoing the color in the [GMX.css website](https://ligmatv.is-a.dev/gmx.css/).  
The themes you can use is: `red`, `pink`, `purple`, `indigo`, `blue`, `cyan`, `teal`, `green`, `lime`, `yellow`, `amber`, `orange` and `monochrome`.

```
    "theme": "indigo",
```

## Bio

### Author

Who's the author? Ghost? You can change it by changes the `author` string.  
Example of the usage: `<meta name="author" content="LIGMATV">`
```
    "author": "LIGMATV",
```

### Url

Url to your website. Can be also the social media you use mostly.
```
    "url": "https://www.11ty.dev/",
```

### Title & Short title

The title or name for your website.
```
    "title": "11ty GMX",
    "shortTitle": "11ty",
```

### Description

The default description if the `description` string in the frontmatter is not filled.  
Example of the usage: `<meta name="description" content="Welcome to my blog, powered by 11ty & GMX.css.">`
```
    "description": "Welcome to my blog, powered by 11ty & GMX.css.",
```

### Keywords

The default keywords if the `tags` array in the frontmatter is not filled.  
Example of the usage: `<meta name="keywords" content="eleventy, material, pwa">`
```
    "keywords": ["eleventy", "material", "pwa"],
```

## Social items

Here, you can add multiple arrays as you want. There's a 3 strings you need to fill.
1. `title`: The title/name of the social media.
2. `url`: The social media URL.
3. `icon`: The icon for the website. You can find the code names in [Iconify Icon Sets](https://icon-sets.iconify.design/). From [MDI](https://icon-sets.iconify.design/mdi/) or [Simple Icons](https://icon-sets.iconify.design/simple-icons/).  
  Example of icon code name: [mdi:github](https://icon-sets.iconify.design/mdi/?icon-filter=github)
```
    "socialItems": [
        { "title": "GitHub", "url": "https://github.com/LIGMATV/11ty-gmx", "icon": "mdi:github" },
        { "title": "DEV.to", "url": "https://dev.to/ligmatv", "icon": "mdi:dev-to" }
    ],
```

## Menu items

Same as the social items, you can add multiple arrays as you want. There's a 3 strings you need to fill.
1. `title`: The title of the page.
2. `url`: The link to the page.
3. `icon`: The icon that presenting the page. You can find the code names in [Iconify Icon Sets](https://icon-sets.iconify.design/). From [MDI](https://icon-sets.iconify.design/mdi/).  
  Example of icon code name: [mdi:home-variant-outline](https://icon-sets.iconify.design/mdi/?icon-filter=home-variant)
```
    "menuItems": [
        { "title": "Home", "url": "/", "icon": "mdi:home-variant-outline" },
        { "title": "Posts", "url": "/posts/", "icon": "mdi:file-star-four-points-outline" },
        { "title": "Tags", "url": "/tags/", "icon": "mdi:tag-multiple-outline" }
    ]
```