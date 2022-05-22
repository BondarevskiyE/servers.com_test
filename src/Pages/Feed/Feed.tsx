import React, { useState } from "react";
import AddPostModal from "../../components/AddPost/AddPostModal";
import PostsList from '../../components/PostsList';

import { Props } from './';

import './Feed.scss';

const Feed = ({ 
    posts,
    filteredBy,
    cancelFiltering,
    user,
    getPosts,
    addPost,
    filterByAuthor
}: Props): JSX.Element => {
    const [isModalOpen, setModalOpen] = useState(false)
    const onHandleModal = () => setModalOpen(!isModalOpen)

    const onHandleAddPost = (text: string) => {
        addPost({
          text,
          date: new Date(),
          author: {
            name: user.name,
            id: user.id,
          },
        });
        onHandleModal();
    };

    const loadMorePosts = () => {
        getPosts();
    };

    const isItemLoaded = (index: number) => !!posts[index]
    
    return (
        <div className="feed">
            <div className="feed__tools-panel">
                <h1>Feed</h1>
                <button onClick={onHandleModal} className="feed__add-button">Add post</button>
            </div>
            {filteredBy?.name ? <div className="feed__filtering">
                <p>{`filtered by ${filteredBy?.name}`}</p>
                <button onClick={cancelFiltering}>cancel filtering</button>
            </div> : null}
            <PostsList
                isItemLoaded={isItemLoaded}
                posts={posts}
                loadMorePosts={loadMorePosts}
                filterByAuthor={filterByAuthor}
            />

            <AddPostModal
                visible={isModalOpen}
                onAddPost={onHandleAddPost}
                onClose={onHandleModal}
            />

        </div>
    );
};

export default Feed;