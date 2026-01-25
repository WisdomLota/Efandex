import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [sectionRef, isVisible] = useScrollAnimation(0.2);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,           
          email: formData.email,         
          message: formData.message,     
          reply_to: formData.email,      
          from_name: formData.name,  
          to_email: 'wisdomlotachukwu@gmail.com'
          // to_email: 'efandexsupport@dailystridellc.com', 
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div 
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 
          className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-8 lg:mb-12 text-right transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          CONTACT US
        </h2>

        <form 
          onSubmit={handleSubmit}
          className={`space-y-4 sm:space-y-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full bg-gray-100 border-0 rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 text-sm sm:text-base focus:ring-2 focus:ring-black/10 transition-all duration-300"
            />
          </div>
          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full bg-gray-100 border-0 rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 text-sm sm:text-base focus:ring-2 focus:ring-black/10 transition-all duration-300"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              rows={6}
              className="w-full bg-gray-100 border-0 rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 text-sm sm:text-base resize-none focus:ring-2 focus:ring-black/10 transition-all duration-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-black text-white py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 btn-hover-effect ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800 hover:shadow-lg transform hover:-translate-y-0.5'
            }`}
          >
            <span className="underline underline-offset-4 decoration-2">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </span>
          </button>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="text-center text-green-600 font-medium animate-fade-in">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="text-center text-red-600 font-medium animate-fade-in">
              Failed to send message. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
