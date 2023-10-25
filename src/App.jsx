import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    function toggleButton() {
        setDarkMode(!darkMode);
    }
    return (
        <div className='calc(h-[100vh-60px])'>
            <Navbar darkMode={darkMode} setDarkMode={toggleButton} />
        </div>
    );
}

export default App;
