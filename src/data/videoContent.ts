interface QuizQuestion {
  quizQuestion: string;
  correctAnswer: string;
  options: string[];
}

export interface VideoContent {
  title: string;
  videoUrl: string;
  questions: QuizQuestion[];
}

const englishQuestions: QuizQuestion[] = [
  {
    quizQuestion: "Which of the following is a common noun?",
    correctAnswer: "Teacher",
    options: ["London", "Sarah", "Teacher", "Mars"],
  },
  {
    quizQuestion: "Which word is a verb in the sentence: 'The cat quickly ran home'?",
    correctAnswer: "ran",
    options: ["cat", "quickly", "ran", "home"],
  },
  {
    quizQuestion: "What is the plural form of 'mouse'?",
    correctAnswer: "mice",
    options: ["mouses", "mice", "mouse's", "mices"],
  },
];

const mathsQuestions: QuizQuestion[] = [
  {
    quizQuestion: "What is the result of 15 + 7 - 3?",
    correctAnswer: "19",
    options: ["25", "19", "15", "22"],
  },
  {
    quizQuestion: "If a square has a side length of 5, what is its area?",
    correctAnswer: "25",
    options: ["10", "20", "25", "30"],
  },
  {
    quizQuestion: "What is 7 multiplied by 8?",
    correctAnswer: "56",
    options: ["49", "54", "56", "64"],
  },
];

const scienceQuestions: QuizQuestion[] = [
  {
    quizQuestion: "What is the process of water vapor turning into liquid water called?",
    correctAnswer: "Condensation",
    options: ["Evaporation", "Precipitation", "Condensation", "Transpiration"],
  },
  {
    quizQuestion: "Which planet is known as the 'Red Planet'?",
    correctAnswer: "Mars",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
  },
  {
    quizQuestion: "What is the primary source of energy for the Earth?",
    correctAnswer: "The Sun",
    options: ["The Moon", "Wind", "The Sun", "Geothermal"],
  },
];

const geographyQuestions: QuizQuestion[] = [
  {
    quizQuestion: "Which is the largest continent by land area?",
    correctAnswer: "Asia",
    options: ["Africa", "North America", "Asia", "Europe"],
  },
  {
    quizQuestion: "What is the name of the largest ocean on Earth?",
    correctAnswer: "Pacific Ocean",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
  },
  {
    quizQuestion: "Which country is famous for the Great Wall?",
    correctAnswer: "China",
    options: ["Japan", "India", "China", "South Korea"],
  },
];

const criticalThinkingQuestions: QuizQuestion[] = [
  {
    quizQuestion: "An argument that attacks the person rather than the argument itself is known as:",
    correctAnswer: "Ad Hominem",
    options: ["Straw Man", "Ad Hominem", "Appeal to Emotion", "Red Herring"],
  },
  {
    quizQuestion: "If all cats are mammals, and all mammals are animals, then all cats are:",
    correctAnswer: "Animals",
    options: ["Dogs", "Birds", "Animals", "Reptiles"],
  },
  {
    quizQuestion: "Which of these is the odd one out: Apple, Banana, Carrot, Orange?",
    correctAnswer: "Carrot",
    options: ["Apple", "Banana", "Carrot", "Orange"],
  },
];

export const englishVideoContent: VideoContent = {
  title: "Introduction to Nouns",
  videoUrl: "https://www.youtube.com/embed/T9l213271_E", // Placeholder: "What is a Noun?"
  questions: englishQuestions,
};

export const mathsVideoContent: VideoContent = {
  title: "Basic Addition and Subtraction",
  videoUrl: "https://www.youtube.com/embed/v_Q-k_297_E", // Placeholder: "Addition and Subtraction"
  questions: mathsQuestions,
};

export const scienceVideoContent: VideoContent = {
  title: "The Water Cycle Explained",
  videoUrl: "https://www.youtube.com/embed/c121_g-1_E", // Placeholder: "The Water Cycle"
  questions: scienceQuestions,
};

export const geographyVideoContent: VideoContent = {
  title: "Continents and Oceans",
  videoUrl: "https://www.youtube.com/embed/g_213271_E", // Placeholder: "7 Continents Song"
  questions: geographyQuestions,
};

export const criticalThinkingVideoContent: VideoContent = {
  title: "Introduction to Logical Fallacies",
  videoUrl: "https://www.youtube.com/embed/a_Q-k_297_E", // Placeholder: "What is a Logical Fallacy?"
  questions: criticalThinkingQuestions,
};
