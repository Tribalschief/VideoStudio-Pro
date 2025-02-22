import React, { forwardRef } from 'react';
import { FaPlay } from 'react-icons/fa'

interface HeroSectionProps {
    title?: string;
    subtitle?: string;
    // Add any other props your component needs
  }

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>((props, ref) => {
  return (
    <main className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="hero-text text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Transform Your
                <span className="block mt-2">Video Experience</span>
              </h1>
              <p className="hero-text text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                AI-powered video platform with studio-grade tools accessible right in your browser.
              </p>
              <div className="hero-text flex gap-4 justify-center lg:justify-start">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-white px-8 py-4 rounded-full text-lg transition-all">
                  <FaPlay /> Watch Demo
                </button>
              </div>
            </div>

            {/* Interactive Phone Mockup */}
            <div ref={ref} className="relative w-[300px] h-[600px] perspective-1000">
              <div className="absolute inset-0 bg-slate-800 rounded-[40px] shadow-2xl transform-style-preserve-3d">
                <div className="absolute inset-[16px] bg-slate-900 rounded-[24px] overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  >
                    <source src="/demo-video.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>
              </div>
              <div className="absolute top-1/2 -left-1 w-2 h-24 bg-slate-800 rounded-l-full" />
              <div className="absolute top-1/2 -right-1 w-2 h-24 bg-slate-800 rounded-r-full" />
            </div>
          </div>
        </div>
      </main>
  )
})


HeroSection.displayName = 'HeroSection'
export default HeroSection