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
  instructor: {
    name: string;
    avatar: string;
  };
}
