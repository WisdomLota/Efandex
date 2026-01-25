import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Hero = ( {onDownloadClick} ) => {
  const [heroRef, isHeroVisible] = useScrollAnimation(0.1);

  return (
    <section id="home" className="pt-20 lg:pt-24">
      {/* Hero Image */}
      <div className="w-full px-4 sm:px-6 lg:px-16 pt-4">
        <div 
          ref={heroRef}
          className={`relative overflow-hidden rounded-t-2xl lg:rounded-t-3xl transition-all duration-700 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <img
            src="/images/perfectEventSpace.png"
            alt="Outdoor event space with white tent and chairs"
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="bg-efandex-dark text-white py-12 sm:py-16 lg:py-20 mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-6 transition-all duration-700 delay-200 ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            FIND YOUR PERFECT EVENT SPACE
          </h1>
          <p 
            className={`text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Turn your outdoor space into an event venue and start earning today.
            <br className="hidden sm:block" />
            Manage your listings and bookings with ease.
          </p>
          <button 
            onClick={onDownloadClick}
            className={`bg-white text-black px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 btn-hover-effect shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <span className="underline underline-offset-4 decoration-1">Download App</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
