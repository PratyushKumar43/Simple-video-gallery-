import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

// Category data
const categories = [
  {
    id: "nature",
    name: "Nature",
    description: "Explore the beauty of the natural world",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    videoCount: "2.4K"
  },
  {
    id: "music",
    name: "Music",
    description: "Relax with soothing sounds and melodies",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    videoCount: "5.7K"
  },
  {
    id: "education",
    name: "Education",
    description: "Learn something new every day",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    videoCount: "3.2K"
  },
  {
    id: "travel",
    name: "Travel",
    description: "Discover amazing destinations around the world",
    image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    videoCount: "4.1K"
  },
  {
    id: "technology",
    name: "Technology",
    description: "Stay updated with the latest tech trends",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    videoCount: "2.8K"
  },
  {
    id: "gaming",
    name: "Gaming",
    description: "Watch gameplay, reviews, and gaming content",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    videoCount: "6.3K"
  },
  {
    id: "cooking",
    name: "Cooking",
    description: "Delicious recipes and culinary techniques",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    videoCount: "3.9K"
  },
  {
    id: "fitness",
    name: "Fitness",
    description: "Workouts, health tips, and wellness content",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    videoCount: "2.5K"
  },
  {
    id: "art",
    name: "Art & Design",
    description: "Creative inspiration and artistic techniques",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    videoCount: "1.8K"
  },
  {
    id: "science",
    name: "Science",
    description: "Fascinating discoveries and scientific explanations",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    videoCount: "2.2K"
  },
  {
    id: "history",
    name: "History",
    description: "Journey through time with historical content",
    image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    videoCount: "1.5K"
  },
  {
    id: "comedy",
    name: "Comedy",
    description: "Laugh out loud with funny videos and sketches",
    image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    videoCount: "7.1K"
  }
];

export function CategoriesPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
            Explore Categories
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Discover videos across a wide range of topics. Find exactly what you're looking for or explore something new.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/browse?category=${category.id}`}>
                <Card className="bg-black/20 border-white/5 overflow-hidden group hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                      <div className="absolute bottom-4 left-4">
                        <span className="text-xs text-white/70 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full">
                          {category.videoCount} videos
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm text-white/60">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}