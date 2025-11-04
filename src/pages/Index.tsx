import SubjectCard from "@/components/SubjectCard";
import heroImage from "@/assets/hero-learning.jpg";
import englishIcon from "@/assets/english-icon.jpg";
import mathsIcon from "@/assets/maths-icon.jpg";
import scienceIcon from "@/assets/science-icon.jpg";
import geographyIcon from "@/assets/geography-icon.jpg";
import criticalIcon from "@/assets/critical-icon.jpg";
import { BookOpen } from "lucide-react";

const Index = () => {
  const subjects = [
    {
      title: "English",
      description: "Master reading, writing, and grammar with fun activities!",
      icon: englishIcon,
      color: "english",
      link: "/english",
    },
    {
      title: "Maths",
      description: "Explore numbers, shapes, and problem-solving skills!",
      icon: mathsIcon,
      color: "maths",
      link: "/maths",
    },
    {
      title: "Science",
      description: "Discover the wonders of the natural world!",
      icon: scienceIcon,
      color: "science",
      link: "/science",
    },
    {
      title: "Geography",
      description: "Learn about countries, maps, and our amazing planet!",
      icon: geographyIcon,
      color: "geography",
      link: "/geography",
    },
    {
      title: "Critical Thinking",
      description: "Develop problem-solving and logical reasoning skills!",
      icon: criticalIcon,
      color: "critical",
      link: "/critical-thinking",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[500px] flex items-center justify-center bg-gradient-primary overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(66, 153, 225, 0.9), rgba(147, 51, 234, 0.85)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="flex justify-center mb-6">
            <BookOpen className="w-20 h-20 text-white animate-bounce" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Learn & Grow Together!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Explore exciting subjects and become a super learner!
          </p>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Choose Your Adventure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subjects.map((subject) => (
            <SubjectCard key={subject.title} {...subject} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
