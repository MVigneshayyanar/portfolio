import React from 'react';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-4xl mx-auto">
        {/* Background overlay for better readability */}
        <div className="backdrop-blur-sm bg-black/30 rounded-3xl p-8 md:p-12 border border-white/10">
          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-text-light mb-6 drop-shadow-2xl">
            Vigneshayyanar M
          </h1>
          <p className="text-xl md:text-2xl text-tertiary mb-8 font-medium">
            Flutter Developer & Mobile App Enthusiast
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#projects" 
              className="bg-secondary hover:bg-tertiary text-white hover:text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/30"
            >
              View My Work
            </a>
            <a 
              href="/assets/VIGNESHAYYANAR.pdf" 
              target="_blank"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
