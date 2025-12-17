import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const HowItWorks = () => {
  const [sectionRef, isVisible] = useScrollAnimation(0.2);

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column */}
          <div className="flex-1 space-y-8 lg:space-y-12">
            {/* Left Image - Party/Event */}
            <div 
              className={`overflow-hidden rounded-2xl lg:rounded-3xl img-zoom transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop"
                alt="Outdoor party with string lights"
                className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover"
              />
            </div>

            {/* Have a Space to Let? */}
            <div 
              className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-4">
                HAVE A SPACE TO LET?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
                Turn your outdoor space into an event venue and start earning today. Manage your listings and bookings with ease.
              </p>
              <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-all duration-300 btn-hover-effect shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                <span className="underline underline-offset-4 decoration-2">Download App</span>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-8 lg:space-y-12">
            {/* Section Title and Description */}
            <div 
              className={`transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 lg:mb-6 text-right">
                HOW IT WORKS
              </h2>
              <div className="text-right">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
                  NEED A SPACE TO RENT?
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md ml-auto">
                  Search through a variety of outdoor locations with detailed listings to find the space that meets your event needs.
                </p>
              </div>
            </div>

            {/* Right Image - Garden Party */}
            <div 
              className={`overflow-hidden rounded-2xl lg:rounded-3xl img-zoom transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=500&fit=crop"
                alt="Garden party setup with decorations"
                className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
