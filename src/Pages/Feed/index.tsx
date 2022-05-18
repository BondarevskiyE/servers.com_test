import Feed from "./Feed";
import { connect, ConnectedProps } from 'react-redux';
import { posts, loadPosts, addPost, user } from '../../store';
import { AppState } from '../../types';

const mapStateToProps = (state: AppState) => ({
    posts: posts.getPosts(state.posts),
    user: user.getUser(state.user)
});

const mapDispatchToProps = {
    getPosts: loadPosts,
    addPost,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export type Props = PropsFromRedux;

export default connector(Feed);