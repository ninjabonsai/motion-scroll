# motion-scroll
scroll to a position or an element with easing
## Installation
```
npm install motion-scroll es6-easing
```
es6 easing documentation can be found here..  
https://github.com/ninjabonsai/es6-easing
## Basic usage
### scroll to top of page
```javascript
import MotionScroll from 'motion-scroll';
import { easeOutExpo } from 'es6-easing';

// scrolls to the top of the page at 2000px per second easing out
MotionScroll.scroll( {
    scrollTo: 0,
    speed: 2000,
    easing: easeOutExpo,
} );
```
### scroll to a child element's position
```javascript
MotionScroll.scroll( {
    scrollTo: document.querySelector( '#foo' ),
} );
```
### scroll an element instead of the window
```javascript
MotionScroll.scroll( {
    element: document.querySelector( '#bar' ),
} );
```
### Config defaults
```javascript
MotionScroll.scroll( {
    element: document.documentElement, // element to scroll
    axis: 'y', // scroll on the x or y axis ie- horizontal or vertical scrolling
    scrollTo: 0, // number or dom element
    speed: 2000, // speed in pixels per second
    easing: null, // if no easing function is provided animation will be linear
    callBack: null, // function to call when scrolling is complete
    delay: 0, // delay in seconds until scrolling begins
    force: false, // prevent mousewheel interaction from cancelling scroll
    minScrollTime: 0, // in seconds
    maxScrollTime: 10, // in seconds
} );
```
