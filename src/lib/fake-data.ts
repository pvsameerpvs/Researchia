export interface ChecklistItem {
  id: string;
  title: string;
  status: "completed" | "pending" | "action_required";
  type: "reading" | "video" | "assignment" | "upload";
}

export const practicalChecklistData: ChecklistItem[] = [
  {
    id: "task-1",
    title: "Read the provided course material",
    status: "completed",
    type: "reading"
  },
  {
    id: "task-2",
    title: "Watch the instructional video",
    status: "completed",
    type: "video"
  },
  {
    id: "task-3",
    title: "Complete the listed practical assignments",
    status: "pending",
    type: "assignment"
  },
  {
    id: "task-4",
    title: "Upload your answers for review",
    status: "action_required",
    type: "upload"
  }
];

export interface ReadingMaterial {
  id: string;
  title: string;
  description: string;
  pages: number;
  status: "completed" | "pending";
  url: string;
}

export const readingMaterialsData: ReadingMaterial[] = [
  {
    id: "read-1",
    title: "Fundamentals of Research Methodology",
    description: "Core principles and ethical considerations in academic research.",
    pages: 24,
    status: "completed",
    url: "/sample.pdf"
  },
  {
    id: "read-2",
    title: "Guide to Effective Literature Review",
    description: "How to source, analyze, and synthesize scholarly papers.",
    pages: 18,
    status: "pending",
    url: "/sample.pdf"
  },
  {
    id: "read-3",
    title: "Quantitative vs Video Analysis",
    description: "Understanding different data analysis approaches.",
    pages: 32,
    status: "pending",
    url: "/sample.pdf"
  },
  {
    id: "read-4",
    title: "Publishing Your First Paper",
    description: "Step-by-step guide to academic journal submission.",
    pages: 15,
    status: "pending",
    url: "/sample.pdf"
  }
];

export interface VideoLesson {
  id: string;
  title: string;
  duration: string;
  status: "completed" | "pending" | "watching";
  thumbnail: string;
}

export const videoLessonsData: VideoLesson[] = [
  {
    id: "vid-1",
    title: "Lesson 1: Introduction to Research Methods",
    duration: "45:00",
    status: "watching",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "vid-2",
    title: "Lesson 2: Qualitative Data Analysis",
    duration: "32:15",
    status: "pending",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "vid-3",
    title: "Lesson 3: Quantitative Statistical Models",
    duration: "55:40",
    status: "pending",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "vid-4",
    title: "Lesson 4: Academic Writing & Publishing",
    duration: "28:10",
    status: "pending",
    thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop"
  }
];
