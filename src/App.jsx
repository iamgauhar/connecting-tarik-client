import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './components/Gallery';
import Header from './components/Header';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </>
    );
};

export default App;
