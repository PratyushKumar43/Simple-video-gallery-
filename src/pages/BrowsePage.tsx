import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { VideoCard } from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, SlidersHorizontal } from "lucide-react";

// Mock data for videos by category
const videosByCategory = {
  all: [
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
      id: "9",
      title: "The Art of Cinematography - Visual Storytelling Techniques",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "48:22",
      views: "2.1M",
      creator: "Film Academy",
      createdAt: "1 year ago"
    },
    {
      id: "10",
      title: "How to Edit Videos Like a Pro - Complete Tutorial",
      thumbnail: "https://images.unsplash.com/photo-1574717024453-354056afd6fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "1:22:45",
      views: "3.7M",
      creator: "Edit Master",
      createdAt: "8 months ago"
    }
  ],
  nature: [
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
      id: "6",
      title: "Forest River Nature Sounds - Gentle Stream with Birdsong",
      thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "3:00:00",
      views: "8.4M",
      creator: "Naturescapes Relax with Nature",
      createdAt: "11 months ago"
    }
  ],
  music: [
    {
      id: "4",
      title: "Relaxing Sleep Music for Meditation, Stress Relief & Healing",
      thumbnail: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "8:00:00",
      views: "12M",
      creator: "Relaxing Space",
      createdAt: "2 years ago"
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
      id: "11",
      title: "Classical Music for Studying and Concentration",
      thumbnail: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "4:15:22",
      views: "8.2M",
      creator: "Classical Essence",
      createdAt: "2 years ago"
    },
    {
      id: "12",
      title: "Ambient Music for Deep Focus and Productivity",
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "3:45:10",
      views: "5.9M",
      creator: "Focus Wave",
      createdAt: "1 year ago"
    }
  ],
  education: [
    {
      id: "8",
      title: "Nikkel Asia | Big in Asia - Kyoto tea farmers take global thirst for matcha",
      thumbnail: "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "15:30",
      views: "1.6M",
      creator: "Nikkei Asia",
      createdAt: "2 months ago"
    },
    {
      id: "9",
      title: "The Art of Cinematography - Visual Storytelling Techniques",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "48:22",
      views: "2.1M",
      creator: "Film Academy",
      createdAt: "1 year ago"
    },
    {
      id: "10",
      title: "How to Edit Videos Like a Pro - Complete Tutorial",
      thumbnail: "https://images.unsplash.com/photo-1574717024453-354056afd6fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      duration: "1:22:45",
      views: "3.7M",
      creator: "Edit Master",
      createdAt: "8 months ago"
    }
  ]
};

export function BrowsePage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Navbar />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Browse Videos</h1>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="border-white/10 text-white/80 hover:bg-white/5">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline" size="sm" className="border-white/10 text-white/80 hover:bg-white/5">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Sort
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-white/5 border border-white/10 p-1 mb-8">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-rose-500 data-[state=active]:text-white"
            >
              All Videos
            </TabsTrigger>
            <TabsTrigger
              value="nature"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-rose-500 data-[state=active]:text-white"
            >
              Nature
            </TabsTrigger>
            <TabsTrigger
              value="music"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-rose-500 data-[state=active]:text-white"
            >
              Music
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-rose-500 data-[state=active]:text-white"
            >
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {videosByCategory.all.map(video => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="nature" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {videosByCategory.nature.map(video => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="music" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {videosByCategory.music.map(video => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {videosByCategory.education.map(video => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}