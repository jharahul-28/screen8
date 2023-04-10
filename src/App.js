import './App.css';
import About from './Components/About';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import Hero from './Components/HeroSection/Hero';
import Insights from './Components/Insights';
import Navbar from './Components/Navbar/Navbar';
import NumberSpeak from './Components/NumberSpeak/NumberSpeak';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <NumberSpeak/>
      <Carousel/>
      <Testimonials/>
      <About/>
      <Insights/>
      <Footer/>
    </>
  );
}

export default App;
