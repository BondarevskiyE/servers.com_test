import MyProfile from "./MyProfile";
import { connect, ConnectedProps } from "react-redux";
import { loadPosts, user } from "../../store";
import { AppState } from "../../types";

const mapStateToProps = (state: AppState) => ({
  user: user.getUser(state),
});

const mapDispatchToProps = {
  getPosts: loadPosts,
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type Props = ConnectedProps<typeof connector>;

export default connector(MyProfile);
