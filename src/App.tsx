import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Header } from './components/Header';

import Routes from './Routes';

import "./App.scss";

function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
