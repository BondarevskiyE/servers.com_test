import React, { useState } from "react";
import AddPostModal from "../../components/AddPost/AddPostModal";
import PostsList from '../../components/PostsList';

import { Props } from './';

import './Feed.scss';

const Feed = ({ 
    posts,
    filter,
    cancelFiltering,
    user,
    getPosts,
    addPost,
    filterPosts
}: Props): JSX.Element => {
    const [isModalOpen, setModalOpen] = useState(false);

    const [dateFrom, setDateFrom] = useState(new Date());
    const [dateTo, setDateTo] = useState(new Date());

    const onHandleModal = () => setModalOpen(!isModalOpen);

    const onHandleAddPost = (text: string): void => {
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

    const loadMorePosts = (): void => {
        getPosts();
    };

    const isItemLoaded = (index: number): boolean => !!posts[index]

    const onHandleFilterByDate = (): void => {
        const from = new Date(dateFrom).getTime();
        const to = new Date(dateTo).getTime();
        filterPosts(null, `from ${dateFrom.toLocaleString("en-US")} to ${dateTo.toLocaleString("en-US")}`, { from, to })
    }

    const onHandleFilterByAuthor = (id: string, name: string): void => {
        filterPosts(id, name, null);
    }
    
    return (
        <div className="feed">
            <div className="feed__tools-panel">
                <h1>Feed</h1>
                <button onClick={onHandleModal} className="feed__add-button">Add post</button>
            </div>
            {filter?.name ? <div className="feed__filtering">
                <p>{`filtered ${filter?.name}`}</p>
                <button onClick={cancelFiltering}>cancel filtering</button>
            </div> : null}
            <div className="feed__filtering">
                <div>
                    <p>From</p>
                    <input type="date" onChange={(e) => setDateFrom(new Date(e.target.value))}/>
                </div>
                <div>
                    <p>To</p>
                    <input type="date" onChange={(e) => setDateTo(new Date(e.target.value))} />
                </div>
                <button onClick={onHandleFilterByDate}>Filter by date</button>
            </div>
            <PostsList
                isItemLoaded={isItemLoaded}
                posts={posts}
                loadMorePosts={loadMorePosts}
                filterByAuthor={onHandleFilterByAuthor}
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