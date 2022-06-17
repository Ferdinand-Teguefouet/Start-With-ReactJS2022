import React from 'react';
import Body from 'components/layout/Body/Body';
import Collaborator from 'components/units/Collaborator/Collaborator';
import {Collaborators, CollapseData, CountUpData} from 'utils/data';
import CountUp from 'components/units/CountUp/CountUp.js';
import Collapse from 'components/units/Collapse/Collapse.js';

// Styles
import {CollaboratorsStyled, CountUpSection} from './Home.styles.js';
import { CollapseStyled } from 'components/units/Collapse/Collapse.styles.js';

function Home() {    
    return(
            <Body title='HOME SCREEN'>
                <h3>Colaboration avec</h3>
                <h4>Génération sans faim</h4>
                <CollaboratorsStyled>
                    {Collaborators.map((c) => (<Collaborator image={c.img} title={c.name} url={c.web}/>))}
                </CollaboratorsStyled>
                <CountUpSection>
                    {CountUpData.map((c) => (<CountUp number={c.number} name={c.name} initialValue={c.initialValue} animationTime={c.animationTime} />))}
                </CountUpSection>
                <CollapseStyled>
                    {CollapseData.map((c) => (<Collapse title={c.title} desc={c.desc} />))}
                </CollapseStyled>
            </Body>
        );
}

export default Home;