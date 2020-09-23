import React, { FC } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Home } from "./components/pages/home/home";
import { Data } from "./components/pages/data/data";
import { Performance } from "./components/pages/performance/performance";
import css from "./App.module.css";

export const App: FC = () => {
  return (
    <div className={css.app}>
      <nav className={css.appNav}>
        <ul className={css.appNavList}>
          <li className={css.appNavListItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={css.appNavListItem}>
            <Link to="/data">Data</Link>
          </li>
          <li className={css.appNavListItem}>
            <Link to="/performance">Performance</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/data">
          <Data />
        </Route>
        <Route path="/performance">
          <Performance />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
