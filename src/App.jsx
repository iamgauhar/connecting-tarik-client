import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './components/Gallery';
import Header from './components/Header';
import About from './pages/About';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
};

export default App;
