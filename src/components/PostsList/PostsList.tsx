import React from 'react';
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import Post from './Post';

import { ITEM_SIZE } from '../../constants';
import { Post as PostType } from '../../types';
import './PostsList.scss'

interface Props {
    posts: PostType[],
    isItemLoaded: (index: number) => boolean,
    loadMorePosts: () => void,
    filterByAuthor?: (id: string, name: string) => void,
    removePost?: (id: string) => void 
}

const PostsList = ({
    posts,
    isItemLoaded,
    loadMorePosts,
    filterByAuthor,
    removePost
}: Props): JSX.Element => {

    return (
        <div className='list'>
            <AutoSizer className="autosizer">
                {({ height, width }) => (

                    <InfiniteLoader
                        isItemLoaded={isItemLoaded}
                        itemCount={posts.length}
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
                                {(props) => Post({...props, filterByAuthor, removePost, post: posts[props.index]})}
                            </List>
                        )}    
                    </InfiniteLoader>
            
                )}
            </AutoSizer>
        </div>
    )
}

export default PostsList;