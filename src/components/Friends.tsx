
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, Camera, Heart, Users, MapPin, Cake, Coffee, Music } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Friends = () => {
  const navigate = useNavigate();

  const familyPhotos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
      caption: "Family dinner at home",
      date: "December 2024"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=400&h=300&fit=crop",
      caption: "Weekend trip with parents",
      date: "November 2024"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
      caption: "Holiday celebration",
      date: "October 2024"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
      caption: "Family picnic in the park",
      date: "September 2024"
    }
  ];

  const partyDates = [
    {
      id: 1,
      event: "New Year's Eve Party",
      date: "December 31, 2024",
      location: "Anna's Apartment",
      time: "21:00",
      type: "celebration"
    },
    {
      id: 2,
      event: "University Friend's Birthday",
      date: "January 15, 2025",
      location: "Central Warsaw",
      time: "19:30",
      type: "birthday"
    },
    {
      id: 3,
      event: "Study Group Coffee & Catch-up",
      date: "January 22, 2025",
      location: "Café Kulturalna",
      time: "16:00",
      type: "casual"
    },
    {
      id: 4,
      event: "Game Night at Dorm",
      date: "February 5, 2025",
      location: "University Dormitory",
      time: "20:00",
      type: "gaming"
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'birthday':
        return <Cake className="w-5 h-5 text-pink-600" />;
      case 'casual':
        return <Coffee className="w-5 h-5 text-amber-600" />;
      case 'gaming':
        return <Music className="w-5 h-5 text-purple-600" />;
      default:
        return <Heart className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-400 to-rose-500 text-white px-6 py-8 shadow-xl">
        <div className="max-w-6xl mx-auto">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="text-white hover:bg-white/20 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Main Site
          </Button>
          <h1 className="text-4xl font-bold mb-2">Welcome to My Private Space! 💕</h1>
          <p className="text-pink-100 text-lg">
            Here are the special moments, memories, and upcoming plans I share only with my closest friends and family.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Family Photos Section */}
          <section>
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-stone-800">
                  <Camera className="w-7 h-7 text-pink-600" />
                  Family Memories
                </CardTitle>
                <p className="text-stone-600">
                  Precious moments captured with my beloved family
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {familyPhotos.map((photo) => (
                    <div key={photo.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      <img
                        src={photo.url}
                        alt={photo.caption}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-semibold mb-1">{photo.caption}</h3>
                        <p className="text-sm text-gray-200">{photo.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Party Dates Section */}
          <section>
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-stone-800">
                  <Calendar className="w-7 h-7 text-purple-600" />
                  Upcoming Hangouts & Events
                </CardTitle>
                <p className="text-stone-600">
                  Let's make more amazing memories together!
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {partyDates.map((event) => (
                    <div key={event.id} className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 border border-pink-100 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                          {getEventIcon(event.type)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-stone-800 text-lg mb-2">{event.event}</h3>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-stone-600">
                              <Calendar className="w-4 h-4 text-pink-500" />
                              <span className="font-medium">{event.date}</span>
                              <span className="text-stone-500">at {event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-stone-600">
                              <MapPin className="w-4 h-4 text-purple-500" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Personal Notes Section */}
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 shadow-xl border-0 mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-stone-800">
                  <Heart className="w-7 h-7 text-red-500" />
                  Personal Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-stone-700">
                  <p className="italic">
                    "The best part about studying in Warsaw is how it's brought me closer to amazing people who've become like family to me."
                  </p>
                  <p>
                    <strong>Current mood:</strong> Excited about winter break and spending more time with loved ones! ❄️
                  </p>
                  <p>
                    <strong>Recent achievement:</strong> Aced my first semester programming exams! 🎉
                  </p>
                  <p>
                    <strong>Looking forward to:</strong> The upcoming study group sessions and planning our spring trip together.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Footer Message */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-2xl p-8 shadow-xl">
            <Users className="w-12 h-12 mx-auto mb-4 text-pink-100" />
            <h2 className="text-2xl font-bold mb-4">Thank You for Being Here</h2>
            <p className="text-pink-100 max-w-2xl mx-auto leading-relaxed">
              This space is special because it's shared with special people like you. Every memory here represents 
              the joy, laughter, and love that make my journey in Warsaw truly meaningful. Here's to many more 
              wonderful moments together! 💕
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Friends;
