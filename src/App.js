import React from "react";
import "./App.css";
import * as ActionCreators from "./redux/actions/actionCounterCreaters";
import Counter from "./components/Counter";
import Home from "./pages/Home";

function App(props) {
  return (
    <>
    <Home/>
    </>
  );
}

export default App;
