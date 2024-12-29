---
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
    "locale": "en_US",
    "lang": "en",
    "title": "11ty Beer Web",
    "shortTitle": "11ty Beer",
    "author": "LIGMATV",
    "url": "https://11ty-beer.vercel.app",
    "description": "Welcome to my blog, powered by 11ty & BeerCSS.",
    "ghRepo": "LIGMATV/11ty-beer",
    "keywords": ["eleventy", "material", "pwa"],
    "socialItems": [
        { "title": "Feed", "url": "/feed.xml", "icon": "rss" },
        { "title": "GitHub", "url": "https://github.com/LIGMATV/11ty-beer", "icon": "github" },
        { "title": "DEV.to", "url": "https://dev.to/ligmatv", "icon": "devdotto" }
    ],
    "menuItems": [
        { "title": "Home", "url": "/", "icon": "home" },
        { "title": "Posts", "url": "javascript:ui('#dialog-posts');", "icon": "pages" },
        { "title": "Tags", "url": "javascript:ui('#dialog-tags');", "icon": "sell" },
        { "title": "Theme", "url": "javascript:ui('#dialog-themes');", "icon": "palette" }
    ]
}
```

## Locale & Language

The locale and language of your website. Native locale is optional.

```
    "locale": "en_US",
    "lang": "en",
```

## Title & Short title

The title or name for your website. Short title is used for your PWA's app name.
```
    "title": "11ty GMX Web",
    "shortTitle": "11ty GMX",
```

## Bio

### Author

Who's the author? Ghost? You can change it by changes the `author` string.  
Example of the usage: `<meta name="author" content="LIGMATV">`
```
    "author": "LIGMATV",
```

### Url

Url to your (this) website. Used in `sitemap.xml` and `robots.txt` for search engine optimization.
```
    "url": "https://11ty-beer.vercel.app",
```

### Description

The default description if the `description` string in the frontmatter is not filled.  
Example of the usage: `<meta name="description" content="Welcome to my blog, powered by 11ty & GMX.css.">`
```
    "description": "Welcome to my blog, powered by 11ty & GMX.css.",
```

## GitHub Repository

The github repository which used for hosting the website code.  
Example of the usage: The "View source of this page" and "Edit this page" button in posts.
```
    "ghRepo": "LIGMATV/11ty-beer",
```

## Keywords

The default keywords if the `tags` array in the frontmatter is not filled.  
Example of the usage: `<meta name="keywords" content="eleventy, material, pwa">`
```
    "keywords": ["eleventy", "material", "pwa"],
```

## Social items

Used in the footer. There's a 3 strings for every arrays you need to fill.
1. `title`: The title/name of the social media.
2. `url`: The social media URL.
3. `icon`: The logo for the website. You can find the logo names in [Simple Icons](https://simpleicons.org/).  
```
    "socialItems": [
        { "title": "Feed", "url": "/feed.xml", "icon": "rss" },
        { "title": "GitHub", "url": "https://github.com/LIGMATV/11ty-beer", "icon": "github" },
        { "title": "DEV.to", "url": "https://dev.to/ligmatv", "icon": "devdotto" }
    ],
```

## Menu items

Used as lists in sidebar menu. There's a 3 strings for every arrays you need to fill.
1. `title`: The title of the page.
2. `url`: The link to the page. For triggering with [`data-ui`](https://github.com/beercss/beercss/blob/main/docs/JAVASCRIPT.md#the-trigger-of-elements), use `javascript:ui('...')`.
3. `icon`: The icon that presenting the page. You can find the icon names in [Google Fonts](https://fonts.google.com/icons).
```
    "menuItems": [
        { "title": "Home", "url": "/", "icon": "home" },
        { "title": "Posts", "url": "javascript:ui('#dialog-posts');", "icon": "pages" },
        { "title": "Tags", "url": "javascript:ui('#dialog-tags');", "icon": "sell" },
        { "title": "Theme", "url": "javascript:ui('#dialog-themes');", "icon": "palette" }
    ]
```