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
As you might be able to tell from the previous section, I'm really pleased with the functions I created early on; they made it much, much easier to implement more complex behavior later. I was also proud of the overall code structure and organization on the backend, with all of the database helper functions split into different files and bundled wherever they were needed.

I'm also really happy with how well Reggi and I collaborated. As I developed backend routes and data and she developed the front-end requests, design, and UI, we were in constant communication. On more than one occasion, she would complete a frontend implementation at almost the same time as me completing the backend route. This meant that we were able to "join" the two pieces easily and see the fully-working feature!

## Known Issues

<!-- Optional: what needs to be addressed? -->
Currently, InquizitorApp works just fine for its core purposes! We're missing a couple of our stretch features, such as additional study tools and more extensive profile customization; but as far as the user experience goes, the application is complete as-is!

On the backend specifically, I know I can improve the way quizzes are added to the database. Currently, there's a separate SQL query for each quiz, question, and answer, resulting in a LOT of queries to add a single quiz. There's definitely room for improvement!
