import styled from 'styled-components';
import Colors from 'theme/Colors';


export const ButtonStyled = styled.button`
/* This renders the buttons above... Edit me! */
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 11rem;
background: ${Colors.mainColor};
color: white;
border: 2px solid white;

&:hover{
    background-color: brown;
}
&:disabled{
    opacity: 0.65;
    &:hover{
        cursor: not-allowed;
    }
}
`;