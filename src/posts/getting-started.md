---
title: Getting Started
description: Tutorial how to use it with Terminal.
date: 2024-12-20
tags:
 - tutorial
 - markdown
---

## How to use

1. Clone this repository: `git clone https://github.com/LIGMATV/11ty-gmx.git`
2. Open that directory: `cd 11ty-gmx`
3. Install dependencies: `npm install`
4. Start development: `npm start`
5. See your website at http://localhost:8080/

## Configuration

Check the [configuration post](/posts/configuration/).

## Directory structure

It's simple, anyone gonna love how simple is this starter built.

```
11ty-beer/
├── 📂 _site                <-- The website result
├── 📂 node_modules         <-- Modules that made it
├── 📂 src/                 <-- Whole source
│   └── 📂 _data               <-- Global data
│       └── 📄 site.json       <-- All your configuration here!
│   └── 📂 _includes           <-- Folder that included
│       └── 📂 components          <-- Components like dialog is here
│       └── 📂 layout              <-- Base, default, or post layout
│   └── 📂 common              <-- Folder for common things, not for touched
│       └── 📄 manifest.njk         <-- Manifest file (manifest.json)
│       └── 📄 robots.njk           <-- Robots file (robots.txt)
│       └── 📄 service-worker.njk   <-- Service worker (sw.js)
│       └── 📄 sitemap.njk          <-- Sitemap file (sitemap.xml)
│   └── 📂 pages               <-- The pages in the root
│       └── 📄 index.njk           <-- Index file
│       └── 📄 posts.njk           <-- Posts list
│       └── 📄 tags.njk            <-- Page for all the tags
│       └── 📄 tags-list.njk       <-- Tags list
│   └── 📂 posts               <-- The posts
│       └── 📄 *.md                <-- Your posts file in Markdown
│       └── 📄 posts.json          <-- Datas for all posts
│   └── 📂 public              <-- Folder that included to the root
│       └── 📂 favicon             <-- Favicon and icons
│       └── 📂 img                 <-- Images to be included on posts/anywhere
└── 📄 .eleventy.js             <-- Expert configuration
```