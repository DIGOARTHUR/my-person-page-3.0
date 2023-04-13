import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Aboutme from './components/Aboutme/Aboutme'


export function RoutesWeb() {
    return (
        <Router>
            <Routes>
                <Route path='Proffy---Platafoma-de-Aulas/' element={<Home />} />
                <Route path='/Proffy---Platafoma-de-Aulas/study' element={'#id'} />

            </Routes>
        </Router>

    )
}