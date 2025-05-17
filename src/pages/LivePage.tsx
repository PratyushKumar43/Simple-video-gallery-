import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Users, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

// Live stream data
const liveStreams = [
  {
    id: "1",
    title: "LIVE: Amazing Wildlife Safari in Africa",
    thumbnail: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    creator: "Wildlife Explorer",
    viewers: "12.4K",
    category: "Nature",
    tags: ["wildlife", "safari", "africa"]
  },
  {
    id: "2",
    title: "Live Piano Concert - Classical Music for Relaxation",
    thumbnail: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    creator: "Classical Essence",
    viewers: "8.7K",
    category: "Music",
    tags: ["piano", "classical", "concert"]
  },
  {
    id: "3",
    title: "Coding a Full-Stack Web App from Scratch",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    creator: "Tech Guru",
    viewers: "5.2K",
    category: "Technology",
    tags: ["coding", "webdev", "tutorial"]
  },
  {
    id: "4",
    title: "Live Cooking Show: Italian Pasta Masterclass",
    thumbnail: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    creator: "Chef Mario",
    viewers: "7.9K",
    category: "Cooking",
    tags: ["cooking", "italian", "pasta"]
  },
  {
    id: "5",
    title: "Morning Yoga Flow for Energy and Focus",
    thumbnail: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    creator: "Yoga with Sarah",
    viewers: "4.3K",
    category: "Fitness",
    tags: ["yoga", "fitness", "wellness"]
  },
  {
    id: "6",
    title: "Live Gaming: Exploring the New Open World RPG",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    creator: "GameMaster",
    viewers: "15.6K",
    category: "Gaming",
    tags: ["gaming", "rpg", "gameplay"]
  }
];

// Featured stream data
const featuredStream = {
  id: "featured",
  title: "LIVE: Northern Lights in Real-Time from Norway",
  thumbnail: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  creator: "Aurora Chasers",
  viewers: "32.8K",
  category: "Nature",
  description: "Experience the breathtaking beauty of the Northern Lights (Aurora Borealis) in real-time from our camera location in Tromsø, Norway. Join thousands of viewers from around the world as we witness this spectacular natural phenomenon together.",
  tags: ["auroraborealis", "norway", "northernlights", "nature"]
};

export function LivePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Nature", "Music", "Technology", "Gaming", "Cooking", "Fitness"];
  
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Live Now</h1>
          <p className="text-white/60">Watch live streams from creators around the world</p>
        </div>
        
        {/* Featured Live Stream */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-black/20 border-white/5 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3 relative">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={featuredStream.thumbnail} 
                      alt={featuredStream.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <Badge variant="destructive" className="bg-red-500 text-white px-2 py-1 text-xs font-semibold uppercase">
                        Live
                      </Badge>
                      <Badge className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 text-xs">
                        <Eye className="h-3 w-3 mr-1" /> {featuredStream.viewers} watching
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                </div>
                
                <div className="lg:col-span-2 p-6">
                  <Badge className="mb-3 bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30">
                    {featuredStream.category}
                  </Badge>
                  <h2 className="text-2xl font-bold mb-3">{featuredStream.title}</h2>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-rose-500 flex items-center justify-center mr-3">
                      <span className="text-white font-bold">{featuredStream.creator.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium">{featuredStream.creator}</p>
                      <p className="text-sm text-white/60">{featuredStream.viewers} viewers</p>
                    </div>
                  </div>
                  <p className="text-white/70 mb-6">{featuredStream.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredStream.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="border-white/10 text-white/70">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white">
                      Watch Now
                    </Button>
                    <Button variant="outline" className="border-white/10 text-white/80 hover:bg-white/5">
                      <MessageSquare className="h-4 w-4 mr-2" /> Chat
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
        
        {/* Category Filter */}
        <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-hide">
          <div className="flex space-x-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={activeCategory === category 
                  ? "bg-gradient-to-r from-indigo-500 to-rose-500 text-white" 
                  : "border-white/10 text-white/80 hover:bg-white/5"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Live Streams Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveStreams.map((stream, index) => (
            <motion.div
              key={stream.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black/20 border-white/5 overflow-hidden group hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={stream.thumbnail} 
                    alt={stream.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex items-center space-x-2">
                    <Badge variant="destructive" className="bg-red-500 text-white px-2 py-1 text-xs font-semibold uppercase">
                      Live
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <Badge className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 text-xs">
                      <Eye className="h-3 w-3 mr-1" /> {stream.viewers}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white">
                      Watch Now
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Badge className="mb-2 bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30">
                    {stream.category}
                  </Badge>
                  <h3 className="font-medium text-white line-clamp-2 mb-2">{stream.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-rose-500 flex items-center justify-center mr-2">
                        <span className="text-white text-xs font-bold">{stream.creator.charAt(0)}</span>
                      </div>
                      <span className="text-sm text-white/70">{stream.creator}</span>
                    </div>
                    <div className="flex items-center text-white/60 text-xs">
                      <Users className="h-3 w-3 mr-1" /> {stream.viewers}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}