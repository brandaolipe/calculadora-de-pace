import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header.jsx'
import Body from './components/body/Body.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {

  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
