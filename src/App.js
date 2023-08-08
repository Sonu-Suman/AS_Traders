import React from 'react'
import {Navbar, CTA} from './components/index.js';
import {Header, Footer} from './container/index.js';
import './app.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
