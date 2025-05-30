import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-ivory min-h-screen">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-accent">
            About BaliLore
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our mission is to preserve and share the cultural heritage of Bali through community storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3388681/pexels-photo-3388681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Balinese temple ceremony" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-display text-2xl font-bold mb-4 text-accent">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                BaliLore was born from a passion to preserve and share the rich tapestry of stories that make Bali such a unique and magical place. Beyond the tourist attractions and Instagram hotspots lies a deeper Bali - one filled with ancient legends, personal journeys, and cultural insights that deserve to be heard.
              </p>
              <p>
                Founded in 2023 by a group of culture enthusiasts, expats, and Balinese locals, our platform aims to create a living archive of Balinese stories. We believe that by collecting and sharing these narratives, we contribute to the preservation of cultural heritage while helping visitors develop a deeper appreciation for the island.
              </p>
              <p>
                Every submission enriches our collective understanding of Bali's culture, traditions, and the personal connections people form with this extraordinary island. We invite you to explore, learn, and contribute to this growing tapestry of tales.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="font-display text-2xl font-bold mb-6 text-center text-accent">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Heart size={40} className="text-primary" />}
              title="Cultural Respect"
              description="We honor and respect the rich traditions, beliefs, and customs of Bali in everything we share."
            />
            <ValueCard 
              icon={<MapPin size={40} className="text-primary" />}
              title="Authentic Experiences"
              description="We value genuine stories that showcase real experiences and connections with Balinese culture."
            />
            <ValueCard 
              icon={<Mail size={40} className="text-primary" />}
              title="Community Contribution"
              description="We believe in the power of diverse voices to create a comprehensive portrayal of Bali's heritage."
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="font-display text-2xl font-bold mb-4 text-accent">Join Our Community</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Become part of our growing community of storytellers, culture enthusiasts, and Bali lovers. 
            Share your stories, discover hidden gems, and help preserve the rich cultural heritage of the Island of Gods.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/submit" className="btn-primary">
              Submit Your Story
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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

export default AboutPage;