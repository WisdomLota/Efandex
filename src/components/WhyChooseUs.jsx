import React from 'react';
import { Wallet, MapPin, Calendar, Shield } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const WhyChooseUs = () => {
  const [sectionRef, isVisible] = useScrollAnimation(0.15);

  const features = [
    {
      icon: Wallet,
      title: 'Utilizing Unused Space',
      description: 'Efandex helps you turn unused space into a valuable asset. List your space, set your own rules, and start earning extra income instead of letting it sit idle.',
    },
    {
      icon: MapPin,
      title: 'Increased Visibility and Reach',
      description: "Efandex helps you showcase your space to a wider audience, boosting your visibility and attracting more clients. With an enhanced profile that highlights your space's unique features, you can stand out and increase your bookings.",
    },
    {
      icon: Calendar,
      title: 'Flexibility and Control',
      description: 'Efandex lets you choose exactly when your space is available and set your own rules, giving you complete control over your rental schedule.',
    },
    {
      icon: Shield,
      title: 'Safe and Secure',
      description: 'We put safety first, offering clear guidelines to protect both hosts and guests. Efandex is built to ensure a smooth, secure rental experience, giving everyone peace of mind.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 lg:py-24 bg-efandex-dark text-white">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20">
          {/* Left Content */}
          <div className="flex-1 lg:flex-[1.1]">
            <h2 
              className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-10 lg:mb-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              WHY CHOOSE US
            </h2>

            <div className="space-y-8 lg:space-y-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex gap-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <feature.icon size={24} className="text-white/80" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Phone Mockup */}
          <div 
            className={`flex-1 flex flex-col items-center justify-center transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Phone Mockup */}
            <div className="relative w-[280px] sm:w-[320px] lg:w-[340px]">
              <img src="/images/phoneMockup.png" alt="phoneMockup" />
            </div>

            {/* Download Button */}
            <button 
              className={`mt-8 bg-white text-black px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-all duration-300 btn-hover-effect shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <span className="underline underline-offset-4 decoration-1">Download App</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
