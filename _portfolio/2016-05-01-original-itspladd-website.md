---
title: "itspladd.com"
excerpt: "My original personal website."
header:
  teaser: assets/images/thumbnails/2016-05-01-banner-old-website-th.png
  overlay_filter: rgba(0, 70, 70, 0.8)
  overlay_image: "assets/images/banners/2016-05-01-banner-old-website.png"
  caption: "I picked the color scheme for the site. I'm also colorblind. These two facts are entirely unrelated."
  actions:
    - label: "GitHub"
      url: "https://github.com/itspladd/personal-website-old"
sidebar:
  - title: "Role"
    image: assets/images/thumbnails/2016-05-01-banner-old-website-th.png
    image_alt: "logo"
    text: "Solo Developer"
  - title: "Responsibilities"
    text: "All of 'em"
---

## Summary

PLADD was my original personal website. It features a blog, some just-for-fun writing (with some swears in it), and drawing practice images.

The following is my original write-up for the project. It was written in 2016, so it reflects my skills at the time!

## Hosting and Domain

PLADD is hosted via [GitHub Pages](https://pages.github.com/) (referred to hereafter as just "Pages"). Pages allows me to manage the source code for the website through GitHub. Pages automatically rebuilds the site when I commit new changes to the master branch.<!--more-->

Pages uses my GitHub username to create the website domain, so the original domain was *itspladd.github.io*. The domain *itspladd.com* is registered with Google Domains. I had to learn how to set up a CNAME file and DNS records to redirect the domain.

## Languages and Tools

PLADD is built on [Jekyll](http://jekyllrb.com/). Jekyll is pretty neat; it allows me to write custom HTML and CSS, and then use [Liquid](http://liquidmarkup.org/) templates and logic to generate static pages from very few HTML source files.

Jekyll is installed on all of my development machines. This allows me to build and view any changes I make to the website before putting them on the live site.

## Challenges and Lessons Learned

I've been working with HTML and CSS for a while, so the design and layout of the site's individual pages wasn't terribly challenging. I had to do a non-trivial amount of experimenting with CSS positioning attributes (especially [float](http://www.w3schools.com/css/css_float.asp)) to get everything functioning reliably.

Most of the challenges I faced came from learning Jekyll and the Liquid templating system entirely from scratch. Jekyll makes frequent use of [YAML](http://yaml.org/) in configuration files and frontmatter, and I had never even _heard_ of YAML before starting this project. It had a few quirks to work out.

Setting up the build environment on my local machine took some figuring out as well. Originally, I was able to run Jekyll's ordinary commands to build my site, which was pretty simple.

Then, one day, things broke on the live site. And they weren't broken on my local build. Pages had changed the way it built sites, and my local machine was behind. To replicate Pages' build environment exactly, I had to install [Bundler](http://bundler.io/). I had to create a [Gemfile](http://bundler.io/gemfile.html). I had to install [Ruby DevKit](http://rubyinstaller.org/add-ons/devkit/) when everything broke. I swore at things and had to sleep on some problems, and then awoke to the realization that everything was fine and easily fixable.

You know. Standard stuff.