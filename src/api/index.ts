import { postsStub } from "../stubs";
import { Post, User } from "../types";

export function loadPostsFromApi(): Post[] {
  console.log("Start loading");
  console.log("End Loading");
  return postsStub;
}

export function setNewUserInfo(userData: User) {
  console.dir(userData);
  console.log("user data changed");
}

export function addPostToBD(post: Post): void {
  console.dir(post);
  console.log('The post added');
}
