import React, { useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import { connect, ConnectedProps } from 'react-redux';
import { loadPosts } from './store';
import { Header } from "./components/Header";
import Routes from "./Routes";

import "./App.scss";

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    loadPosts,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;


function App({ loadPosts }: Props): JSX.Element {
  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <Router>
      <Header />
      <div className="main">
        <Routes />
      </div>
    </Router>
  );
}

export default connector(App);



