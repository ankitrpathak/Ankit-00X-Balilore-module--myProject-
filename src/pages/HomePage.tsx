import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedStories from '../components/home/FeaturedStories';
import RaffleWidget from '../components/widgets/RaffleWidget';
import { Compass, BookOpen, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={<BookOpen size={32} className="text-primary" />}
              title="Share Your Tales"
              description="Contribute to our growing collection of stories and become part of the living history of Bali."
            />
            <FeatureCard 
              icon={<Compass size={32} className="text-primary" />}
              title="Discover Hidden Gems"
              description="Uncover secret spots, traditions, and cultural insights that you won't find in traditional travel guides."
            />
            <FeatureCard 
              icon={<Users size={32} className="text-primary" />}
              title="Connect with Community"
              description="Join a community of storytellers, travelers, and locals who share your passion for Balinese culture."
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-ivory">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <AboutSection />
            </div>
            <div>
              <RaffleWidget />
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedStories />
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="text-center p-6"
    >
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold mb-3 text-accent">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="font-display text-3xl font-bold mb-6 text-accent">Discover the Untold Stories</h2>
      
      <div className="space-y-6 text-gray-700">
        <p>
          BaliLore was born from a passion to preserve and share the rich tapestry of stories that make Bali such a unique and magical place. Beyond the tourist attractions and Instagram hotspots lies a deeper Bali - one filled with ancient legends, personal journeys, and cultural insights that deserve to be heard.
        </p>
        
        <p>
          Our community-driven platform invites locals, expats, and travelers to contribute their experiences, from ancient folk tales passed down through generations to personal encounters with the island's traditions and ceremonies. Each story adds another thread to the collective narrative of this extraordinary island.
        </p>
        
        <p>
          Whether you're planning your first trip to Bali, have called the island home for decades, or simply love learning about different cultures, BaliLore offers you a window into the heart and soul of the Island of the Gods.
        </p>
      </div>
    </motion.div>
  );
};

export default HomePage;