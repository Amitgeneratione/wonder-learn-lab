import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SubjectCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  link: string;
}

const SubjectCard = ({ title, description, icon, color, link }: SubjectCardProps) => {
  return (
    <Link to={link} className="group">
      <Card className={`p-6 hover:shadow-2xl transition-all duration-300 border-2 hover:scale-105 hover:border-${color}`}>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className={`w-24 h-24 rounded-2xl overflow-hidden bg-${color}/10 p-2`}>
            <img 
              src={icon} 
              alt={title} 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          <div className={`flex items-center gap-2 text-${color} font-semibold group-hover:gap-4 transition-all`}>
            Start Learning
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default SubjectCard;
