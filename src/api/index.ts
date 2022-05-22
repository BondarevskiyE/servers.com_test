import stubs from "../stubs";
import { Post } from "../types";

export function loadPostsFromApi(): Post[] {
  console.log("Start loading");
  console.log("End Loading");

  return stubs.getPosts();
}

export function loadPostsFromApiByUserId(id?: string): Post[] {
  console.log("Start loading");
  console.log("End Loading");
  return stubs.getPosts().filter((post) => post.author.id === id);
}

export function addPostToBD(post: Post): void {
  console.dir(post);
  console.log("The post added");
  stubs.setNewPost(post);
}
