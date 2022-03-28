import React, { useState } from 'react';
import Login from './components/LoginService/Login';
import { Routes, Route} from 'react-router-dom';
import ShowHome from './components/HomePage/HomeRoute';
function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Login/>} />
                <Route path={'/Home'} element={<ShowHome/>}/>
            </Routes>
        </>
    );
}

export default App;