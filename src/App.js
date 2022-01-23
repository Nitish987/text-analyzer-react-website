import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [Mode, setMode] = useState('light');
    const toggleMode = () => {
        if (Mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = '#34375c'
            document.title = "Test | Dark Mode"
        } else {
            setMode('light')
            document.body.style.backgroundColor = 'white'
            document.title = "Test | Light Mode"
        }
    }
    return (
        <>
            <BrowserRouter>
                <Navbar title="Test Web" mode={Mode} toggleMode={toggleMode} />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<TextForm heading="Enter your text here" placeholder="Your text here to analyze" mode={Mode} toggleMode={toggleMode} />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
