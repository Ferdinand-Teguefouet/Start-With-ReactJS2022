import styled from 'styled-components';
import Colors from 'theme/Colors';


export const ButtonStyled = styled.button`
/* This renders the buttons above... Edit me! */
display: flex;
align-items: center;
justify-content: center;
flex-direction: ${(props) => (props.iconPosition === 'left' ? 'row' : 'row-reverse')};
border-radius: 6px;
padding: 0.75rem 2rem;
background: ${Colors.mainColor};
border: none;
color: white;
transition: background-color 0.15s ease;

&:hover{
    background-color: brown;
    cursor: pointer;
}
&:disabled{
    opacity: 0.65;
    &:hover{
        cursor: not-allowed;
    }
}

span{
    margin-left: ${(props) => (props.iconPosition === 'left' ? '0.75rem' : '0px')};
    margin-right: ${(props) => (props.iconPosition === 'right' ? '0.75rem' : '0px')};
}

`;