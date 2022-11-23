import React from 'react'
import { BrowserRouter as Router, Routes as Switch , Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Navbar from './components/layouts/Navbar';

const Routing = () => {
  return (
    <div>
        <Router>
            <Navbar/>
            <Switch>
                <Route element={<Home/>} path={'/'} />
                <Route element={<Dashboard/>} path={'/dashboard'} />
                <Route element={<Register/>} path={'/register'} />
                <Route element={<Login/>} path={'/login'} />
            </Switch>
        </Router>
    </div>
  )
}

export default Routing