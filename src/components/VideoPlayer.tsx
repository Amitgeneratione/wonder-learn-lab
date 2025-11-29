import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export interface QuizQuestion {
  quizQuestion: string;
  correctAnswer: string;
  options: string[];
}

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  questions: QuizQuestion[];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  title,
  questions,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [quizAttempted, setQuizAttempted] = useState<boolean>(false);

  const currentQuestion = useMemo(() => questions[currentQuestionIndex], [questions, currentQuestionIndex]);
  const { quizQuestion, correctAnswer, options } = currentQuestion;
  const handleAnswer = (answer: string) => {
    if (quizAttempted) return;

    setSelectedAnswer(answer);
    const correct = answer === correctAnswer;
    setIsCorrect(correct);
    setQuizAttempted(true);
  };

  const nextQuestion = () => {
    const nextIndex = (currentQuestionIndex + 1) % questions.length;
    setCurrentQuestionIndex(nextIndex);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setQuizAttempted(false);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Video className="mr-2 h-6 w-6" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Video Player Section - Using a simple iframe for a responsive embed */}
        <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Interactive Quiz Section */}
        <Card className="border-primary/50">
          <CardHeader>
            <CardTitle className="text-lg">{quizQuestion}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedAnswer === option
                      ? isCorrect === true
                        ? "success"
                        : "destructive"
                      : "outline"
                  }
                  onClick={() => handleAnswer(option)}
                  disabled={quizAttempted}
                  className={`justify-start text-left h-auto whitespace-normal ${
                    selectedAnswer === option && isCorrect === true
                      ? "bg-green-100 border-green-500 hover:bg-green-200"
                      : selectedAnswer === option && isCorrect === false
                      ? "bg-red-100 border-red-500 hover:bg-red-200"
                      : ""
                  }`}
                >
                  {option}
                </Button>
              ))}
            </div>

            {isCorrect !== null && (
              <Alert
                className={
                  isCorrect
                    ? "border-green-500 bg-green-50"
                    : "border-red-500 bg-red-50"
                }
              >
                <div className="flex items-center">
                  {isCorrect ? (
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-600 mr-3" />
                  )}
                  <AlertTitle className="font-bold">
                    {isCorrect ? "Correct!" : "Incorrect."}
                  </AlertTitle>
                </div>
                <AlertDescription>
                  {isCorrect
                    ? "Great job! You understood the concept."
                    : `The correct answer was: ${correctAnswer}`}
                </AlertDescription>
                <Button
                  onClick={nextQuestion}
                  variant="secondary"
                  className="mt-3"
                >
                  {questions.length > 1 ? "Next Question" : "Try Again"}
                </Button>
              </Alert>
            )}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default VideoPlayer;
