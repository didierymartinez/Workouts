import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from './Components/NavBar'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import {User} from './pages/User'
import { About } from './pages/About'

export const AppRouter = () => {
    return (
        <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/user" element={<User />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    )
}
