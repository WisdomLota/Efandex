import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const [sectionRef, isVisible] = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0">
          {/* Left Content - Dark Background */}
          <div 
            className={`bg-efandex-dark text-white p-8 sm:p-10 lg:p-12 xl:p-16 rounded-2xl lg:rounded-3xl lg:rounded-r-none flex-1 flex flex-col justify-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 lg:mb-8 italic">
              ABOUT US
            </h2>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              Efandex offers you the opportunity to list your unused space for events, providing a platform where homeowners can connect with clients looking for unique venues. Whether you have a backyard, garden, rooftop, or any other open area, Efandex makes it easy for you to monetize your space without the hassle of long-term commitments.
            </p>
          </div>

          {/* Right Image */}
          <div 
            className={`flex-1 lg:flex-[1.2] transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[450px] overflow-hidden rounded-2xl lg:rounded-3xl lg:rounded-l-none img-zoom">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                alt="Beautiful garden patio with outdoor furniture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
