
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Heart, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-stone-100">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-stone-50 to-cream-100 px-6 py-12">
        <div className="absolute inset-0 opacity-20 bg-stone-50/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/7daa5b6d-2f90-4778-a156-e34cf7cce5b9.png" 
              alt="Esmanur Ural" 
              className="w-40 h-40 rounded-full mx-auto shadow-2xl border-4 border-white/50 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <h1 className="text-5xl font-bold text-stone-800 mb-4 tracking-tight">
            Esmanur Ural
          </h1>
          <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            First-year Computer Engineering student passionate about technology, innovation, and creating meaningful digital experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <span className="text-stone-700 font-medium">Computer Engineering Student</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <MapPin className="w-5 h-5 text-red-500" />
              <span className="text-stone-700 font-medium">Warsaw, Poland</span>
            </div>
          </div>
          <Button 
            onClick={() => navigate('/friends')}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-full px-8 py-3 text-lg font-semibold"
          >
            <Lock className="w-5 h-5 mr-2" />
            For Friends
            <Heart className="w-5 h-5 ml-2 text-pink-200" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Me */}
          <Card className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-stone-50 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-stone-800 mb-6">About Me</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Hello! I'm Esmanur, a passionate first-year Computer Engineering student embarking on an exciting journey in the world of technology. Currently based in the beautiful city of Warsaw, I'm diving deep into the fundamentals of computer science and engineering.
                </p>
                <p>
                  My interests span across various domains of technology, from software development to hardware design. I believe in the power of technology to solve real-world problems and create positive impact in people's lives.
                </p>
                <p>
                  When I'm not studying or coding, you can find me exploring Warsaw's rich culture, trying new cuisines, or spending quality time with friends and family.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Studies */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-6">My Studies</h2>
              <div className="space-y-4">
                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-md">
                  <h3 className="font-semibold text-stone-800 mb-2">Computer Engineering</h3>
                  <p className="text-stone-600 text-sm">First Year Student</p>
                  <p className="text-stone-600 text-sm">Focus: Software & Hardware</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-md">
                  <h3 className="font-semibold text-stone-800 mb-2">Current Learning</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Programming', 'Mathematics', 'Digital Logic', 'Physics'].map((subject) => (
                      <span key={subject} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Life in Warsaw */}
          <Card className="lg:col-span-3 bg-gradient-to-r from-emerald-50 to-teal-50 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-stone-800 mb-6">Life in Warsaw</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-emerald-700" />
                  </div>
                  <h3 className="font-semibold text-stone-800 mb-2">University Life</h3>
                  <p className="text-stone-600 text-sm">Engaging with professors and classmates, participating in study groups, and exploring the vast world of computer engineering.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-blue-700" />
                  </div>
                  <h3 className="font-semibold text-stone-800 mb-2">Exploring the City</h3>
                  <p className="text-stone-600 text-sm">Discovering Warsaw's historic charm, modern attractions, and vibrant student community in this amazing European capital.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-pink-700" />
                  </div>
                  <h3 className="font-semibold text-stone-800 mb-2">Building Connections</h3>
                  <p className="text-stone-600 text-sm">Creating lasting friendships, networking with fellow students, and building a supportive community away from home.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-300 py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-lg mb-4">Thank you for visiting my website!</p>
          <p className="text-stone-400">Esmanur Ural • Computer Engineering Student • Warsaw, Poland</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
