export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  rating: number;
  cover?: string;
}

export const sampleBooks: Book[] = [
  { 
    id: 1, 
    title: "Atomic Habits", 
    author: "James Clear", 
    description: "A guide to building good habits and breaking bad ones.", 
    rating: 4.8 
  },
  { 
    id: 2, 
    title: "Deep Work", 
    author: "Cal Newport", 
    description: "Rules for focused success in a distracted world.", 
    rating: 4.6 
  },
  { 
    id: 3, 
    title: "The Alchemist", 
    author: "Paulo Coelho", 
    description: "A novel about finding one's destiny.", 
    rating: 4.5 
  }
];
