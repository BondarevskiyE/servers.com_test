import React from "react";
import PostsList from "../../components/PostsList";
import photo from '../../assets/photo.jpg';

import { Props } from "./";
import './MyProfile.scss';

const MyProfile = ({ user, posts, getPosts, removePost }: Props): JSX.Element => {
  const { age, name } = user;

  const loadMorePosts = () => {
    getPosts();
  };

  const isItemLoaded = (index: number) => !!posts[index]

  return (
    <div className="profile">
      <div className="profile__header">
        <h1>My Profile</h1>
      </div>

      <div className="profile__info">
        <div className="profile__info__photo">
          <img src={photo} alt="user"/>
        </div>

        <div>
          <h2>{name}</h2>
          <h3>{`Age: ${age}`}</h3>
        </div>
      </div>
      <h3 className="profile__info__posts-title">My posts</h3>

      <PostsList
        posts={posts}
        loadMorePosts={loadMorePosts}
        isItemLoaded={isItemLoaded}
        removePost={removePost}
      />
    </div>
  );
};

export default MyProfile;
