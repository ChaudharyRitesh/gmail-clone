import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MailBox from "./Components/MailBox";
import EmailList from "./Components/EmailList";
import SendMail from "./Components/SendMail";
import Login from "./Components/Login";
import { selectsendMessageIsOpen } from "./features/mailSlice";
import { selectUser, login } from "./features/userSlice";
import { auth } from "./firebase";
import "./App.css";

function App() {
  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        // the user is logged in
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />

          <div className="App__body">
            <Sidebar />

            <Switch>
              <Route path="/mail">
                <MailBox />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
