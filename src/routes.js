import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Profile from './pages/profile/index';
import Index from './pages/index/index';
import SignIn from './pages/signin/index';
import SignUp from "./pages/signup";
import Empty from './pages/empty/index';
import Settings from './pages/settings/index';
import Files from './pages/files/index';

export const useRoutes = (isAuth, username) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path={`/profile/:username`}>
          <Profile />
        </Route>
        <Route path="/news">
          <Empty />
        </Route>
        <Route path="/chat">
          <Empty />
        </Route>
        <Route path="/files">
          {/* <Files /> */}
          <Empty />
        </Route>
        <Route path="/contacts">
          <Empty />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Redirect to={`/profile/${username}`} />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path="/">
        <Index />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
