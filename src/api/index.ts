import stubs from "../stubs";
import { Post } from "../types";

export function loadPostsFromApi(): Post[] {
  console.log("Start loading");
  console.log("End Loading");

  return stubs.getPosts();
}

export function loadPostsFromApiByUserId(id: string): Post[] {
  console.log("Start loading");
  console.log("End Loading");
  return stubs.getPosts().filter((post) => post.author.id === id);
}

export function loadPostsFromApiByDate(date: { from: number, to: number }): Post[] {
  console.log("Start loading");
  console.log("End Loading");
  return stubs.getPosts().filter((post) => {
    const postDate = post.date.getTime();
    if(postDate > date.from && postDate < date.to) {
        return true
    }
    return false;
})
}

export function addPostToDB(post: Post): void {
  console.dir(post);
  console.log("The post added");
  stubs.setNewPost(post);
}

export function removePostFromDB(id: string): void {
  console.log("post has been removed");

  stubs.removePost(id);
}
