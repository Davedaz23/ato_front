import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import TestimonialSection from './TestimonialSection';
import Porti from './port';
import ClientFeedback from './ClientFeedback';
import ContactForm from './Contact/ContactForm';
import About from './Pages/About';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import StatsticDashboard from './Pages/StatsticDashboard';
import ChristmasModal from './Pages/GiveAway/ChristmasMessage';// Import the modal
import AIPrompt from './Pages/service/AIPrompt';
import FAQPopup from './Pages/WebDevelopment/FaqPage';

const Section = ({ children, id }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      transition={{ duration: 0.2, easeInOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}
      className="relative"
    >
      {children}
    </motion.section>
  );
};

const Home = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(true); // Set to true to show the modal on load

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const section = searchParams.get('section');

    if (section) {
      scroller.scrollTo(section, {
        duration: 100,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -10,
      });
    }
  }, [location]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-auto">
      <Section id="hero">
        <HeroSection />
      </Section>

      <Section id="feedback">
        <ClientFeedback />
      </Section>
      <Section id="portfolio">
        <Porti />
      </Section>
     
      <Section id="testimonials">
        <TestimonialSection />
      </Section>
      <Section id="ContactForm" className="bg-[rgba(253,95,32,0.25)]">
        <ContactForm />
      </Section>

      {/* <Section id="stat">
        <StatsticDashboard />
      </Section> */}
      {/* <Section id="ai-prompt">
        <AIPrompt />
      </Section> */}
      {/* Christmas Modal */}
 
      {/* <ChristmasModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
    </div>
  );
};

export default Home;