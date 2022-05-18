import React, { useEffect, useCallback, useState } from "react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import AddPostModal from "../../components/AddPost/AddPostModal";

import { Post } from '../../types';
import { Props } from './';

import './Feed.scss';

const ITEM_SIZE = 105;

const Message = ({ style, post }: ListChildComponentProps & { post: Post }) =>
    <div style={style} className="message">
        <h3>{post.text}</h3>
        <div className="message__info">
            <p>{`Author: ${post.author.name}`}</p>
            <p>{post.date.toLocaleString('en-US')}</p>
        </div>
    </div>;


const Feed = ({ posts, user, getPosts, addPost }: Props): JSX.Element => {
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

    const loadMorePosts = useCallback(() => {
        getPosts();
    }, [getPosts]);

    useEffect(() => {
        loadMorePosts()
    }, [loadMorePosts])

    const isItemLoaded = (index: number) => !!posts[index]

    return (
        <div className="feed">
            <div className="feed__tools-panel">
                <h1>Feed</h1>
                <button onClick={onHandleModal} className="feed__add-button">Add post</button>
            </div>
            
            <div className="feed__list">
                <AutoSizer className="autosizer">
                    {({ height, width }) => (

                        <InfiniteLoader
                            isItemLoaded={isItemLoaded}
                            itemCount={posts.length + 1}
                            loadMoreItems={loadMorePosts}
                        >
                            {({ onItemsRendered, ref }) => (
                                <List
                                    height={height}
                                    itemCount={posts.length}
                                    itemSize={ITEM_SIZE}
                                    width={width}
                                    onItemsRendered={onItemsRendered}
                                    ref={ref}
                                >
                                    {(props) => Message({...props, post: posts[props.index]})}
                                </List>
                            )}    
                        </InfiniteLoader>
                        
                    )}
                </AutoSizer>
            </div>

            <AddPostModal
                visible={isModalOpen}
                onAddPost={onHandleAddPost}
                onClose={onHandleModal}
            />

        </div>
    );
};

export default Feed;