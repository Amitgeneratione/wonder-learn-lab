import { Button } from "@/components/ui/button";
import VideoPlayer from "@/components/VideoPlayer";
import { criticalThinkingVideoContent } from "@/data/videoContent";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Brain, Lightbulb, Puzzle } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import criticalIcon from "@/assets/critical-icon.jpg";

const CriticalThinking = () => {
  const { title, videoUrl, questions } = criticalThinkingVideoContent;
  const activities = [
    { title: "Logic Puzzles", icon: Puzzle, description: "Solve challenging puzzles and riddles!" },
    { title: "Creative Thinking", icon: Lightbulb, description: "Think outside the box with creative challenges!" },
    { title: "Problem Solving", icon: Brain, description: "Develop strategies to solve complex problems!" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-critical/10 py-12">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-6">
            <img src={criticalIcon} alt="Critical Thinking" className="w-32 h-32 rounded-2xl shadow-lg" />
            <div>
              <h1 className="text-5xl font-bold mb-4 text-critical">Critical Thinking</h1>
              <p className="text-xl text-muted-foreground">Sharpen your mind with fun challenges!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Video Lecture</h2>
        <VideoPlayer
          title={title}
            videoUrl={videoUrl}
            questions={questions}
        />
        <div className="my-12 border-t border-gray-200"></div>
        <h2 className="text-3xl font-bold mb-8">Learning Activities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <Card key={activity.title} className="p-6 hover:shadow-xl transition-shadow">
                <Icon className="w-12 h-12 mb-4 text-critical" />
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-muted-foreground mb-4">{activity.description}</p>
                <Button 
                  className="bg-critical hover:bg-critical/90"
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

export default CriticalThinking;
