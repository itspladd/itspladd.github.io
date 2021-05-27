---
title: "PLADD (The Website)"
shortdesc: "Nerdy stuff about the workings of itspladd.com. Clearly the most meta post on the entire site."
updatedate: "March 11, 2016"
preview-image:
  file: "banner-itspladd-website-code-project.png"
  title: "Look at that sweet, sweet cross-fade."
  alt: "The IT'S PLADD banner fades out from left to right, revealing HTML code underneath."
type: "website"
live-url: "http://www.itspladd.com"
source-url: "https://github.com/itspladd/itspladd.github.io"
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

### Planned Features ###

If you have a suggestion for the site, email <a href="mailto:support@itspladd.com">support@itspladd.com</a> with a feature request. If I like it, I'll add it to the list!

* Build Art Section
    * The Art section is the last section of the site without unique layouts or post formats. I'd like to have the section capable of handling both individual images and collections of images.
* Sidebar Icon for Small Windows
    * Right now, if your browser window is too small, the sidebar and the main content of a page will overlap. Instead, the sidebar should be replaced with a small icon that can be expanded into the full sidebar whenever you actually want it.
* Update Dates
    * Add code to list when a post (blog, art, code project, writing, etc) was last updated.
* Rating System
    * Some content on the site is less suitable for certain audiences due to being chock-full of every bad word known to man. I'd like to have a big, in-your-face rating advisory at the top of such posts.
* Elegantly Handle Big Images
    * Uploading (mostly) raw photos of sketches makes for big huge images. Currently, I link to the full (~10 MB) image for you to open if you want, and then put smaller versions of the image in the posts themselves. Opening giant images in other tabs is probably the correct functionality going forward, but it would be nice to allow someone to click a thumbnail to view a medium-size version of the image as an overlay, and then click to get back to the page's main content.
* Fully Integrate With Social Media
    * It'd be cool to have a (non-obtrusive) way for people to immediately share a blog post, drawing, story, or code project on Facebook/Twitter/Tumblr. Right now all I have are the buttons linking to my respective accounts at the top of the site.
* Comments
    * Enable some sort of commenting system on blog posts.

Completed features:

* Build Coding Section (Moved March 11, 2016)
    * It's right here. You're on it.

### Known Issues ###

See any problems with the site that aren't listed here? Email <a href="mailto:support@itspladd.com">support@itspladd.com</a> with a description of the problem, and I'll add it to the list!

* Mobile-Unfriendlytude
    * The site is currently mega unfriendly to some mobile browsers. How do I make a site mobile-friendly? NO IDEA. TIME TO FIND OUT.