import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPages from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
//import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
//import Backdrop from "./components/Backdrop";
//import Modal from "./components/Modal";
//import Todo from "./components/Todo";

/*function App() {
  return (
    <div>
      <h1> My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Learn Next" />
      <Todo text="Learn Node" />
    </div>
  );
}*/

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetupsPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPages />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
