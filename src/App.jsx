import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Header from './components/Header';
import About from './pages/About';
import ProductCategory from './pages/ProductCategory';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about" element={<About />} />
                <Route path="/category/:id" element={<ProductCategory />} />
            </Routes>
        </>
    );
};

export default App;
