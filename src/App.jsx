import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ComingSoonModal from './components/ComingSoonModal.jsx';
import { useState } from 'react';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero onDownloadClick={openModal}/>
        <About />
        <HowItWorks onDownloadClick={openModal}/>
        <WhyChooseUs onDownloadClick={openModal}/>
        <Contact />
      </main>
      <Footer onDownloadClick={openModal}/>
      <ComingSoonModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default App
