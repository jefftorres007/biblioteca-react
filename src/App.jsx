
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './style/App.css'
import NotFound from './pages/NotFound';


export default function App() {
    return (
        <Router>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/index" element={<Home />} />

                <Route path="*" element={<NotFound />} /> {/* Ruta para "no encontrado" */}
            </Routes>

        </Router>
    );
}
