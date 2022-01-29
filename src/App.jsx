import React from 'react'
import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import './app.scss'
import { useState } from 'react';
import Menu from './components/Menu/Menu';

const App = () => {
  const [menuopen, setmenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuopen={menuopen} setmenuOpen={setmenuOpen} />
      <Menu menuopen={menuopen} setmenuOpen={setmenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}
export default App;
