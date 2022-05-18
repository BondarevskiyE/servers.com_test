export interface User {
  name: string;
  age: number;
  id: string;
}

export interface Post {
  date: Date;
  text: string;
  author: {
    name: string;
    id: string;
  };
  id: string;
}

export interface AppState {
  user: User,
  posts: {
    messages: Post[]
  }
}