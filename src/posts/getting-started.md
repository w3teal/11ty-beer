---
title: Getting Started
description: Start building an 11ty Beer website and deploy it.
date: 2024-12-20
lastUpdated: 2025-12-31
tags:
 - tutorial
---

> This tutorial is intended for beginners, if you think there is an error in the command or word, please contribute.

## Install

You needed to have [`git`](https://git-scm.com/install/), [`nodejs`](https://nodejs.org/en/download), and [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed. You can follow the installation guide in their respective page. Then, run those commands.

```sh
git clone https://github.com/w3teal/11ty-beer ./my-blog
cd ./my-blog
npm install
npm start
```

If you wonder how to edit the configuration file or create the markdown files, you needed an code editor like [Visual Studio Code](https://code.visualstudio.com/), and I recommend you to install [Better Nunjucks](https://marketplace.visualstudio.com/items?itemName=ginfuru.better-nunjucks) for `.njk` formatting.

> And then, you can check the [configuration post](/posts/configuration/), and configure it to your liking.  
> To start writing an new post, you can check the [writing post](/posts/writing/).

## Publish

After done polishing, you should publish it and share to anyone! But, if you still not familiar on how to using `git` in CLI. Here the steps.

You need to have an [GitHub](https://github.com/) account, and then apply your `git` credentials the same as your GitHub account, it will appear in the commit history of the repository.

```sh
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# and you can check what applied...
git config --list
```

Back into the repository directory, we needed to initialize the repository, and publish it by push.

```sh
git init
git add .
git commit -m "i make blahblahblah..."
git push -u origin main
```

And to deploy it, you can use [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or other [deploy services](https://www.11ty.dev/docs/deployment/). And then, simply add the repository into that deploy service