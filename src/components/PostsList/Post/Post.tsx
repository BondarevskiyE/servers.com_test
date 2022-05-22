import React from "react";
import { ListChildComponentProps } from "react-window";

import { Post as PostType } from "../../../types";
import "./Post.scss";

interface Props {
  post: PostType,
  filterByAuthor?: (id: string, name: string) => void
}

const Post = ({
  style,
  post,
  filterByAuthor
}: ListChildComponentProps & Props) => (
  <div style={style} className="message">
    <h3>{post.text}</h3>
    <div className="message__info">
      <div>
        <p>{`Author: ${post.author.name}`}</p>
        {filterByAuthor ? <button onClick={() => filterByAuthor(post.author.id, post.author.name)}>filter by author</button> : null}
      </div>
      <p>{post.date.toLocaleString("en-US")}</p>
    </div>
  </div>
)

export default Post;
