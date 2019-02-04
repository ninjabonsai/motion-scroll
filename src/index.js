const MotionScroll = {
    scroll( config = {} ) {
        let {
            element = document.documentElement,
            axis = 'y',
            scrollTo = 0, // number or dom element
            speed = 2000, // speed in pixels per second
            easing = null,
            callBack = null,
            delay = 0, // in seconds
            force = false, // prevent mousewheel interaction from cancelling scroll
            minScrollTime = 0, // in seconds
            maxScrollTime = 10, // in seconds
        } = config;
        
        const isYAxis = axis === 'y';
        const dir = isYAxis ? 'top' : 'left';
        
        scrollTo = typeof scrollTo === 'number'
            ? scrollTo
            : scrollTo.getBoundingClientRect()[ dir ] - element.getBoundingClientRect()[ dir ] + element[ `scroll${ dir[ 0 ].toUpperCase() + dir.slice( 1 ) }` ];
        
        let scrollCancelled = false;
        
        const scrollPositions = [ element.scrollLeft, element.scrollTop ];
        const [ scrollFrom, altAxisPos ] = isYAxis ? scrollPositions.reverse() : scrollPositions;
                
        let currentTime = 0;

        const time = Math.max( minScrollTime, Math.min( Math.abs( scrollFrom - scrollTo ) / speed, maxScrollTime ) );

        // animation loop
        function tick() {
            currentTime += 1 / 60;

            const pos = currentTime / time; // values from 0 to 1
            const easingPos = easing !== null ? easing( pos ) : pos; // altered pos value
            
            const finished = pos >= 1;
            
            const scrollPos = [
                altAxisPos,
                finished
                    ? scrollTo
                    : scrollFrom + ( ( scrollTo - scrollFrom ) * easingPos ),
            ];
            
            const [ scrollX, scrollY ] = isYAxis ? scrollPos : scrollPos.reverse();
            
            element.scrollTo( scrollX, scrollY );

            if ( finished ) {
                cancelScroll();

                if ( callBack !== null ) {
                    callBack();
                }
            } else if ( !scrollCancelled || force ) {
                window.requestAnimationFrame( tick );
            }
        }
        window.setTimeout( () => {
            // call it once to get started
            tick();
        }, delay / 1000 );

        function cancelScroll() {
            scrollCancelled = true;
            window.removeEventListener( 'mousewheel', cancelScroll );
        }

        window.addEventListener( 'mousewheel', cancelScroll );
    }
};

export default MotionScroll;
