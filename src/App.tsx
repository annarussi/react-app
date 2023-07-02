import './App.css'
import Header from './components/Header'

import ChocolatesList from './components/ChocolatesList'
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

      <div className="app" id={theme}>
        <div className="nav d-flex justify-content-between align-items-center">
          <Header />
          <div className="d-flex flex-column align-items-center mx-2">
            <label> {theme === 'light' ? 'Light Mode' : 'Dark Mode'} </label>
            <ReactSwitch className="switch" onChange={toggleTheme} checked={theme === 'dark'}/>
          </div>

        </div>
        <div className="container m-auto">
          <ChocolatesList />
        </div>
      </div>

  )
}
