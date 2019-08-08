import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Banner1 from './components/Banner1';
import Banner2 from './components/Banner2';

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Hero />
      <Section1 />
      <Banner1 />
      <Section2 />
      <Banner2 />
      <Section3 />
    </div>
  );
}

export default App;
