import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./src/reducers";
import LoginForm from "./src/components/LoginForm";
import Router from "./src/Router";

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBnez_Es9yTwna2Zbr312beXCSODcC3BF4",
      authDomain: "manager-50a3a.firebaseapp.com",
      databaseURL: "https://manager-50a3a.firebaseio.com",
      projectId: "manager-50a3a",
      storageBucket: "manager-50a3a.appspot.com",
      messagingSenderId: "1073411936658"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
