import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  creator: string;
  createdAt: string;
}

export function VideoCard({ id, title, thumbnail, duration, views, creator, createdAt }: VideoCardProps) {
  return (
    <Card className="bg-black/20 border-white/5 overflow-hidden group hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
      <Link to={`/video/${id}`}>
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
              <Play className="h-6 w-6 text-white fill-white" />
            </div>
          </div>
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            {duration}
          </div>
        </div>
        <CardContent className="p-3">
          <h3 className="font-medium text-white line-clamp-2 mb-1">{title}</h3>
          <div className="flex items-center text-xs text-white/60 space-x-2">
            <span>{creator}</span>
            <span>•</span>
            <span>{views} views</span>
            <span>•</span>
            <span>{createdAt}</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}