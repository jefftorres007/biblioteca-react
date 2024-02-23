
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './style/App.css'
import NotFound from './pages/NotFound';
import {  New } from './pages/New';
import { DarkModeProvider } from './context/DarkModeContext';


export default function App() {
    return (
        <Router>
            <DarkModeProvider>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/inicio" element={<Home />} />
                    <Route path="/nuevo" element={<New />} />
                    {/* <Route path="/medios" element={<Home />} /> */}
                    {/* <Route path="/añadir" element={<Home />} /> */}

                    <Route path="*" element={<NotFound />} /> {/* Ruta para "no encontrado" */}
                </Routes>
            </DarkModeProvider>

        </Router>
    );
}
