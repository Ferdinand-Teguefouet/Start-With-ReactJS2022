import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Body({title, isLoading, children}) {
    return (
        isLoading? null :
        <div>
            <Header title={title} />
            {children}
            <Footer />
        </div>
    );
}

export default Body;