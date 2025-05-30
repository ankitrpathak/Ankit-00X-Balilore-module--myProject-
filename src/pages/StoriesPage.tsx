import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Clock, MapPin, User } from 'lucide-react';

// Mock data for stories
const allStories = [
  {
    id: 1,
    title: "The Sacred Springs of Tirta Empul",
    excerpt: "Discover the ancient purification rituals and the mythical origins of Bali's most sacred water temple.",
    author: "Made Wijaya",
    location: "Tampaksiring",
    date: "April 12, 2023",
    category: "historical",
    imageUrl: "https://images.pexels.com/photos/5730432/pexels-photo-5730432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 2,
    title: "Nyepi: The Day of Silence",
    excerpt: "Experience the unique Balinese New Year celebration where the entire island falls silent for 24 hours.",
    author: "Sarah Johnson",
    location: "Ubud",
    date: "March 3, 2023",
    category: "cultural-insight",
    imageUrl: "https://images.pexels.com/photos/6140458/pexels-photo-6140458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 3,
    title: "The Hidden Waterfall of Tukad Cepung",
    excerpt: "Journey through a narrow ravine to discover one of Bali's most magical and photogenic waterfalls.",
    author: "Ketut Sudira",
    location: "Bangli",
    date: "February 18, 2023",
    category: "travel-story",
    imageUrl: "https://images.pexels.com/photos/12899146/pexels-photo-12899146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 4,
    title: "The Legend of Barong and Rangda",
    excerpt: "Explore the eternal battle between good and evil through Bali's most iconic mythological characters.",
    author: "Putu Setiawan",
    location: "Gianyar",
    date: "January 27, 2023",
    category: "folk-tale",
    imageUrl: "https://images.pexels.com/photos/4339352/pexels-photo-4339352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 5,
    title: "Finding Peace in Sidemen Valley",
    excerpt: "How a quiet village in East Bali changed my perspective on life and travel.",
    author: "Michael Chang",
    location: "Sidemen",
    date: "December 15, 2022",
    category: "personal-experience",
    imageUrl: "https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 6,
    title: "The Art of Balinese Offerings",
    excerpt: "Learn about the daily ritual of canang sari and how these beautiful offerings connect the Balinese to their spiritual beliefs.",
    author: "Ni Komang Astiti",
    location: "Denpasar",
    date: "November 8, 2022",
    category: "cultural-insight",
    imageUrl: "https://images.pexels.com/photos/3335131/pexels-photo-3335131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  }
];

const categories = [
  { id: "all", name: "All Categories" },
  { id: "folk-tale", name: "Folk Tales" },
  { id: "personal-experience", name: "Personal Experiences" },
  { id: "historical", name: "Historical Accounts" },
  { id: "cultural-insight", name: "Cultural Insights" },
  { id: "travel-story", name: "Travel Stories" },
];

const StoriesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredStories, setFilteredStories] = useState(allStories);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters(searchTerm, selectedCategory);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    applyFilters(searchTerm, categoryId);
  };

  const applyFilters = (search: string, category: string) => {
    let result = allStories;
    
    if (search) {
      const lowerSearch = search.toLowerCase();
      result = result.filter(story => 
        story.title.toLowerCase().includes(lowerSearch) || 
        story.excerpt.toLowerCase().includes(lowerSearch)
      );
    }
    
    if (category !== "all") {
      result = result.filter(story => story.category === category);
    }
    
    setFilteredStories(result);
  };

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
            Explore Stories
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the rich tapestry of tales from across Bali. From ancient legends to personal
            experiences, each story offers a unique glimpse into the island's culture and spirit.
          </p>
        </motion.div>

        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <form onSubmit={handleSearch} className="flex-grow relative">
              <input
                type="text"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full input-field pl-10"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <button type="submit" className="sr-only">Search</button>
            </form>
            
            <div className="flex items-center gap-2 overflow-x-auto py-1 md:py-0">
              <Filter size={18} className="text-accent flex-shrink-0" />
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-white text-accent hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredStories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No stories found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setFilteredStories(allStories);
              }}
              className="mt-4 btn-ghost"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card group h-full flex flex-col"
    >
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
        <a href={`#/stories/${story.id}`} className="mt-4 text-primary font-medium hover:underline">
          Read more →
        </a>
      </div>
    </motion.div>
  );
};

export default StoriesPage;