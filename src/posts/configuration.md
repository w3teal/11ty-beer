---
title: Configuration
description: Makes your website yours with the customizable configuration.
date: 2024-12-21
tags:
 - tutorial
 - config
 - theme
---

Already getting started your post? It's time to **learn more** to makes your website yours with the customizable configuration.

Here's some customization to make your site more yours.  
Firstly, you can open the `_data/site.json` file, you will find some configuration here.

```json
{
    "locale": "en_US",
    "lang": "en",
    "title": "11ty Beer Web",
    "shortTitle": "11ty Beer",
    "author": "LIGMATV",
    "url": "https://11ty-beer.vercel.app",
    "theme": "#6750a4",
    "description": "Welcome to my blog, powered by 11ty & BeerCSS.",
    "ghRepo": "LIGMATV/11ty-beer",
    "keywords": ["eleventy", "material", "pwa"],
    "socialItems": [
        { "title": "Feed", "url": "/feed.xml", "icon": "rss" },
        { "title": "GitHub", "url": "https://github.com/LIGMATV/11ty-beer", "icon": "github" },
        { "title": "Mastodon", "url": "https://mastodon.scot/@l", "icon": "mastodon", "rel": "me" }
    ],
    "menuItems": [
        { "title": "Home", "url": "/", "icon": "home-variant-outline" },
        { "title": "Posts", "url": "javascript:ui('#dialog-posts');", "icon": "star-box-outline" },
        { "title": "Tags", "url": "javascript:ui('#dialog-tags');", "icon": "tag-multiple-outline" },
        { "title": "Theme", "url": "javascript:ui('#dialog-themes');", "icon": "palette-outline" }
    ],
    "giscus": {
        "dataRepo": "ligmatv/11micro",
        "dataRepoID": "R_kgDON1R6_Q",
        "dataCategory": "Post Comments",
        "dataCategoryID": "DIC_kwDON1R6_c4CnCYA"
    }
}
```

## Locale & Language

The locale and language of your website. Native locale is optional.

```json
    "locale": "en_US",
    "lang": "en",
```

## Title & Short title

The title or name for your website. Short title is used for your PWA's app name.

```json
    "title": "11ty GMX Web",
    "shortTitle": "11ty GMX",
```

## Bio

### Author

Who's the author? Ghost? You can change it by changes the `author` string.  
Example of the usage: `<meta name="author" content="LIGMATV">`

```json
    "author": "LIGMATV",
```

### Url

Url to your (this) website. Used in `sitemap.xml` and `robots.txt` for search engine optimization.

```json
    "url": "https://11ty-beer.vercel.app",
```

## Theme

Default theme for BeerCSS

```json
    "theme": "#6750a4",
```

### Description

The default description if the `description` string in the frontmatter is not filled.  
Example of the usage: `<meta name="description" content="Welcome to my blog, powered by 11ty & GMX.css.">`

```json
    "description": "Welcome to my blog, powered by 11ty & GMX.css.",
```

## GitHub Repository

The github repository which used for hosting the website code.  
Example of the usage: The "View source of this page" and "Edit this page" button in posts.

```json
    "ghRepo": "LIGMATV/11ty-beer",
```

## Keywords

The default keywords if the `tags` array in the frontmatter is not filled.  
Example of the usage: `<meta name="keywords" content="eleventy, material, pwa">`

```json
    "keywords": ["eleventy", "material", "pwa"],
```

## Social items

Used in the footer. There's a 3 strings for every arrays you need to fill.
1. `title`: The title/name of the social media.
2. `url`: The social media URL.
3. `icon`: The logo for the website. You can find the logo names in [Simple Icons](https://simpleicons.org/).  
4. `rel`: (Optional) The relationship between the website and social media. Useful for [Fediverse verification](https://docs.joinmastodon.org/user/profile/#verification).

```json
    "socialItems": [
        { "title": "Feed", "url": "/feed.xml", "icon": "rss" },
        { "title": "GitHub", "url": "https://github.com/LIGMATV/11ty-beer", "icon": "github" },
        { "title": "Mastodon", "url": "https://techhub.social/@ligmatv", "icon": "mastodon", "rel": "me" }
    ],
```

## Menu items

Used as lists in sidebar menu. There are 3 strings for every arrays you need to fill.
1. `title`: The title of the page.
2. `url`: The link to the page. For triggering with [`data-ui`](https://github.com/beercss/beercss/blob/main/docs/JAVASCRIPT.md#the-trigger-of-elements), use `javascript:ui('...')`.
3. `icon`: The icon that is presenting the page. You can find the icon names in [Pictogrammer's Material Design Icons](https://pictogrammers.com/library/mdi/).

```json
    "menuItems": [
        { "title": "Home", "url": "/", "icon": "home-variant-outline" },
        { "title": "Posts", "url": "javascript:ui('#dialog-posts');", "icon": "star-box-outline" },
        { "title": "Tags", "url": "javascript:ui('#dialog-tags');", "icon": "tag-multiple-outline" },
        { "title": "Theme", "url": "javascript:ui('#dialog-themes');", "icon": "palette-outline" }
    ]
```

## Comments (Giscus)

Add comments feature for every posts.
1. In the repository where your 11ty Beer used, enable the Discussion feature.  
    You can [learn more at GitHub Docs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository).
2. [Install Giscus](https://github.com/apps/giscus) to your repository.
3. Go to [giscus.app](https://giscus.app/en), here the values you need to get.
    - `data-repo` & `data-repo-id`: In "**Repository**" input, fill it.
    - `data-category` & `data-category-id`: In **Discussion Category** select, click at your desired category. (For example: **General**)

4. In **Enable giscus** section code, copy the `data-repo`, `data-repo-id`, `data-category` and `data-category-id` value, and change the configuration values.

```json
    "giscus": {
        "dataRepo": "ligmatv/11micro",
        "dataRepoID": "R_kgDON1R6_Q",
        "dataCategory": "Post Comments",
        "dataCategoryID": "DIC_kwDON1R6_c4CnCYA"
    }
```

## Favicons

To create a complete favicon for PWA and various platforms in the right size and format, we rely on the [image generator from PWA Builder ↗](https://www.pwabuilder.com/imageGenerator). Once the zip is created, you can extract it to `src/public/favicon`, which includes the `android`, `ios`, and `windows11` folders.

You can see the [demonstration of the generated favicons](/posts/favicons/) by PWA Builder