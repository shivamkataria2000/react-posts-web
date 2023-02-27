import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import PostList from "./components/PostList";

const App = () => {
  return (
    <>
      <Header></Header>
      <ErrorBoundary>
        <PostList />
      </ErrorBoundary>
    </>
  );
};

export default App;
