import React from 'react';
import SubmitLoreForm from '../components/forms/SubmitLoreForm';
import RaffleWidget from '../components/widgets/RaffleWidget';
import { motion } from 'framer-motion';
import { BookMarked, Award, Globe2 } from 'lucide-react';

const SubmitLorePage: React.FC = () => {
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
            Share Your Bali Story
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contribute to our growing collection of Balinese tales, traditions, and experiences. 
            Every story submitted enters you into our monthly raffle for traditional Balinese art pieces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SubmitLoreForm />
          </div>
          
          <div className="space-y-6">
            <RaffleWidget />
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="font-display text-xl font-semibold mb-4 text-accent">
                Submission Guidelines
              </h3>
              
              <ul className="space-y-4">
                <GuidelineItem 
                  icon={<BookMarked size={18} className="text-primary" />}
                  title="Be Authentic"
                  description="Share real experiences, stories, or cultural insights that contribute to understanding Bali."
                />
                <GuidelineItem 
                  icon={<Award size={18} className="text-primary" />}
                  title="Quality Content"
                  description="Well-written stories with details that bring your experience to life are more likely to be featured."
                />
                <GuidelineItem 
                  icon={<Globe2 size={18} className="text-primary" />}
                  title="Respect Culture"
                  description="Ensure your content respects Balinese culture, traditions, and people."
                />
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface GuidelineItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GuidelineItem: React.FC<GuidelineItemProps> = ({ icon, title, description }) => {
  return (
    <li className="flex">
      <div className="mt-1 mr-3 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-accent">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </li>
  );
};

export default SubmitLorePage;