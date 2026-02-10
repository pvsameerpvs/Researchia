export interface QuizQuestion {
  id: string;
  question: string;
  options?: string[];
  correctAnswer?: number;
  submissionType?: "mcq" | "file" | "video" | "image" | "mixed";
  requiredFile?: string;
  requiredVideo?: string;
  requiredImage?: string;
}

export interface Lesson {
  id: string;
  title: string;
  videoUrl?: string;
  audioUrl?: string;
  pdfUrl?: string;
  duration: string;
  type: "video" | "audio" | "pdf" | "quiz";
  questions?: QuizQuestion[];
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  duration: string;
  lessons: number;
  students: number;
  price: number;
  mode: "Online" | "Offline";
  validityPeriod: string;
  instructor: {
    name: string;
    avatar: string;
  };
}
