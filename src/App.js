import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mail from "./Components/Mail";
import EmailList from "./Components/EmailList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="App__body">
          <Sidebar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
