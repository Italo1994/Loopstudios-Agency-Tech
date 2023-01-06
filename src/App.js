import './App.css';

import Header from './components/Header/Header.js';
import Banner from './components/Banner/Banner.js';
import Section from './components/Section/Section.js';
import Products from './components/Products/Products.js';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Section titleInformation="The Leader in Interactive VR" 
        textInformation="Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand." />
      <Products />
    </div>
  );
}

export default App;
