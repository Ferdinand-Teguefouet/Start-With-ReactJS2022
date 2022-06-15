//import { cleanup } from '@testing-library/react';
import React, {useState, useEffect} from 'react';

//styles
import {CountUpStyled} from './CountUp.styles';

const initialTime = 0;
const animationTime = 2000;


function CountUp({number, name, initialValue, animationTime}) {
    const [displayNumber, setDisplayNumber] = useState(initialValue);
    useEffect(() => {
        //const intervalTime = animationTime / (number - initialTime);
        //console.log("interval", initialTime);
        let start;
        let counter = 0;

        function step(timestamp) {
            if (start === undefined) {
                start = timestamp;
            }
            const elapsed = timestamp - start;
            const iv = initialValue === 0 ? 0 : initialValue/number;
            const progress = iv + (1-iv)*elapsed / animationTime;
            
            setDisplayNumber(parseInt(progress < 1 ? progress*number: number));
            //element.style.transform = 'translationX(' + Math.min(0.1*elapsed, 200) + 'px)';
            if (elapsed < animationTime) { // stop the animation after 2 seconds
              window.requestAnimationFrame(step); // 60hz
            }else{
                window.cancelAnimationFrame(step);
            }
          }
          
          window.requestAnimationFrame(step);
    }, []);
    return (
        <CountUpStyled><span className="number">{displayNumber}</span>
        <span className="name">{name}</span>
        </CountUpStyled>
    );
}

export default CountUp;