import Modals from 'components/composed/Modal/Modals';
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
            <Modals />
        </div>
    );
}

export default Body;