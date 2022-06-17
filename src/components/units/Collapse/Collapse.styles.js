import styled from 'styled-components';

export const CollapseStyled = styled.div`
    > p{
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.15s ease;
    }

    &.active {
         p{
            max-height: ${props => (props.pHeight ? props.pHeight : 30)}px;
         }
    }

    h4{
        cursor: pointer;
    }
`;