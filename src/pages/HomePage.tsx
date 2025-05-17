import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Navbar } from "@/components/Navbar";
import { VideoCard } from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

// Mock data for videos
const featuredVideos = [
  {
    id: "1",
    title: "Incredible 4K Nature Scenes Narrated By David Attenborough",
    thumbnail: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    duration: "3:58:42",
    views: "15M",
    creator: "BBC Earth",
    createdAt: "6 months ago"
  },
  {
    id: "2",
    title: "3 Hours of Amazing Nature Scenery & Relaxing Music for Stress Relief",
    thumbnail: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    duration: "3:00:00",
    views: "27M",
    creator: "Cat Trumpet",
    createdAt: "4 years ago"
  },
  {
    id: "3",
    title: "10 Hours Fantastic Views of Nature 4K with Relaxation Music",
    thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    duration: "10:12:39",
    views: "5.8M",
    creator: "PRIMAL EARTH",
    createdAt: "3 years ago"
  },
  {
    id: "4",
    title: "Relaxing Sleep Music for Meditation, Stress Relief & Healing",
    thumbnail: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    duration: "8:00:00",
    views: "12M",
    creator: "Relaxing Space",
    createdAt: "2 years ago"
  }
];

const trendingVideos = [
  {
    id: "5",
    title: "Marvel at Sea Animal in The Best 4K ULTRA HD Aquarium Video",
    thumbnail: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    duration: "3:58:11",
    views: "4.6M",
    creator: "Ocean Relaxation Film",
    createdAt: "6 months ago"
  },
  {
    id: "6",
    title: "Forest River Nature Sounds - Gentle Stream with Birdsong",
    thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    duration: "3:00:00",
    views: "8.4M",
    creator: "Naturescapes Relax with Nature",
    createdAt: "11 months ago"
  },
  {
    id: "7",
    title: "Relaxing Music with Water Sounds for Stress Relief",
    thumbnail: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    duration: "2:30:00",
    views: "19M",
    creator: "Soothing Soul - 4K UHD Heaven",
    createdAt: "1 year ago"
  },
  {
    id: "8",
    title: "Nikkel Asia | Big in Asia - Kyoto tea farmers take global thirst for matcha",
    thumbnail: "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    duration: "15:30",
    views: "1.6M",
    creator: "Nikkei Asia",
    createdAt: "2 months ago"
  }
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-16">
        <HeroGeometric 
          badge="StreamFlow"
          title1="Discover Endless"
          title2="Video Content"
          description="Immerse yourself in a world of high-quality videos. Stream, discover, and share your favorite content all in one place."
        />
      </div>
      
      {/* Featured Videos Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Videos</h2>
          <Button variant="ghost" className="text-white/80 hover:text-white flex items-center gap-1">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVideos.map(video => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
      
      {/* Trending Videos Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Trending Now</h2>
          <Button variant="ghost" className="text-white/80 hover:text-white flex items-center gap-1">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingVideos.map(video => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
}