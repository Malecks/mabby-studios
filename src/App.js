import './App.css';
import Header from './components/header';
import Contact from './components/contact';
import Bio from './components/bio';
import Nav from './components/nav';
import Footer from './components/footer';
import About from './components/about';



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
          <About />
          <hr />
          <Footer />
      </div>
    </div>
  );
}

export default App;
