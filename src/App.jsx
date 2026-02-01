import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Process from './components/Process';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Header />
      <Hero />
      <Features />
      <About />
      <Process />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
