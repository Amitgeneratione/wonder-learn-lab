import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Globe, Map, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import geographyIcon from "@/assets/geography-icon.jpg";

const Geography = () => {
  const activities = [
    { title: "World Explorer", icon: Globe, description: "Learn about different countries and cultures!" },
    { title: "Map Reading", icon: Map, description: "Master map skills and navigation!" },
    { title: "Land & Water", icon: Compass, description: "Discover mountains, oceans, and rivers!" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-geography/10 py-12">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-6">
            <img src={geographyIcon} alt="Geography" className="w-32 h-32 rounded-2xl shadow-lg" />
            <div>
              <h1 className="text-5xl font-bold mb-4 text-geography">Geography</h1>
              <p className="text-xl text-muted-foreground">Explore our amazing planet Earth!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Learning Activities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <Card key={activity.title} className="p-6 hover:shadow-xl transition-shadow">
                <Icon className="w-12 h-12 mb-4 text-geography" />
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-muted-foreground mb-4">{activity.description}</p>
                <Button 
                  className="bg-geography hover:bg-geography/90"
                  onClick={() => {
                    console.log(`🎯 Button clicked: ${activity.title}`);
                    alert(`Button clicked! Starting ${activity.title}`);
                    toast.success(`Starting ${activity.title}! 🎉`, {
                      description: "Get ready to learn and have fun!"
                    });
                  }}
                >
                  Start Activity
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Geography;
