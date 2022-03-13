import React from "react";
import Layout from "./components/layout";
import NoSearch from "./components/noSearch";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/githubHooks";

const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p style={{ fontSize: 32, color: "#808080" }}>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;
