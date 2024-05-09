---
title: "Rehearsal Room"
excerpt: "A space-finding app for artists of all kinds."
relevancy_date: "2021-06-06"

header:
  teaser: assets/images/thumbnails/2021-06-06-rehearsal-room-th.png
  overlay_filter: rgba(0, 70, 70, 0.8)
  overlay_image: assets/images/banners/2021-06-06-rehearsal-room.png
  caption: "Forms forms forms forms forms forms"
  actions:
    - label: "GitHub"
      url: https://github.com/KateIsabelle/rehearsal-room
sidebar:
  - title: "Role"
    image: assets/images/thumbnails/2021-06-06-rehearsal-room-th.png
    image_alt: "logo"
    text: "Full-Stack Developer"
  - title: "Responsibilities"
    text: "Dashboard page, dynamic search/filter, and booking functionality"
  - title: "Client"
    text: "Lighthouse Labs (Final Project)"
  - title: "Tech stack"
    text: "React, Express, and PSQL"
---

## Summary

Rehearsal Room is a full-stack web application for listing, finding, and booking spaces for artists to rehearse or develop their art. It was created in partnership with [Kate Davis](https://github.com/KateIsabelle) and [Adele Noronha](https://github.com/MrinalN).

## Key Features

<!-- What important technologies, features, etc were in this project? -->
- Single-page app built using **React** on the frontend and **Express** on the backend, with **PSQL** for the database
- Uses React Router to provide users with bookmarkable URLs for important pages
- Users can register as an Artist, allowing them to browse spaces in their city, request spaces for booking, and manage their outgoing bookings.
- Users can upgrade their account to a Host account, allowing them to list their own spaces on the site and manage incoming bookings (while still allowing them to book time at others' locations)

## Timeline

<!-- How long did it take? -->
Rehearsal Room was developed in two weeks:

- Days 1-3: Planning and user interviews/research
- Days 4-10: Project setup, feature development, and styling
- Days 10-12: Bug fixing and polish
- Days 13-14: Preparation for presentation and delivery of presentation

## Lessons Learned

<!-- What new skills did I learn? What roadblocks did I encounter? What challenges did I overcome? -->

In contrast to the midterm project, [Inquizitor](/portfolio/2021-06-05-inquizitor.html), our team used a *vertical* distribution for the workload. This means that each of us handled individual features of the site, from front-end to server to database. This method did have some drawbacks:

- Increased development friction due to overlapping areas of concern. We had to communicate often about who was touching which files to make sure we didn't create merge conflicts.
- Occasional confusion about who was responsible for certain tasks due to feature overlap
- Slower development time due to each of us working outside our areas of comfort (for example, I'm less comfortable with layout and design, but very comfortable working with custom React hooks and SQL queries)

However, I think the benefits were worthwhile (especially considering it was a *learning* project rather than a deliverable product):

- We each touched the app in many different places, allowing all three of us to get a true full-stack experience from the project
- We each knew the overall design of the application, which would allow any one of us to independently implement new features post-bootcamp
- We were all actively involved in the project from start to finish; none of us finished "our part" of the project while others were still working

## What I'm Proud Of

<!-- What am I particularly happy about from this project? -->
I did a lot of work on the user dashboards, particularly the booking management system. I designed a custom hook called `useBookingManager`that gives developers a set of abstracted functions to use, including handlers for accepting, rejecting, and cancelling bookings. This custom hook made it much easier for me to iterate on the booking management interface itself, since the functionality was abstracted away from the implementation (which is the whole point of React hooks in general)! 

I also designed the live search and filter functionality for the search page. I again created a custom hook called `useFilteredSpaces` that fetches the entire catalog of spaces for the selected city, and then filters the list as the user types in keywords or selects amenities from a list. This "fetch-once" design means users don't have to wait for their page to load every time they update their search - the results update in real-time with no additional communication to our API server needed!

Check out the [readme](https://github.com/KateIsabelle/rehearsal-room/blob/master/README.md) for the project to see GIFs of these features in-use (expand the tab under the **Searching and Filtering** and **User Dashboard** sections in the screenshots)! You can also check out the code for the hooks themselves here: [here's the search/filter hook](https://github.com/KateIsabelle/rehearsal-room/blob/master/frontend/src/hooks/useFilteredSpaces.js), and [here's the hook for managing bookings](https://github.com/KateIsabelle/rehearsal-room/blob/master/frontend/src/hooks/useBookingManager.js).

## Known Issues

<!-- Optional: what needs to be addressed? -->

We had to heavily reduce the scope of the project from our original ambitions (which in itself was a lesson learned). Currently, the biggest known issue is that the app lives only on GitHub, and is not deployed live anywhere. Deploying the site to Heroku or a similar service would be the first step to making Rehearsal Room a deliverable product instead of simply a student project.

From there, we'd like to enhance the booking experience, making it possible for Hosts to provide users with specific times and dates of booking availability to prevent overlapping booking requests. Payment integration would be a big goal as well, allowing users to send payment for their bookings through the app itself rather than coordinating outside the application.

Finally, we'd like to add "frequent flier" options for users that Hosts trust, allowing them to set up recurring bookings, discounted pricing, or other perks for frequent users of a particular space.

With an app like this, there's always plenty of additional features that could be added, but our tight timeling meant we had to focus on our absolute minimum viable product!