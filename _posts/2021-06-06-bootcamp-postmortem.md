---
title: "Emerging from the Lab"
excerpt: "A post-bootcamp bootcamp post"

header:
  teaser: # Teaser image URL
  overlay_filter: rgba(0, 70, 70, 0.6)
  overlay_image: assets/images/banners/2021-06-06-bootcamp-postmortem.jpg
  caption: "Twelve weeks in a lighthouse: not as bad as it sounds. Photo via Unsplash."
---

Uh. Hello! It's been a _while_. Five years, in fact, since I've written on this dang site. It feels like much, much longer.

What have I been doing in the interim? I've been trying lots of new things. No, seriously. I've been:

- A modestly successful Twitch streamer
- A freelance writer
- A tire changer (yes, really)

And now, on the cusp of moving to Canada, I'm making the transition into a full-time professional software/web developer. Why such a hard pivot, you may ask? Two very important reasons:

1. I've loved computers and technology since I was very young, and I've kept coming back to programming over and over since I was a teenager. There's nothing quite like the feeling of typing a bunch of symbols into a computer and seeing it actually do something useful or fun.
2. Changing tires in Canadian winter is, in fact, the unwritten Tenth Circle of Hell, designed _specifically_ for my everlasting torment.

So what's a person with surface-level, hobbyist programming skills and a few months of quarantine to do? If you said "attend a web development bootcamp," then that was a really strange thing to do. Why are you talking to your monitor? This website can't hear you, and you probably accidentally instructed your Alexa or whatever to enroll you in an intensive three-month course in Javascript, SQL, Ruby, and other important web development languages and frameworks. You should double-check, and cancel it if necessary.

Unless you _want_ to take a web development bootcamp, which is what I just finished doing.

## Booting Up

After a bit of research into Toronto-area programming bootcamps, I joined up with [Lighthouse Labs](https://www.lighthouselabs.ca/) for their three-month program that began on March 1. We started off with basic Javascript concepts: functions, objects, conditionals, arrays, and loops (abbreviated to FOCAL, although I would have preferred FALCO.)

<figure class="align-center">
  <img title="pew pew pew" alt="Falco, the Star Fox character, with the text 'FOCAL joins the battle!' superimposed." src="{{ site.baseurl }}{{ site.image_path }}/falco-focal.png"/>
  <figcaption>See? It's just not the same.</figcaption>
</figure>

I was already pretty familiar with most of these concepts, having dealt with basic programming structures since high school. They're the core building blocks of many programming languages. During this time, I felt like I breezed through the core work and the stretch work, often with plenty of time left in the day to relax.

I also spent a fair amount of time assisting other students in my cohort. The bootcamp is intended for people of _any_ skill level, meaning some of my peers had never done any sort of coding before. I wanted to try and use my existing experience to help anyone who asked!

<aside class="aside-right">
  <img src="{{ site.baseurl }}{{ site.image_path }}/thumbs-up.jpg" />
  <p>
    why yes Derek, i totally know what "hoisting" means, give me ten seconds. no derek I am <em>not</em> frantically googling "hoisting javascript fast answer please" why would you even suggest that haha
  </p>
</aside>

I'm really glad I did, because I got to know a lot of my fellow students through bug hunting and troubleshooting. I also reinforced my existing knowledge and discovered my own blind spots when I would try to explain a concept and find out that I didn't actually understand it yet.

I could talk forever about the instructors, [projects](/portfolio/2021-06-04-lighthouse-projects.html), and student support staff (hi Chetna and Janelle!), but this post would be WAY too long. Instead, let's jump to the two self-driven projects of the bootcamp: the midterm and the final.

## Midterminal Velocity

For the midterm project, we were paired randomly with other students in our cohort. I was paired with [Reggi](https://github.com/ahhreggi), and we picked "Quiz Application" from the list of available projects. My mind, irrevocably poisoned by chronic exposure to the internet, was swimming with visions of personality quizzes like "Which Gremlins Character Best Represents The Astronomical Sign Of The Disney Princess Living In Your Soul?" and "How Vulnerable Are You To Online Phishing Scams? Enter Each Digit Of Your Social Security Number Here To Find Out."

Thankfully, Reggi used her functioning human brain to suggest that an application for _user-generated_ quizzes would be more technically interesting to create, and also have the potential to create some kind of _actual value_ for other human beings. So we did that instead, and in the span of one week (ONE. WEEK.) we created: [THE INQUIZITORAPP](https://github.com/itspladd/quiz-app).

<figure class="align-center">
  <img title="Spoiler alert: Mario can eat only fungus. Thankfully, everything in the Mushroom Kingdom, sapients included, is made of fungus, so he never goes hungry." alt="A screenshot of the InquizitorApp page, showing a quiz entitled 'Mario's Dietary Restrictions.'" src="{{ site.baseurl }}{{ site.image_path }}/inquizitor-screenshot.png"/>
  <figcaption>I did, in fact, still manage to create goofball quizzes, because I cannot be stopped.</figcaption>
</figure>

"Hey Paul," you might say, "That looks really good!" And I'd say, "Hey, thanks! Except that I did absolutely none of the design work: Reggi handled the entire front-end, including design, UI, and layout. If literally any part of InquizitorApp looks good (and it ALL looks VERY good), then it's because of her. I could not have asked for a more dedicated partner on a project."

As for me, I handled the back-end: the server, the routing, and the database. Reggi and I hit a great flow in our development process, where we were documenting what each part of the app expected from the other part of the app, and so we were able to work largely independently - although we still had morning sync-up meetings to make sure we were moving in the same direction, and we bugged each other with short questions or clarifications throughout the day.

Quick note: this style of work delegation is known as a **horizontal** split. One person (or team) works on the front-end; another works on the back-end. Each work group has specific areas of interest and doesn't meddle in the other group's field. Like any approach, it has pros and cons: we were able to work separately with very little overlap or interference, but we were _only_ familiar with our own portion of the app. That meant that I didn't learn any new CSS or jQuery during the app's development, and Reggi didn't get much practice with routing or SQL queries!

Thanks to hard work from both of us and our horizontal work delegation, we were able to finish our minimum viable product in just a few days, and spend the rest of the week on extra features (like a review system, average ratings, and user avatars), code cleanup, and polish!

For more details on InquizitorApp, check it out [on my portfolio page](/portfolio/2021-06-05-inquizitor.html) or on [GitHub](https://github.com/itspladd/quiz-app)!

## Final Destination

Okay, BIG jump ahead. I'll just skip over the two weeks of "Oh My Goodness, What Is [React](https://reactjs.org/)?! I'm In Hell, Bring Back jQuery" and some brief Jeff Bezos LARPing for our introduction to Ruby on Rails, where we worked on an e-commerce clone called Jungle.

For the final project of the bootcamp, we were allowed to pick our own teams! I joined up with [Kate](https://github.com/KateIsabelle) and [Adele](https://github.com/MrinalN), since we had become good friends, comrades, and commiserators throughout the course.

With Adele's background in the performing arts, we decided to create a space-finding app: the elevator pitch is "AirBnB, but designed to promote a sharing economy for artists." This time, we had two weeks!

Well, in theory we had two weeks. In practice, we had one week of coding, four days of "OH GOD WE HAVE TO PRESENT THIS, POLISH EVERYTHING WE CAN. NO NEW FEATURES" and three days of "AAAAHHH WE HAVE TO PRESENT THIS TO A BUNCH OF STRANGERS ON THURSDAY, WE NEED A SCRIPT AND A PLAN AND REHEARSAL."

Given all of that, I think we did pretty well: we created [Rehearsal Room](https://github.com/KateIsabelle/rehearsal-room)!

<figure class="align-center">
  <img title="Please note that all violin-practicing spaces come with a surly violin expert who will silently judge your amateur technique." alt="A screenshot of the Rehearsal Room front page, displaying a woman playing a violin with the text 'Artists Looking For Space. Spaces Available For Artists.'" src="{{ site.baseurl }}{{ site.image_path }}/rehearsal-room-screenshot.png"/>
</figure>

This was our first time building a new React application from the ground up, so it took us a few days to find our footing. By the end of the project, however, we were all jumping in and out of components and hooks easily!

<aside class="aside-left">If you're not familiar with React, then that last paragraph might make absolutely no sense. If you like, you can just pretend that <strong>components</strong> are big hoops, and <strong>hooks</strong> are trapezes. Then imagine the three of us as <strong>circus performers</strong>. It's pretty similar, actually.</aside>

In contrast to InquizitorApp, we divided the work **vertically**, which meant that each of us was responsible for entire slices of the application, from the front-end styling to the database connection. Working vertically felt like a slower approach, with more development friction; however, we all became familiar with the entire shape of the application, rather than _only_ having familiarity with our specific domains. For a student project intended to help us all learn full-stack development, I think we made the right decision.

Once again, you can see more details about the project on my [portfolio page](/portfolio/2021-06-06-rehearsal-room.html), or click the link before the photo to see it on GitHub!

## Okay, that's enough.

What? But I have so much more to say!

## Stop it. You've written too much already. Look at how long this post is, you goober.

You can't stop me. I'm the _author!_ I can keep going as long as I want!

## You get 50 more words, then I'm replacing everything with hipster gibberish.

Aaahhh fine okay. I'm super glad I attended the bootcamp - I learned SO much about programming languages, modern-day development tools, and my own capacity to stick with large, complex projects. I met amazing people, got to work on cool stuff, and I'm SO EXCITED to start a new career in kombucha brunch microdosing single-origin mixtape food truck slow-carb paleo biodiesel.