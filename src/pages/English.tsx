import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Pencil, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import englishIcon from "@/assets/english-icon.jpg";

const English = () => {
  const activities = [
    { title: "Reading Practice", icon: BookOpen, description: "Improve your reading skills with fun stories!" },
    { title: "Writing Fun", icon: Pencil, description: "Learn to write amazing sentences and stories!" },
    { title: "Grammar Games", icon: MessageSquare, description: "Master grammar rules through interactive games!" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-english/10 py-12">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-6">
            <img src={englishIcon} alt="English" className="w-32 h-32 rounded-2xl shadow-lg" />
            <div>
              <h1 className="text-5xl font-bold mb-4 text-english">English</h1>
              <p className="text-xl text-muted-foreground">Let's explore the wonderful world of words!</p>
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
                <Icon className="w-12 h-12 mb-4 text-english" />
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-muted-foreground mb-4">{activity.description}</p>
                <Button 
                  className="bg-english hover:bg-english/90"
                  onClick={() => {
                    console.log(`Button clicked: ${activity.title}`);
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

export default English;
