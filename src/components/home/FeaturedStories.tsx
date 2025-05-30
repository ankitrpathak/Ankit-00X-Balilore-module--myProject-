import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, MapPin, User } from 'lucide-react';

// Mock data for featured stories
const featuredStories = [
  {
    id: 1,
    title: "The Sacred Springs of Tirta Empul",
    excerpt: "Discover the ancient purification rituals and the mythical origins of Bali's most sacred water temple.",
    author: "Made Wijaya",
    location: "Tampaksiring",
    date: "April 12, 2023",
    imageUrl: "https://images.pexels.com/photos/5730432/pexels-photo-5730432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 2,
    title: "Nyepi: The Day of Silence",
    excerpt: "Experience the unique Balinese New Year celebration where the entire island falls silent for 24 hours.",
    author: "Sarah Johnson",
    location: "Ubud",
    date: "March 3, 2023",
    imageUrl: "https://images.pexels.com/photos/6140458/pexels-photo-6140458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 3,
    title: "The Hidden Waterfall of Tukad Cepung",
    excerpt: "Journey through a narrow ravine to discover one of Bali's most magical and photogenic waterfalls.",
    author: "Ketut Sudira",
    location: "Bangli",
    date: "February 18, 2023",
    imageUrl: "https://images.pexels.com/photos/12899146/pexels-photo-12899146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const FeaturedStories: React.FC = () => {
  return (
    <section className="py-16 bg-ivory">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-accent">
            Featured Stories
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto text-gray-600">
            Immerse yourself in the rich tapestry of Balinese culture through these captivating tales shared by our community.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuredStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/stories" className="btn-ghost inline-flex">
            View All Stories
          </Link>
        </div>
      </div>
    </section>
  );
};

interface StoryCardProps {
  story: {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    location: string;
    date: string;
    imageUrl: string;
  };
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <motion.div variants={item} className="card group h-full flex flex-col">
      <div className="relative overflow-hidden h-56">
        <img 
          src={story.imageUrl} 
          alt={story.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display text-xl font-bold mb-2 text-accent">
          {story.title}
        </h3>
        <p className="font-body text-gray-600 mb-4 flex-grow">
          {story.excerpt}
        </p>
        <div className="flex flex-col space-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <User size={16} className="mr-2" />
            <span>{story.author}</span>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" />
            <span>{story.location}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2" />
            <span>{story.date}</span>
          </div>
        </div>
        <Link to={`/stories/${story.id}`} className="mt-4 text-primary font-medium hover:underline">
          Read more →
        </Link>
      </div>
    </motion.div>
  );
};

export default FeaturedStories;