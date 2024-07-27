import { Button } from "@/components/ui/button";
import { RocketIcon, Star, Moon } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Explore the Cosmos</h1>
          <p className="text-xl text-gray-300">Embark on a journey beyond our world</p>
        </header>

        <main className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg">
            <RocketIcon className="h-12 w-12 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Space Exploration</h2>
            <p className="text-gray-300">Discover the wonders of our solar system and beyond.</p>
          </div>
          <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg">
            <Star className="h-12 w-12 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Stellar Phenomena</h2>
            <p className="text-gray-300">Witness the beauty of nebulae, supernovae, and galaxies.</p>
          </div>
          <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg">
            <Moon className="h-12 w-12 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Lunar Missions</h2>
            <p className="text-gray-300">Learn about past and future missions to Earth's moon.</p>
          </div>
        </main>

        <div className="text-center">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Start Your Cosmic Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
