---
title: "Using Test-Driven Development to Make A Game Engine"
excerpt: "No, wait, come back! I promise it's less boring than it sounds!"

header:
  teaser: assets/images/thumbnails/2020-07-01-tdd-battleship-th.jpg
  overlay_filter: rgba(0, 70, 70, 0.7)
  overlay_image: assets/images/banners/2020-07-01-tdd-battleship.jpg
  caption: "Photo by <a href='https://unsplash.com/@miqul?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Michal Mrozek</a> on <a href='https://unsplash.com/s/photos/ship-engine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
---



CAPTURING AN IMPORTANT NOTE: Test-driven development specifically uncovered a bug in my code:

```JS
this.segments = [ ...SHIP_TYPES.DEFAULT.SEGMENTS];

// early SHIPS.JS
const SHIP_TYPES = {
  DEFAULT: {
    SEGMENTS: [1, 1, 1]
  }
};

// later SHIPS.js
const SHIP_TYPES = {
  DEFAULT: {
    SEGMENTS: [
      { hp: 1 },
      { hp: 1 },
      { hp: 1 }
    ]
  }
};

// before tests:
let testShip;
before(() => {
  testShip = new Ship();
});

// In one test:
testShip.segments[0].hp = -1;

// In another test:
result1[0].hp.should.equal(1);
```