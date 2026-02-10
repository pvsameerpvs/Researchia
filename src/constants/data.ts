import { Course } from "@/types/course";

export const courses: Course[] = [
  {
    id: "1",
    slug: "full-stack-web-development",
    title: "Full Stack Web Development with Next.js & Node",
    category: "Development",
    description: "Master modern web development from scratch. Learn React, Next.js, Tailwind CSS, and Node.js with real-world projects.",
    thumbnail: "/courses/web-dev.png",
    duration: "12 Weeks",
    lessons: 48,
    students: 1250,
    price: 99,
    mode: "Online",
    instructor: {
      name: "John Doe",
      avatar: "/instructors/john.png",
    },
  },
  {
    id: "2",
    slug: "ui-ux-design-masterclass",
    title: "UI/UX Design Masterclass: From Beginner to Pro",
    category: "Design",
    description: "Learn the principles of beautiful design. Master Figma, user research, wireframing, and interactive prototyping.",
    thumbnail: "/courses/ui-ux.png",
    duration: "8 Weeks",
    lessons: 32,
    students: 850,
    price: 79,
    mode: "Offline",
    instructor: {
      name: "John Doe",
      avatar: "/instructors/john.png",
    },
  },
  {
    id: "3",
    slug: "digital-marketing-strategy",
    title: "Digital Marketing Strategy & Social Media",
    category: "Marketing",
    description: "Grow your business with effective digital marketing. Learn SEO, SEM, and social media advertising strategies.",
    thumbnail: "/courses/marketing.png",
    duration: "6 Weeks",
    lessons: 24,
    students: 2100,
    price: 59,
    mode: "Online",
    instructor: {
      name: "John Doe",
      avatar: "/instructors/john.png",
    },
  },
];

export const courseDetails = {
  "full-stack-web-development": {
    about: "This comprehensive course is designed to take you from a beginner to a professional full-stack developer. You will learn the latest technologies used by top tech companies.",
    learningOutcomes: [
      "Build responsive websites using HTML5 and CSS3",
      "Master JavaScript and TypeScript fundamentals",
      "Develop dynamic web applications with React & Next.js",
      "Create robust backend APIs with Node.js & Express",
      "Implement authentication and authorization",
      "Deploy your applications to professional hosting platforms"
    ],
    modules: [
      {
        title: "Introduction to Web Development",
        lessons: ["How the web works", "Setting up your environment", "HTML Basics", "CSS Fundamentals"]
      },
      {
        title: "Mastering React & Next.js",
        lessons: ["Components & Props", "State Management", "Routing with Next.js", "Server-side Rendering"]
      },
      {
        title: "Backend Development",
        lessons: ["Node.js Basics", "Express.js Framework", "Database Integration", "RESTful API Design"]
      }
    ]
  }
};
