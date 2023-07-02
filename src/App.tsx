import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import BoxList from './Pages/BoxList'

import ChocolatesList from './Pages/ChocolatesList'
import { useState } from 'react';
import ReactSwitch from 'react-switch';


export default function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((currenty) => (
      currenty === 'light' ? 'dark' : 'light'
    ));
  }

  return (
      <Router>
        <div className="app" id={theme}>
          <div className="nav d-flex justify-content-between align-items-center">
            <Header />
            <div className="d-flex flex-column align-items-center mx-2">
              <label> {theme === 'light' ? 'Light Mode' : 'Dark Mode'} </label>
              <ReactSwitch className="switch" onChange={toggleTheme} checked={theme === 'dark'}/>
            </div>
          </div>
          <div className="container m-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chocolates" element={<ChocolatesList />} />
              <Route path="/boxes" element={<BoxList />} />
            </Routes>
          </div>

          <Footer link="https://github.com/annarussi/" text='See more projects on my GitHub ♥'/>
        </div>
      </Router>
  )
}
