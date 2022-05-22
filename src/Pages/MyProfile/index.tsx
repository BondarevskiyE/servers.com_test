import MyProfile from "./MyProfile";
import { connect, ConnectedProps } from "react-redux";
import { loadPosts, posts, user, removePost, cancelFiltering } from "../../store";
import { AppState } from "../../types";

const mapStateToProps = (state: AppState) => ({
  user: user.getUser(state),
  posts: posts.getUserPosts(state)
});

const mapDispatchToProps = {
  getPosts: loadPosts,
  removePost,
  cancelFiltering
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type Props = ConnectedProps<typeof connector>;

export default connector(MyProfile);
