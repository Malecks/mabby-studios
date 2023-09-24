import './App.css';
import Header from './components/header';
import Contact from './components/contact';
import Bio from './components/bio';
import Nav from './components/nav';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div className='content'>
          <Header />
          <Contact />
          <hr />
          <Bio />
          <hr />
          <Nav />
          <hr />
          <div className='about'>
            <p>
              I help brands come to life in the most compelling and impactful ways, striking that perfect balance between business and creativity.
            </p>
            <p>
              I've had the privilege of working with global fashion and lifestyle brands through agency work and in-house positions.
            </p>
            <p>
              My forte lies in distilling brand positioning and crafting compelling stories that resonate across PR and marketing channels. I have a soft spot for brands that look good and do good, and I thrive in developing campaigns that simultaneously hit brand and impact goals.
            </p>
          </div>
          <hr />
          <Footer />
      </div>
    </div>
  );
}

export default App;
