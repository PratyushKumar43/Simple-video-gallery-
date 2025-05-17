import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { VideoCard } from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Share2, Bookmark, MessageSquare } from "lucide-react";

// Mock data for related videos
const relatedVideos = [
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

// Mock video data
const videoData = {
  id: "1",
  title: "Incredible 4K Nature Scenes Narrated By David Attenborough",
  views: "15M",
  likes: "1.2M",
  createdAt: "6 months ago",
  creator: "BBC Earth",
  subscribers: "17.5M",
  description: "Relax with extraordinary 4K nature footage narrated by Sir David Attenborough, the voice of natural history for over 70 years. This video features relaxing music that is ideal for sleep, study, meditation and yoga.",
  videoUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
};

export function VideoPage() {
  const { id } = useParams<{ id: string }>();
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="aspect-video bg-black/50 rounded-lg overflow-hidden mb-4">
              <img 
                src={videoData.videoUrl} 
                alt={videoData.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Video Info */}
            <h1 className="text-2xl font-bold mb-2">{videoData.title}</h1>
            
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="text-white/60 text-sm">
                {videoData.views} views • {videoData.createdAt}
              </div>
              
              <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                <Button variant="ghost" size="sm" className="text-white/80 hover:text-white flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" /> {videoData.likes}
                </Button>
                <Button variant="ghost" size="sm" className="text-white/80 hover:text-white flex items-center gap-1">
                  <ThumbsDown className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white/80 hover:text-white flex items-center gap-1">
                  <Share2 className="h-4 w-4" /> Share
                </Button>
                <Button variant="ghost" size="sm" className="text-white/80 hover:text-white flex items-center gap-1">
                  <Bookmark className="h-4 w-4" /> Save
                </Button>
              </div>
            </div>
            
            {/* Channel Info */}
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-rose-500 flex items-center justify-center">
                  <span className="text-white font-bold">{videoData.creator.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-medium">{videoData.creator}</h3>
                  <p className="text-sm text-white/60">{videoData.subscribers} subscribers</p>
                </div>
              </div>
              
              <Button 
                onClick={() => setIsSubscribed(!isSubscribed)}
                className={isSubscribed 
                  ? "bg-white/10 hover:bg-white/20 text-white" 
                  : "bg-gradient-to-r from-indigo-500 to-rose-500 text-white"
                }
              >
                {isSubscribed ? "Subscribed" : "Subscribe"}
              </Button>
            </div>
            
            {/* Video Description */}
            <div className="p-4 bg-white/5 rounded-lg mb-6">
              <p className="text-white/80 whitespace-pre-line">{videoData.description}</p>
            </div>
            
            {/* Comments Section */}
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                <MessageSquare className="h-5 w-5 text-white/60" />
                <h3 className="font-medium">Comments</h3>
              </div>
              
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0"></div>
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="Add a comment..." 
                    className="w-full bg-transparent border-b border-white/10 pb-2 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </div>
              
              {/* Sample Comments */}
              <div className="space-y-4 mt-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0"></div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Nature Lover</span>
                      <span className="text-xs text-white/40">2 months ago</span>
                    </div>
                    <p className="text-white/80 mt-1">This is absolutely breathtaking! Sir David Attenborough's narration makes it even more special.</p>
                    <div className="flex items-center space-x-3 mt-2 text-white/60 text-sm">
                      <button className="flex items-center space-x-1"><ThumbsUp className="h-3 w-3" /> <span>423</span></button>
                      <button className="flex items-center space-x-1"><ThumbsDown className="h-3 w-3" /></button>
                      <button>Reply</button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0"></div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Meditation Guide</span>
                      <span className="text-xs text-white/40">3 months ago</span>
                    </div>
                    <p className="text-white/80 mt-1">I use this video in my meditation classes. The combination of stunning visuals and calming narration creates the perfect atmosphere.</p>
                    <div className="flex items-center space-x-3 mt-2 text-white/60 text-sm">
                      <button className="flex items-center space-x-1"><ThumbsUp className="h-3 w-3" /> <span>287</span></button>
                      <button className="flex items-center space-x-1"><ThumbsDown className="h-3 w-3" /></button>
                      <button>Reply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Videos */}
          <div>
            <h3 className="text-lg font-medium mb-4">Related Videos</h3>
            <div className="space-y-4">
              {relatedVideos.map(video => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}