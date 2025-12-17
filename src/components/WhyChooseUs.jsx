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
              className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-10 lg:mb-12 transition-all duration-700 ${
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
                    <h3 className="text-lg sm:text-xl font-bold mb-2 italic">
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
              <div className="bg-white rounded-[2.5rem] p-3 shadow-2xl">
                {/* Phone Screen */}
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* App Header */}
                  <div className="p-4 pb-2">
                    <p className="text-gray-500 text-xs">Discover your</p>
                    <h4 className="text-black font-bold text-lg">Dream Outdoor Space</h4>
                  </div>

                  {/* Suggestions */}
                  <div className="px-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-semibold text-gray-800">Suggestions</span>
                      <span className="text-xs text-gray-400">view all</span>
                    </div>

                    {/* Featured Card */}
                    <div className="flex gap-3 mb-4">
                      <div className="w-24 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <img 
                          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=150&fit=crop"
                          alt="Space"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 bg-efandex-dark rounded-xl p-3 text-white">
                        <p className="font-semibold text-sm mb-1">New Space TT</p>
                        <p className="text-xs text-gray-400 flex items-center gap-1">
                          <MapPin size={10} /> Lahore
                        </p>
                        <p className="text-xs text-gray-400 mt-1">testing</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs bg-white/20 px-2 py-0.5 rounded">Best room</span>
                          <span className="text-xs bg-white/20 px-2 py-0.5 rounded">Pet friendly</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-yellow-400">★ 4.0 (3 Reviews)</span>
                          <span className="text-xs font-bold">$12 per day</span>
                        </div>
                      </div>
                    </div>

                    {/* Search Bar */}
                    <div className="flex gap-2 mb-4">
                      <div className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 text-xs text-gray-400">
                        search for outdoor space
                      </div>
                      <button className="bg-black w-10 h-10 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
                      <button className="bg-white border border-gray-200 w-10 h-10 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      </button>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex gap-2 mb-4">
                      <span className="bg-black text-white text-xs px-4 py-2 rounded-full">New listings</span>
                      <span className="bg-gray-100 text-gray-700 text-xs px-4 py-2 rounded-full">Spaces near you</span>
                      <span className="bg-gray-100 text-gray-700 text-xs px-4 py-2 rounded-full">Hot selling</span>
                    </div>

                    {/* Space Card */}
                    <div className="relative rounded-2xl overflow-hidden mb-3">
                      <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=200&fit=crop"
                        alt="Testing space"
                        className="w-full h-32 object-cover"
                      />
                      <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                    <div className="pb-2">
                      <p className="font-semibold text-sm text-black">testing space</p>
                      <div className="flex items-center justify-between mt-1">
                        <div>
                          <p className="text-xs text-gray-500 flex items-center gap-1">
                            <MapPin size={10} /> Texas Park, City
                          </p>
                          <p className="text-xs text-gray-500">👥 655 Guests</p>
                        </div>
                        <span className="bg-black text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                          Map 🗺️
                        </span>
                      </div>
                    </div>

                    {/* Bottom Nav */}
                    <div className="flex justify-around py-3 border-t border-gray-100 mt-2">
                      <button className="flex flex-col items-center text-black">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                      </button>
                      <button className="flex flex-col items-center text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                      </button>
                      <button className="flex flex-col items-center text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                      </button>
                      <button className="flex flex-col items-center text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                      </button>
                      <button className="flex flex-col items-center text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <button 
              className={`mt-8 bg-white text-black px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-all duration-300 btn-hover-effect shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <span className="underline underline-offset-4 decoration-2">Download App</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
