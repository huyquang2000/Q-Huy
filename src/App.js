import React, { useState } from 'react';
import Login from './components/LoginService/Login';
import { Routes, Route} from 'react-router-dom';
import Home from './components/HomePage/Home';
import {path} from './const/path'
import {PrivateRouteHome,PrivateRouteLogin} from './components/PrivateRouter'

function App() {
    return (
        <>
            <Routes>
                <Route exact path={path.LOGIN} element={<PrivateRouteLogin><Login /></PrivateRouteLogin> } />
                <Route path={path.HOME} element={<PrivateRouteHome><Home/></PrivateRouteHome>}/>
            </Routes>
        </>
    );
}
export default App;