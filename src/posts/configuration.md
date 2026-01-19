---
title: Configuration
description: Makes your website yours with the customizable configuration.
date: 2024-12-21
lastUpdated: 2026-01-19
cover:
    img: /img/configuration.png
    alt: Abstract artwork reflecting an identity with W3Teal logo.
tags:
 - tutorial
 - config
 - theme
---

Already getting started your blog? It's time to **learn more** to makes your website yours with the customizable configuration.

Here's some customization to make your site more yours.  
Firstly, you can open the `src/_data/site.json` file, you will find some configuration here.


## Locale & Language

The locale and language of your website. Native locale is optional.

```json
    "locale": "en_US",
    "lang": "en",
```

## Title & Short title

The title or name for your website. Short title is used for your PWA's app name.

```json
    "title": "11ty Beer Web",
    "shortTitle": "11ty Beer",
```

## Bio

### Author

Who's the author? Ghost? You can change it by changes the `author` string.  
Example of the usage: `<meta name="author" content="W3Teal">`

```json
    "author": "W3Teal",
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

## Description

The default description if the `description` string in the frontmatter is not filled.  
Example of the usage: `<meta name="description" content="Welcome to my blog, powered by 11ty & BeerCSS.">`

```json
    "description": "Welcome to my blog, powered by 11ty & BeerCSS.",
```

## GitHub Repository

The github repository which used for hosting the website code.  
Example of the usage: The "View source of this page" and "Edit this page" button in posts.

```json
    "ghRepo": "w3teal/11ty-beer",
```

## Keywords

The default keywords if the `tags` array in the frontmatter is not filled.  
Example of the usage: `<meta name="keywords" content="eleventy, material, pwa">`

```json
    "keywords": ["eleventy", "material", "pwa"],
```

## Cover

An cover image that shown in **tags/** pages, and beside of the post header. You still able to use the `cover` in frontmatter element for the Opengraph image too.  
[Learn more about Cover image](http://localhost:8080/posts/11ty-beer-13/#cover-image)

```json
    "cover": true,
```

## Social items

Used in the footer. There's a 3 strings for every arrays you need to fill.
1. `title`: The title/name of the social media.
2. `url`: The social media URL.
3. `icon`: The logo for the website. You can find the logo names in [Simple Icons](https://simpleicons.org/).  
4. `rel`: (Optional) The relationship between the website and social media. Useful for [Fediverse verification](https://docs.joinmastodon.org/user/profile/#verification).

```json
    "socialItems": [{
            "title": "GitHub",
            "url": "https://github.com/w3teal/11ty-beer",
            "icon": "github"
        },
        {
            "title": "Mastodon",
            "url": "https://fosstodon.org/@w3teal",
            "icon": "mastodon",
            "rel": "me"
        }
    ],
```

## Menu items

Used as lists in sidebar menu in the left.
1. `title`: The title of the page.
2. `url`: The link to the page. For triggering with [`data-ui`](https://github.com/beercss/beercss/blob/main/docs/JAVASCRIPT.md#the-trigger-of-elements), use `javascript:ui('...')`.
3. `icon`: The icon that is presenting the element. You can use `si` ([Simple Icons](https://simpleicons.org/)), `mdi` ([Material Design Icons](https://pictogrammers.com/library/mdi/)), [`lucide`](https://lucide.dev/icons/), [`feather`](https://feathericons.com/). You can find the icons in their respective website.

```json
    "menuItems": [{
            "title": "Home",
            "url": "/",
            "icon": "lucide:house"
        },
        {
            "title": "Posts",
            "url": "javascript:ui('#dialog-posts');",
            "icon": "lucide:sticky-note"
        },
        {
            "title": "Tags",
            "url": "javascript:ui('#dialog-tags');",
            "icon": "lucide:tags"
        }
    ],
```

## Toolbar

You can see it at the top, with big Giscus comments button if enabled.

1. `name`: The name of the element, showed as tooltip.
2. `type`: There is `button`, `link`, `themeToggle`, and `menu`  
You can use `items` array with `label` and `href` inside to make the menu elements.
3. `icon`: The icon that is presenting the element. You can use `si` ([Simple Icons](https://simpleicons.org/)), `mdi` ([Material Design Icons](https://pictogrammers.com/library/mdi/)), [`lucide`](https://lucide.dev/icons/), [`feather`](https://feathericons.com/). You can find the icons in their respective website.  If you use `themeToggle` type, the options will be `iconDark` and `iconLight`.
4. `onclick`/`href`: What the element will be used for after clicked. (Not needed with `menu` type).

```json
    "toolbarItems": [{
            "name": "Search",
            "type": "button",
            "icon": "lucide:search",
            "onClick": "document.getElementById('pf--wrapper').classList.toggle('active');"
        },
        {
            "name": "Theme",
            "type": "link",
            "icon": "lucide:palette",
            "href": "javascript:ui('#dialog-themes');"
        },
        {
            "name": "Toggle theme",
            "type": "themeToggle",
            "iconDark": "lucide:moon",
            "iconLight": "lucide:sun",
            "onClick": "mode()"
        },
        {
            "name": "Feed",
            "type": "menu",
            "icon": "lucide:rss",
            "items": [{
                    "label": "Atom",
                    "href": "/feed.xml"
                },
                {
                    "label": "JSON",
                    "href": "/feed.json"
                }
            ]
        }
    ],
```

## Comments (Giscus)

Add comments feature for every posts.  
If you don't use this, you can delete the `"enabled": true,` part in the configuration.
1. In the repository where your 11ty Beer used, enable the Discussion feature.  
    You can [learn more at GitHub Docs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository).
2. [Install Giscus](https://github.com/apps/giscus) to your repository.
3. Go to [giscus.app](https://giscus.app/en), here the values you need to get.
    - `data-repo` & `data-repo-id`: In "**Repository**" input, fill it.
    - `data-category` & `data-category-id`: In **Discussion Category** select, click at your desired category. (For example: **General**)

4. In **Enable giscus** section code, copy the `data-repo`, `data-repo-id`, `data-category` and `data-category-id` value, and change the configuration values.

```json
    "giscus": {
        "enabled": true,
        "dataRepo": "w3teal/11ty-beer",
        "dataRepoID": "R_kgDONgFKcg",
        "dataCategory": "Website Comments",
        "dataCategoryID": "DIC_kwDONgFKcs4C0Yci"
    },
```

## Homepage

### Hero

1. `name`: Simple text that appear under the title, can be the name of website, with an simple companion text.
2. `title`: An big text/heading that centered in the hero.
3. `description`: Longer text that appear below the title, for an longer information/tagline.
4. `image`: The hero image, with the arrays like `src` as the image source and `alt` as the alternative text.
5. `buttons`
    1. `text`: The text that shown in the button.
    2. `url`: What the button will be redirect to for after clicked.
    3. `sr`: An screen-reader only text that clarify about the button action.
    4. `extraClass`: An extra classes that added to the button, e.g. `transparent`, `fill`, etc.
    5. `icon` (optional): The icon that is presenting the button action. You can use `si` ([Simple Icons](https://simpleicons.org/)), `mdi` ([Material Design Icons](https://pictogrammers.com/library/mdi/)), [`lucide`](https://lucide.dev/icons/), [`feather`](https://feathericons.com/). You can find the icons in their respective website.  If you use `themeToggle` type, the options will be `iconDark` and `iconLight`.

```json
    "hero": {
        "name": "11ty Beer, powered by Eleventy v3.1.0.",
        "title": "Blogging in 11ty has never been so easy.",
        "description": "Simply set your configuration and start writing posts in Markdown without hassle.",
        "image": {
            "src": "/11ty-beer-hero.svg",
            "alt": "hero image"
        },
        "buttons": [{
                "text": "Get started",
                "url": "/posts/getting-started",
                "sr": "Tutorial on how to use it with Terminal."
            },
            {
                "text": "Learn more",
                "url": "/posts/configuration",
                "extraClass": "transparent",
                "sr": "Makes your website yours with the customizable configuration."
            },
            {
                "text": "GitHub",
                "url": "https://github.com/w3teal/11ty-beer",
                "extraClass": "transparent",
                "icon": "si:github",
                "sr": "View the source code at GitHub."
            }
        ]
    },
```

### Features

Here, you can list any number of features you would like to show right after the Hero section.

1. `items`
    1. `icon`: The icon that is presenting the element. You can use `si` ([Simple Icons](https://simpleicons.org/)), `mdi` ([Material Design Icons](https://pictogrammers.com/library/mdi/)), [`lucide`](https://lucide.dev/icons/), [`feather`](https://feathericons.com/). You can find the icons in their respective website.
    2. `title`; The title of the feature.
    3. `helper`: Helper text of the feature.
2. `button`: An big button with mesh backkground to redirect to another link, only one.  
If you don't use this, you can delete the `"enabled": true,` part in the configuration.
    1. `text`: The text that shown in the button.
    2. `icon`: The icon that is presenting the button action. You can use `si` ([Simple Icons](https://simpleicons.org/)), `mdi` ([Material Design Icons](https://pictogrammers.com/library/mdi/)), [`lucide`](https://lucide.dev/icons/), [`feather`](https://feathericons.com/). You can find the icons in their respective website.
    3. `url`: What the button will be redirect to for after clicked.

```json
    "features": {
        "items": [{
                "icon": "lucide:hand-metal",
                "title": "Flawless simple installment",
                "helper": "npm install. npm start. Deploy to Vercel."
            },
            {
                "icon": "lucide:file-sliders",
                "title": "Just one configuration to go",
                "helper": "All in your hand (src/_data/site.json), stress-free."
            },
            {
                "icon": "lucide:panel-right-close",
                "title": "Easier navigation",
                "helper": "Modals for posts and tags."
            },
            {
                "icon": "lucide:component",
                "title": "Designed beautiful and professional",
                "helper": "With the bold Material Design with blurry sprinkles."
            }
        ],
        "button": {
            "enabled": true,
            "text": "Get started",
            "icon": "lucide:book-up",
            "url": "/posts/getting-started"
        }
    }
```

## Favicons

To create a complete favicon for PWA and various platforms in the right size and format, we rely on the [image generator from PWA Builder ↗](https://www.pwabuilder.com/imageGenerator). Once the zip is created, you can extract it to `src/public/favicon`, which includes the `android`, `ios`, and `windows11` folders.

You can see the [demonstration of the generated favicons](/posts/favicons/) by PWA Builder