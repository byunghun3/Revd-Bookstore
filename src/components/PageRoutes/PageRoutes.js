import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../pages/About/About';
import Browse from '../../pages/Browse/Browse';
import Contact from '../../pages/Contact/Contact';
import Error from '../../pages/Error/Error';

function PageRoutes() {
    return (
        <Routes className="routes"> 
            {/* <Route path='/' element={<About/>} /> */}
            <Route path='/about' element={<About/>} />
            <Route path='/browse' element={<Browse/>} /> 
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={<Error/>} />
        </Routes>
    )
}

export default PageRoutes;
