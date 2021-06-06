---
title: "itspladd.com"
excerpt: "My original personal website."
updatedate: "March 11, 2016"
header:
  overlay_filter: rgba(0, 70, 70, 0.6)
  overlay_image: "assets/banners/2016-05-01-banner-old-website.png"
  title: "Look at that sweet, sweet cross-fade."
  alt: "The IT'S PLADD banner fades out from left to right, revealing HTML code underneath."
type: "website"
live-url: "http://www.pladd.dev/personal-website-old"
source-url: "https://github.com/itspladd/personal-website-old"
live-url-message: "Go to the homepage"
---

PLADD is my personal website. It features a blog, samples of my writing, my drawings, and code projects I've worked on.

### Hosting and Domain ###

PLADD is hosted via [GitHub Pages](https://pages.github.com/) (referred to hereafter as just "Pages"). Pages allows me to manage the source code for the website through GitHub. Pages automatically rebuilds the site when I commit new changes to the master branch.<!--more-->

Pages uses my GitHub username to create the website domain, so the original domain was *itspladd.github.io*. The domain *itspladd.com* is registered with Google Domains. I had to learn how to set up a CNAME file and DNS records to redirect the domain.

### Languages and Tools ###

PLADD is built on [Jekyll](http://jekyllrb.com/). Jekyll is pretty neat; it allows me to write custom HTML and CSS, and then use [Liquid](http://liquidmarkup.org/) templates and logic to generate static pages from very few HTML source files.

Jekyll is installed on all of my development machines. This allows me to build and view any changes I make to the website before putting them on the live site.

### Challenges and Lessons Learned ###

I've been working with HTML and CSS for a while, so the design and layout of the site's individual pages wasn't terribly challenging. I had to do a non-trivial amount of experimenting with CSS positioning attributes (especially [float](http://www.w3schools.com/css/css_float.asp)) to get everything functioning reliably.

Most of the challenges I faced came from learning Jekyll and the Liquid templating system entirely from scratch. Jekyll makes frequent use of [YAML](http://yaml.org/) in configuration files and frontmatter, and I had never even _heard_ of YAML before starting this project. It had a few quirks to work out.

Setting up the build environment on my local machine took some figuring out as well. Originally, I was able to run Jekyll's ordinary commands to build my site, which was pretty simple.

Then, one day, things broke on the live site. And they weren't broken on my local build. Pages had changed the way it built sites, and my local machine was behind. To replicate Pages' build environment exactly, I had to install [Bundler](http://bundler.io/). I had to create a [Gemfile](http://bundler.io/gemfile.html). I had to install [Ruby DevKit](http://rubyinstaller.org/add-ons/devkit/) when everything broke. I swore at things and had to sleep on some problems, and then awoke to the realization that everything was fine and easily fixable.

You know. Standard programmer stuff.

### Known Issues ###

There used to be known issues here, but this is the old version of the site. I'm archiving it to work on the new one!

~~See any problems with the site that aren't listed here? Email <a href="mailto:support@pladd.dev">support@pladd.dev</a> with a description of the problem, and I'll add it to the list!~~

* ~~Mobile-Unfriendlytude~~
    * ~~The site is currently mega unfriendly to some mobile browsers. How do I make a site mobile-friendly? NO IDEA. TIME TO FIND OUT.~~