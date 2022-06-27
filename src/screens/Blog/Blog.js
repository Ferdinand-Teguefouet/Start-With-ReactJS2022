import React, {useEffect} from 'react';
import Body from 'components/layout/Body/Body';

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {fetchArticles} from 'store/blog.slice';

function Blog() {
    const dispatch = useDispatch();
    const articles = useSelector(state => state.blog.articles);
    const blogStatus = useSelector(state => state.blog.status);
    console.log('articles', articles);
    console.log('status', blogStatus);

    useEffect(() => {
        if(blogStatus !== 'SUCCESS' && blogStatus !== 'PENDING'){
            dispatch(fetchArticles());
        }        
    }, [blogStatus])
    return(
            <Body title='BLOG SCREEN'>
                <h3>List of articles</h3>
                {blogStatus === 'SUCCESS' ? articles.map(el => 
                <div key={el.id}>
                    <h2>{el.title}</h2>
                    <div>{el.body}</div>
                    </div>
                    ) : (
                    <p>There are no articles yet.</p>
                    )}                
            </Body>
        );
}

export default Blog;