import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-accent text-white min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')" }}
      ></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Discover the Untold Stories of Bali
          </h1>
          <p className="font-body text-lg md:text-xl mb-8 opacity-90">
            A community-driven platform where locals and visitors share the cultural heritage, 
            hidden histories, and magical tales of the Island of the Gods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/stories" className="btn-primary text-center">
              Explore Stories
            </Link>
            <Link to="/submit" className="btn-ghost bg-transparent border-white text-white hover:bg-white hover:text-accent text-center">
              Share Your Tale
            </Link>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[var(--neutral-ivory)] to-transparent"></div>
    </div>
  );
};

export default Hero;