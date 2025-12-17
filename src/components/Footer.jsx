import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Footer = () => {
  const [footerRef, isVisible] = useScrollAnimation(0.2);

  return (
    <footer 
      ref={footerRef}
      className="bg-efandex-dark text-white py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
          {/* Left Side - CTA */}
          <div 
            className={`flex-1 max-w-xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-4">
              JOIN EFANDEX TODAY!
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Listing your space is free, and you control your availability and pricing. Start earning extra income by sharing your space with people looking for a unique venue.
            </p>
            <button className="bg-white text-black px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-all duration-300 btn-hover-effect shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <span className="underline underline-offset-4 decoration-2">Download App</span>
            </button>
          </div>

          {/* Right Side - Large Logo */}
          <div 
            className={`flex-1 flex justify-end transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-600/50 tracking-tighter">
              EFANDEX
            </span>
          </div>
        </div>

        {/* Divider and Bottom Content */}
        <div 
          className={`mt-12 lg:mt-16 pt-8 border-t border-gray-700 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Links */}
            <div className="flex gap-6 sm:gap-8">
              <a 
                href="#privacy" 
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300 underline-animation"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300 underline-animation"
              >
                Terms of Use
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              EFANDEX © Copyright 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
