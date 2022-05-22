import React from "react";
import { ListChildComponentProps } from "react-window";

import { Post as PostType } from "../../../types";
import "./Post.scss";

interface Props {
  post: PostType;
  filterByAuthor?: (id: string, name: string) => void;
  removePost?: (id: string) => void
}

const Post = ({
  style,
  post,
  filterByAuthor,
  removePost
}: ListChildComponentProps & Props): JSX.Element => (
  <div style={style} className="message">
    <h3>{post.text}</h3>
    <div className="message__info">
      <div>
        <p>{`Author: ${post.author.name}`}</p>
        {filterByAuthor ? <button onClick={() => filterByAuthor(post.author.id, `by ${post.author.name}`)} className="message__filter">filter by author</button> : null}
      </div>
      <div className="message__right">
        <p>{post.date.toLocaleString("en-US")}</p>
        {removePost ? <button onClick={() => removePost(post.id)}>remove post</button> : null}
      </div>
    </div>
  </div>
)

export default Post;
