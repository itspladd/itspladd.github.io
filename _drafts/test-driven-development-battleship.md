---
title: "TBD Test-Driven-Dev Battleship"
excerpt: "TBD"

header:
  teaser: # Teaser image URL
  overlay_filter: rgba(0, 70, 70, 0.6)
  overlay_image: assets/images/banners/YYYY-MM-DD-TDD-battleship.jpg
  caption: ""
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