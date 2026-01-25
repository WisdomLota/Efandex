import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Footer = ( {onDownloadClick} ) => {
  const [footerRef, isVisible] = useScrollAnimation(0.2);

  return (
    <footer 
      ref={footerRef}
      className="bg-efandex-dark text-white py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          {/* Left Side - CTA */}
          <div 
            className={`flex-1 max-w-xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold tracking-tight mb-4">
              JOIN EFANDEX TODAY!
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-8 max-w-md">
              Listing your space is free, and you control your availability and pricing. Start earning extra income by sharing your space with people looking for a unique venue.
            </p>
            <div onClick={onDownloadClick} className="flex justify-end max-w-md">
              <button className="bg-white text-black px-10 py-4 rounded-xl font-semibold text-base hover:bg-gray-100 transition-all duration-300 btn-hover-effect shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <span className="underline underline-offset-4 decoration-1">Download App</span>
              </button>
            </div>
          </div>

          {/* Right Side - Large Logo */}
          <div 
            className={`flex-1 flex items-center justify-end transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-gray-300/70 tracking-tight">
              EFANDEX
            </span>
          </div>
        </div>

        {/* Bottom Content with inline divider */}
        <div 
          className={`mt-12 lg:mt-16 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Links and Divider Row */}
          <div className="flex items-center gap-6 mb-6">
            <a 
              href="#privacy" 
              className="text-gray-200 hover:text-white text-sm transition-colors duration-300 whitespace-nowrap"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              className="text-gray-200 hover:text-white text-sm transition-colors duration-300 whitespace-nowrap"
            >
              Terms of Use
            </a>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Copyright */}
          <div className="flex justify-end">
            <p className="text-gray-300 text-sm">
              EFANDEX © Copyright 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;