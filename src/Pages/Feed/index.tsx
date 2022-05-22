import Feed from "./Feed";
import { connect, ConnectedProps } from "react-redux";
import { posts, loadPosts, addPost, user, filterPosts, cancelFiltering } from "../../store";
import { AppState } from "../../types";

const mapStateToProps = (state: AppState) => ({
  posts: posts.getPosts(state),
  user: user.getUser(state),
  filter: posts.getFilter(state)
});

const mapDispatchToProps = {
  getPosts: loadPosts,
  addPost,
  filterPosts,
  cancelFiltering
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type Props = ConnectedProps<typeof connector>;

export default connector(Feed);
