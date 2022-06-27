import React, {useEffect} from 'react';
import Body from 'components/layout/Body/Body';
import Collaborator from 'components/units/Collaborator/Collaborator';
import {Collaborators, CollapseData, CountUpData} from 'utils/data';
import CountUp from 'components/units/CountUp/CountUp.js';
import Collapse from 'components/units/Collapse/Collapse.js';
import CounterComponent from 'components/CounterComponent/CounterComponent.js';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from 'store/blog.slice.js';
import { addModal } from 'store/modal.slice.js';
import { fetchUsers} from 'store/user.slice.js';
import myimage from 'assets/img/person.png';

// Styles
import {CollaboratorsStyled, CountUpSection} from './Home.styles.js';
import { CollapseStyled } from 'components/units/Collapse/Collapse.styles.js';


function Home() { 
    //blog part
    const dispatch = useDispatch();
    const articles = useSelector(state => state.blog.articles);
    const blogStatus = useSelector(state => state.blog.status);
    //console.log('articles', articles);
    //console.log('status', blogStatus);

    // Collaborators (users) part
    const users = useSelector(state => state.user.users);
    const userStatus = useSelector(state => state.user.status);
    console.log('users', users);

    useEffect(() => {
        if(blogStatus !== 'SUCCESS' && blogStatus !== 'PENDING'){
            dispatch(fetchArticles());
        }
        if(userStatus !== 'SUCCESS' && userStatus !== 'PENDING'){
            dispatch(fetchUsers());
        }       
    }, [blogStatus, userStatus]);
    console.log('users_load', users);
    
    
    const openModal = () =>{
       dispatch(
           addModal({
                headerContent: "Hi guys",
                bodyContent: <div><p>How are you?</p>
                <button onClick={() => dispatch(addModal({headerContent: "new modal", bodyContent:"Yes, it is new",}))}>Another modal</button>
                </div>
            })
       ); 
    }

    return(
            <Body title='GNH'>
                {/*<CounterComponent />*/}
                <div className="modal" style={{paddingTop: 40, paddingBottom: 100}}>
                    <button onClick={openModal}>Open Modal</button>                </div>
                <h3>Collaboration with</h3>
                <h4>Generation No Hunger</h4>
                <CollaboratorsStyled onClick={openModal}>               
                    {blogStatus === 'SUCCESS' ? (                        
                        users.map((u) => (                          
                            <Collaborator 
                                key={u.id}                                
                                image = {myimage} 
                                title={u.name} 
                                url={u.website}                                
                />))) : (<p>There are no articles yet.</p>)}
                </CollaboratorsStyled>
                <CountUpSection>
                    {CountUpData.map((c, idx) => (<CountUp key={`countup-${idx}`} number={c.number} name={c.name} initialValue={c.initialValue} animationTime={c.animationTime} />))}
                </CountUpSection>
                <CollapseStyled>
                    {CollapseData.map((c, idx) => (<Collapse key={`collapse-${idx}`} title={c.title} desc={c.desc} />))}
                </CollapseStyled>
                <div className="blog" style={{marginTop: '10rem', marginBottom: '10rem'}}>
                    <h3>Last articles</h3>
                    {blogStatus === 'SUCCESS' ? 
                        articles.slice(0, 5).map(el =>( 
                        <div key={el.id}>
                        <h4>{el.title}</h4>
                        </div>
                    )) : (
                        <p>There are no articles yet.</p>
                    )}
                </div>
            </Body>
        );
}

export default Home;