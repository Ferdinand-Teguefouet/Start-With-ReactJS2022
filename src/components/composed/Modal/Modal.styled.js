import styled from 'styled-components';

export const ModalStyled = styled.div`
    diplay: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    padding: 0;
    margin: 0;
    z-index: 800;

    .overlay{
        background-color: rgba(0,0,0,0.8);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
        
    }

    .container{
        z-index: 900;
        display: flex;
        flex-direction: column;
        max-width: 40%;
        min-height: 350px;
        max-height: 90%;
        background-color: #fff;
        border-radius: 6px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
        margin: auto;
        margin-top: 100px;
        position: relative;
    }
`;