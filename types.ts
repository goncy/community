export interface User {
  id: string;
  name: string;
  avatar: string;
  bio?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  testimonial?: string;
  country?: string;
}

export interface Entry {
  user: User;
  content: string;
}
