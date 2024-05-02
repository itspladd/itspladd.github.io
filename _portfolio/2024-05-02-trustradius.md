---
title: "TrustRadius"
excerpt: "I was a software engineer for TrustRadius, a B2B software review site."

header:
  teaser: assets/images/thumbnails/2024-05-02-trustradius-th.png
  overlay_filter: rgba(0, 70, 70, 0.8)
  overlay_image: assets/images/banners/2024-05-02-trustradius.png
  caption: "Don't look at this screencap. Look at the bunny logo! LOOK AT IT. I AM SO PROUD"
  actions:
    - label: Visit the TR Site
      url: https://www.trustradius.com/
sidebar:
  - title: "Role"
    image: assets/images/thumbnails/2024-05-02-trustradius.png
    image_alt: "The TrustRadius logo"
    text: "Full-stack developer (contractor, full-time)"
  - title: "Responsibilities"
    text: "Frontend, backend, and database work"
  - title: "Tech stack"
    text: "React, Next.js, TypeScript, Express, MongoDB, Postgres"
---

## Summary

TrustRadius is a software review website for business products. From HR software to data analysis tools to [dental software](https://www.trustradius.com/dental), they aim to gather high-quality user reviews and other data about the entire business-to-business (B2B) software world.

I began at TrustRadius as a research analyst, but I ended as a software engineer.

## Key Responsibilities

On the engineering team, I was responsible for a wide array of features, bug fixes, and other enhancements to the site:

### SEO and Indexation
I did a lot of work to standardize and stabilize our SEO position and our sitemap.

TrustRadius has a LOT of pages. Some of them were low-quality pages that we knew Google wouldn't index (for example, pages for software products with no reviews, no screenshots, no content at all besides the name of the product). Others were pages that *had been* low-quality, but recently crossed the threshold into indexable-quality. We wanted to know which pages were indexable, present those URLs to Google for indexation, and track the progress of the results.

We had tools in place for all three of those steps, but there were problems:

- The code to measure page quality was copied between different codebases. The copies had drifted apart from each other, so different parts of our app gave different results.
- The feed that presented pages to Google had gotten "stuck" on the same set of products.
- We had over 10,000 pages we wanted Google to index (and that number kept growing!), but we could only present about 80 URLs to Google per day. Not fast enough!

I addressed all of these problems:

- I implemented a standardized, shared library to measure page indexability
- I improved our URL presentation and tracking systems to ensure that they'd cycle through all eligible pages without getting "stuck"
- I created a modular "feed" that appeared on top-level pages to present additional URLs to Google, increasing the number of pages presented per day by a large factor (500%, at minimum). You can see an example of that feed below:

<figure class="align-center">
  <img title="We didn't have engineering bandwidth to migrate the pages this widget appeared on, so I had to crowbar this React component into our legacy Pug-based pages. It was an interesting challenge!" alt="A screencap of a web page section. The header says 'Explore recently added products.' Three small 'cards' are displayed in a row below the header, displaying the logos and names of three of the aforementioned products. Below the product cards, left and right buttons allow the user to navigate to a different set of three products." src="{{ site.baseurl }}{{ site.image_path }}/trustradius-category-feed.png"/>
  <figcaption>Twelve product page URLs per top-level category page, all wrapped in a carousel so users don't have to scroll too much. Google could see them all, though!</figcaption>
</figure>

When I left TrustRadius, our sitemap and indexation processes were more reliable, scalable, and transparent than when I started.

### Modernization and Migration
I migrated old pages from the "leave a product review" process from [Pug](https://github.com/pugjs/pug) files to React files in our Next.js ecosystem. This essentially required re-writing the pages from scratch, since Pug and React aren't compatible. I also set up API endpoints, wrote unit tests, and added new form validation rules to support the pages in their new context.

Additionally, I participated in a team-wide effort to upgrade our [Mongoose](https://mongoosejs.com/docs/) dependency. Mongoose was our object modeling system: the interface between our application and our MongoDB data. The version of Mongoose we used was being deprecated, and we had to upgrade for security reasons. It was a big undertaking: old, deprecated Mongoose commands and configuration were littered throughout a decade's worth of legacy code whose original developers were no longer around.

My biggest contribution to this effort was identifying a potential data-loss bug before it could make it to production. Mongoose had changed the underlying way its "update data" commands worked: if we had stuck with our old code, a *lot* of existing data would have been silently deleted.

(A quick analogy for the problem: imagine that you order a hamburger with normal toppings, but then tell the server "wait, actually, add bacon and remove the lettuce, please."

The way our code worked with the old version of Mongoose, the server would update your order: add bacon, remove lettuce, leave everything else the same. Makes sense, right?

The way our code worked with the *new* version of Mongoose, the server would update your order: add bacon, remove lettuce. But since you didn't specifically say to KEEP the bun, the meat, or any other parts of the hamburger, remove those too! Throw it all away! 

<figure class="align-center">
  <img title="Please go to a hamburger restaurant and do this, and send me a picture. You will receive 50 points. That's a lot of points!" alt="Three slices of cooked bacon on parchment paper. There's a lot of grease." src="{{ site.baseurl }}{{ site.image_path }}/wright-brand-bacon-unsplash.png"/>
  <figcaption>Here you go: two strips of bacon, exactly as you ordered! (Photo by <a href="https://unsplash.com/@wrightbrand?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Wright Brand Bacon</a> on <a href="https://unsplash.com/photos/brown-and-white-meat-dish-zewhuIAHMAM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>)
  </figcaption>
</figure>

Now imagine instead of a hamburger, you lost the login information of your users, or the reviews that they spent a bunch of time writing. That's what we call "bad.")

We implemented a fix for the bug and tested it as thoroughly as we were able, but it turns out there was still a flaw for one specific edge case...

### The One Specific Edge Case (or: Data Integrity and Recovery)

A few weeks after the Mongoose upgrade, the engineering team was notified about missing data. *Important* data that our biggest customers *really wanted*. Uh oh.

I was assigned to look into the data loss for two reasons:

- I had recently worked on the part of the site where this data was supposed to be collected
- I had a reputation for digging deep into weird bugs

Identifying the source of the data loss was tricky. The data *was* being collected! We hadn't messed up the new part of the site!

It took a couple of days of frustrated, granular testing before I identified the exact circumstances that caused the data to be deleted: it was Mongoose! Morespecifically, it was a hyper-specific version of the issue we had fixed during migration. Our solution was incomplete for that *exact* scenario.

I added a specific patch for that specific problem, but the data was still missing. Normally, you would restore the data from a database backup, but our backups from the affected time were once-per-day, and most of the affected data had been created *and* deleted in the same day. Backups were going to be unreliable at best, useless at worst.

So I dug deeper, and deeper, and eventually I hit paydirt. I found an event log that tracked every instance of the data in question. I wrote a custom script that located "empty" datapoints, matched them to the most recent event log, and restored the data. All of it.

Our customer relations team was pretty happy. I was pretty happy, too.

### Performance and Reliability

TrustRadius had grown a lot by the time I joined, and some of the code hadn't kept up. Database queries that had worked fine previously had become slow or entirely unresponsive, and it was affecting user-facing pages.

I worked on several distinct pages and internal tools to update the underlying code. I improved page response times, fixed internal tools that had started taking so long they were timing out, and wrote efficient MongoDB aggregations to pull big, complex datasets in just a couple of seconds.

## Timeline and Lessons Learned

I did all of that stuff in about a year. It's kind of hard to believe, looking back at it.

I joined TrustRadius in January 2022 after completing a web development bootcamp. I was on the Research team, but I found ways to integrate my programming knowledge and skills into my day-to-day work to accelerate myself, my fellow analysts, and cross-team colleagues.

Eventually, I got access to our MongoDB instance and our GitHub repositories, and I started volunteering small features and bug fixes for internal tools. I made it clear that I wanted to transfer to the engineering team, and before long they invited me to join.

I was worried that I wouldn't be able to keep up; that it would be too complicated for me, that I'd be out of my depth. I was elated to find out that I was wrong. I learned a lot and contributed a lot, but the biggest thing I learned was that I'm capable of excelling in a developer role.

In the end, my managers were unhappy to lose me. As far as outcomes go, I'm pretty satisfied with that.