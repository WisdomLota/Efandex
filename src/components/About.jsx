import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const [sectionRef, isVisible] = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="relative">
        {/* Black background - full width both sides */}
        <div className="absolute inset-y-0 left-0 right-0 bg-efandex-dark" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={sectionRef}
            className="flex flex-col lg:flex-row lg:items-center"
          >
            {/* Left Content */}
            <div 
              className={`flex-1 py-10 sm:py-12 lg:py-16 lg:pr-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 lg:mb-8 text-white">
                ABOUT US
              </h2>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
                Efandex offers you the opportunity to list your unused space for events, providing a platform where homeowners can connect with clients looking for unique venues. Whether you have a backyard, garden, rooftop, or any other open area, Efandex makes it easy for you to monetize your space without the hassle of long-term commitments.
              </p>
            </div>

            {/* Right Image - Extends above/below black box */}
            <div 
              className={`lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:w-[48%] transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl">
                <img
                  src="/images/aboutUsImg.png"
                  alt="Beautiful garden patio with outdoor furniture"
                  className="w-full h-[300px] sm:h-[350px] lg:h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
