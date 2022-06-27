import React from 'react';

// Styles
import {CollaboratorsStyled} from './Collaborator.styles';

function Collaborator({image, title, url}) {
    return (
        <CollaboratorsStyled className='collaborator'>
           <img src={image} alt={title} />
           <h3>{title}</h3>
           <a href={url}>{url}</a> 
        </CollaboratorsStyled>
    );
}

export default Collaborator;