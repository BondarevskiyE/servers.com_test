import Feed from "./Feed";
import { connect, ConnectedProps } from "react-redux";
import { posts, loadPosts, addPost, user, filterByAuthor, cancelFiltering } from "../../store";
import { AppState } from "../../types";

const mapStateToProps = (state: AppState) => ({
  posts: posts.getPosts(state),
  user: user.getUser(state),
  filteredBy: posts.getFilteredBy(state)
});

const mapDispatchToProps = {
  getPosts: loadPosts,
  addPost,
  filterByAuthor,
  cancelFiltering
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type Props = ConnectedProps<typeof connector>;

export default connector(Feed);
