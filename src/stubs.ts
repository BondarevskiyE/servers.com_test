import { Post } from "./types";
import { getRandomDate, generateId } from "./utils";

const MichaelId = generateId();

const postsStub: Post[] =
  [
  {
    date: getRandomDate(),
    text: "The new text from the new user. Hey! It's amazing! Good message, friend!",
    author: {
      name: "Michael Douglas",
      id: MichaelId,
    },
    id: generateId(),
  },
  {
    date: getRandomDate(),
    text: "The old text from the old user. But it's better because of experience",
    author: {
      name: "Egor Bondarevskii",
      id: "1",
    },
    id: generateId(),
  },
  {
    date: getRandomDate(),
    text: "Oh, nobody is reading my blog. How come? It's need to change the theme and text style.",
    author: {
      name: "Michael Douglas",
      id: MichaelId,
    },
    id: generateId(),
    },
    {
    date: getRandomDate(),
    text: "Oh, nobody is reading my blog. How come? It's need to change the theme and text style.",
    author: {
      name: "Michael Douglas",
      id: MichaelId,
    },
    id: generateId(),
  },
  {
    date: getRandomDate(),
    text: "Some incredible sentences about my life. Thank you for reading.",
    author: {
      name: "Egor Bondarevskii",
      id: "1",
    },
    id: generateId(),
  },
  {
    date: getRandomDate(),
    text: "The new text from the new user. Hey! It's amazing! Good message, friend!",
    author: {
      name: "Michael Douglas",
      id: MichaelId,
    },
    id: generateId(),
  },
  {
    date: getRandomDate(),
    text: "The old text from the old user. But it's better because of experience",
    author: {
      name: "Egor Bondarevskii",
      id: "1",
    },
    id: generateId(),
  },
  {
    date: getRandomDate(),
    text: "Oh, nobody is reading my blog. How come? It's need to change the theme and text style.",
    author: {
      name: "Michael Douglas",
      id: MichaelId,
    },
    id: generateId(),
  },
  {
    date: getRandomDate(),
    text: "Some incredible sentences about my life. Thank you for reading.",
    author: {
      name: "Egor Bondarevskii",
      id: "1",
    },
    id: generateId(),
    },
    {
      date: getRandomDate(),
      text: "Some incredible sentences about my life. Thank you for reading.",
      author: {
        name: "Egor Bondarevskii",
        id: "1",
      },
      id: generateId(),
    },
  ];

class Stubs {
  posts: Post[];
  constructor() {
    this.posts = postsStub
  }

  getPosts():  Post[] {
    return this.posts
  }

  setNewPost(post: Post) {
    this.posts = [post, ...this.posts];
  }

  removePost(id: string) {
    this.posts = this.posts.filter((post) => post.id !== id)
  }
}

export default new Stubs();