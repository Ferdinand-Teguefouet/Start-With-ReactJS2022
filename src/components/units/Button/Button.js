import React from 'react';
import { 
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare,
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import { ButtonStyled } from './Button.styles';

//styles
function Button({text,
        loadingText,
        textStyles,
        buttonsStyles,
        iconsStyles,
        icon,
        iconPosition,
        iconLoading,
        showSpinner,
        isLoading = false, 
        onClick}){
    const handleClick = () => {
        if(isLoading){
            return;
        }
        onClick();
    }
    return <ButtonStyled
                className='red-button'
                onClick={handleClick} 
                disabled={isLoading}
                style={{...buttonsStyles}}
                iconPosition={iconPosition}
            >
                {iconPosition === "left" || iconPosition === "right" ? (<FontAwesomeIcon icon={isLoading && showSpinner ? iconLoading : icon} style={{iconsStyles}} spin={showSpinner} />) : null}                    
                <span style={{...textStyles}}>{isLoading ? loadingText : text}</span>
                
            </ButtonStyled>
}

export default Button; 