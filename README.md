# motion-scroll
scroll to a position or an element with easing
## Installation
```
npm install motion-scroll
```
## Basic usage
### scroll to top of page
```javascript
import MotionScroll from 'motion-scroll';
import { easeOutSine } from 'es6-easing';

// scrolls to the top of the page at 2000px per second easing out
MotionScroll.scroll( {
    scrollTo: 0,
    speed: 2000,
    easing: easeOutSine,
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
        element: document.documentElement,
        axis: 'y',
        scrollTo: 0, // number or dom element
        speed: 2000, // speed in pixels per second
        easing: null, // if no easing function is provided animation will be linear
        callBack: null,
        delay: 0, // in seconds
        force: false, // prevent mousewheel interaction from cancelling scroll
        minScrollTime: 0, // in seconds
        maxScrollTime: 10, // in seconds
    } );
```
