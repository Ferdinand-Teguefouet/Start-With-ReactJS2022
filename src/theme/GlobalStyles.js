import styled from 'styled-components';

const breakpoints = {
    sm: 480,
    md: 768,
    lg: 991,
    xl: 1200,
}

export const Container = styled.div`
    width: 100%;
    max-width: 90%;
    @media (min-width: ${breakpoints.xl}px){
        max-width: 1100px;
    }
    margin: 0 auto;
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    flex-direction: column;
    background-color: ${props => (props.backgroundColor ? props.backgroundColor : "white")};   
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: -10px;
    margin-right: -10px;
`;

export const Col = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
`;