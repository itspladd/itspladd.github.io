---
title: "ShootyBoats"
excerpt: "A 3D Battleship-like experiment using hexagonal tiles instead of squares."
relevancy_date: "2021-09-10"

header:
  teaser: assets/images/thumbnails/2024-09-05-shootyboats-3d-th.png
  overlay_filter: rgba(70, 70, 70, 0.8)
  overlay_image: assets/images/banners/2024-09-05-shootyboats-3d.png
  caption: "Fun fact: all boats are just grey rectangular blocks, and the ocean is made of blue hexagons! It's true!"
  actions:
    - label: "GitHub"
      url: https://github.com/itspladd/shootyboats
sidebar:
  - title: "Role"
    image: assets/images/thumbnails/2024-09-05-shootyboats-3d-th.png
    image_alt: "logo"
    text: "Solo Developer"
  - title: "Responsibilities"
    text: "Everything"
  - title: "Tech stack"
    text: "Three.js, React, and Node.js"
---

## Summary

ShootyBoats is a three-dimensional, Battleship-like game board. I created it back in 2021 as a challenge: could I merge a React user interface with 3D graphics using [Three.js](https://threejs.org/)?

## Key Features

- Single-page app built using **React** for layout and state management, and **Three.js** for graphics
- Under the hood, the standalone [battleship engine](https://github.com/itspladd/battleship-engine) I made handles game state and move validation
- The React UI has a direct connection to the underlying engine and overall game state. (This was harder than it sounded!)
- A set of helper classes map 3D game behavior to the underlying engine functionality

## Timeline

ShootyBoats was initially developed over about three weeks of work:

- Week 1: Setup; server connection; basic interaction between sample Three.js element and React interface
- Week 2: 3D design and layout of game board and pieces; mouse interaction with game board; connecting the game engine to the interface
- Week 3: Implementing "ship" game pieces; pickup/drop controls for ships; additional debugging info

## Lessons Learned

<!-- What new skills did I learn? What roadblocks did I encounter? What challenges did I overcome? -->
3D graphics are challenging, *especially* when they're created entirely through code instead of through a 3D modelling tool like Blender! There's a reason that people specialize in that field. Even just making simple geometric objects on a flat plane posed a lot of challenges: camera controls, lighting, texturing, etc.

I had examples from Three.js to build from, but it was still an entirely new category of code for me.

Additionally, getting React to talk to Three.js and the game engine was more challenging than I expected. I was still new-ish to React at the time, so I was unfamiliar with how `useRef` could be used to create static data that wouldn't change on re-render. This was super important for the game engine itself: it's a complicated JavaScript object, and re-creating it on each React render would be a nightmare!

## What I'm Proud Of

<!-- What am I particularly happy about from this project? -->
Hover functionality. Good lord, hover functionality. The game needs to know when your mouse is hovering over a specific tile, no matter the position, angle, or zoom of the game's camera. This was really tricky to implement! On a basic level, Three.js has great tools for detecting interaction with objects. But detecting which tile in the board was in-focus and relating that information to the underlying game engine was much stranger!

I had to implement some tracking mechanisms into the game classes to link each 3D tile that a user could *see* with its in-engine counterpart; I eventually had to do the same thing for the boats. When I was finally able to reliably pan over the board and see the tiles light up crisply with their full in-engine data displayed in the debug menu, it was exhilarating.

The "pick up and drop a boat" controls were hard, too. How should the game know when a user wants to put the ship on the board vs. returning it to the edge? When a boat is placed, can a user pick it up and re-position it, or set it to the side and grab another one?

<figure class="align-center">
  <img title="I like the color blue. can you tell. it's hard to tell" alt="An animation showing user interaction in ShootyBoats. A cursor moves over a game board composed of blue hexagonal tiles. Each tile is highlighted in a lighter color when the cursor passes over it. The cursor interacts with several ship pieces on the board, represented by grey rectangular blocks. The user moves them to different locations on the board, selects new ones from the edge of the board, and returns some placed pieces to the edge, displaying the range of interaction that ShootyBoats supports." src="{{ site.baseurl }}{{ site.image_path }}/shootyboats_interface.gif"/>
  <figcaption>Games are hard to make, y'all. <em>Fun</em> games are even harder to make.</figcaption>
</figure>

This granular tracking of the user's virtual hand and the game pieces required a lot of trial and error. Again, once I got it working reliably, I was elated.

## Known Issues

<!-- Optional: what needs to be addressed? -->

Right now, ShootyBoats is just an experimental toy rather than a playable game. Adding a full game mode would be great, but that would take a good deal of extra development resources.

There's also some tricky, sneaky bugs hanging out in the controls. If you click around too fast, it's possible to confuse the tracking system and end up unable to interact with the ship pieces properly. Not a big priority for the experimental version, since you can just refresh the page; but if this were to be a playable game, that would be important to iron out!