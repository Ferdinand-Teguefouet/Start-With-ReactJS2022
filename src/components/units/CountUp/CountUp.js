//import { cleanup } from '@testing-library/react';
import React, {useState, useEffect, useRef} from 'react';

//styles
import {CountUpStyled} from './CountUp.styles';

// Options of intersectionObserver()
const IObsOptions = {
	root: null,
	rootMargin: '0px',
	threshold: 0,
};
///////////

function CountUp({number, name, initialValue, animationTime}) {
    const [displayNumber, setDisplayNumber] = useState(initialValue);
    const myCounterRef = useRef(null);

    useEffect(() => {
        //const intervalTime = animationTime / (number - initialTime);
        //console.log("interval", initialTime);
        let start;

        function step(timestamp) {
            if (start === undefined) {
                start = timestamp;
            }
            const elapsed = timestamp - start;
            const iv = initialValue === 0 ? 0 : initialValue/number;
            const progress = iv + (1-iv)*elapsed / animationTime;
            
            setDisplayNumber(parseInt(progress < 1 ? progress*number : number));
            //element.style.transform = 'translationX(' + Math.min(0.1*elapsed, 200) + 'px)';
            if (elapsed < animationTime) { // stop the animation after 2 seconds
              window.requestAnimationFrame(step); // 60hz
            }else{
                window.cancelAnimationFrame(step);
            }
          }
          
          // fire when scrolling
          let observer = new IntersectionObserver((entries, observer) => {
			if (entries[0].isIntersecting) {
                console.log("Hey I am intersecting you!");
				window.requestAnimationFrame(step);
			}
            }, IObsOptions);
            observer.observe(myCounterRef.current);

            return () => observer.unobserve(myCounterRef.current);
    }, []);
    return (
        <CountUpStyled ref={myCounterRef}><span className="number">{displayNumber}</span>
        <span className="name">{name}</span>
        </CountUpStyled>
    );
}

export default CountUp;