import React from 'react'
import {Navbar, CTA, service, SignUp} from './components/index.js';
import {Header, Footer} from './container/index.js';
import './app.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"


const App = (props) => {
  // let content;
  // if (props.title === 'home') {
  //   content = <Header />;
  // } else if (props.title === 'service') {
  //   content = <service />
  // }

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={content} /> */}
        <Route path='/' element={<SignUp />} />
      </Routes>
      <CTA />
      <Footer />
    </Router>
  )
}

export default App
