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

export type FilteredBy = { id: string | null, name: string | null };

export interface AppState {
  user: User;
  posts: {
    messages: Post[];
    filteredBy: FilteredBy
  };
}
