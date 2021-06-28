---
title: "InquizitorApp"
excerpt: "An app for creating, taking, and sharing quizzes."

header:
  teaser: assets/images/thumbnails/2021-06-05-inquizitor-th.png
  overlay_filter: rgba(0, 70, 70, 0.8)
  overlay_image: assets/images/banners/2021-06-05-inquizitor.png
  caption: # I can't think of a clever caption for this banner.
  actions:
    - label: Live App
      url: "https://inquizitor-app.herokuapp.com/"
    - label: GitHub
      url: "https://github.com/itspladd/quiz-app"
sidebar:
  - title: "Role"
    image: assets/images/thumbnails/2021-06-05-inquizitor-th.png
    image_alt: "The logo for InquizitorApp: a bright yellow lightbulb with a checkmark inside."
    text: "Backend Developer"
  - title: "Responsibilities"
    text: "Server, routing, and database management"
  - title: "Tech stack"
    text: "Express, jQuery, and EJX"
---

This page is under development - come back soon!
{: .notice--info}

## Summary

InquizitorApp is a RESTful, responsive full-stack web application for creating, taking, and sharing quizzes, created in partnership with [Maria Regina Sirilan](https://github.com/ahhreggi).

## Key Features

<!-- What important technologies, features, etc were in this project? -->
- Anonymous users and logged-in users can take any quiz available on the site
- Logged-in users can create new quizzes, leave reviews, and view past quiz results
- Lightweight client-side footprint, with static HTML generated from EJX pages
- Live deployment on Heroku - you can use the app [right now](https://inquizitor-app.herokuapp.com)! (You might have to give it a moment to get started, since Heroku turns the site off if it hasn't been accessed in a while.)

## Timeline

<!-- How long did it take? -->
InquizitorApp was developed in one week:

- Day 1: Planning and architecture
- Day 2: Project setup, workflow testing, and feature development
- Days 3-6: Feature development, styling, and bug fixing
- Day 7: Bug fixing, polish, and deployment to Heroku

## Lessons Learned

<!-- What new skills did I learn? What roadblocks did I encounter? What challenges did I overcome? -->
I learned a lot about writing large, complex SQL queries to retrieve and manipulate specific datasets. Our database was highly normalized, and sometimes we wanted a very niche dataset such as "the average score of every user that has taken this quiz," or "every answer to every question associated with this quiz, including an indicator of which answer is the correct one." I had to iterate on, test, and bug fix individual queries multiple times throughout the project!

I also learned the value of developing internal tools and APIs early in the process. Early on, I wrote an `insert` method that worked as follows:

- Input: The name of a table in our database, and an array of objects representing rows to be added to that table
- Effect: Generates a single query to create all input rows, and then submits that query to the database
- Output: All data added to the database, including generated indexes/keys, or an error if the query failed.

This method was invaluable later when I needed to write a method that added a quiz to the database. Adding a *quiz* meant adding *questions* associated with that quiz, and each *question* meant adding *answers* associated with that question. With the `insert` method in place already, it was relatively simple to create a recursive design that added an entire JSON-formatted quiz to our database with a single function call!

## What I'm Proud Of

<!-- What am I particularly happy about from this project? -->

## Known Issues

<!-- Optional: what needs to be addressed? -->