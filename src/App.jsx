import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    function toggleButton() {
        setDarkMode(!darkMode);
    }
    return (
        <>
            <Navbar darkMode={darkMode} setDarkMode={toggleButton} />
        </>
    );
}

export default App;
