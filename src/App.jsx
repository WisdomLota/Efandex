import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
