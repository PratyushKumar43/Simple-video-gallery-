import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Navbar />

      <div className="container mx-auto px-4 pt-24 pb-12 flex flex-col items-center justify-center text-center">
        <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 mb-6">
          404
        </h1>

        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>

        <p className="text-white/60 max-w-md mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link to="/">
          <Button className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white">
            <Home className="h-4 w-4 mr-2" /> Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;