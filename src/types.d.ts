export interface Post {
  date: Date;
  text: string;
  author: {
    name: string;
    id: string;
  };
  id: string;
}

export interface User {
  name: string;
  age: number;
  id: string;
}

export type Filter = { name: string | null };

export type FilterOptions = {
  id: string | null,
  date: { from: number, to: number } | null
}

export interface AppState {
  user: User;
  posts: {
    messages: Post[];
    filter: Filter
  };
}
