import React from "react";
import logo from "./logo.svg";
import "./App.css";

import router from "./router/index";
import { Link, RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React123ssdd
          <div id='yourContainer'></div>
        </a>
      </header> */}

      {/* <Link to="/home">home</Link>
      <Link to="/settings">settings</Link> */}
      {/* <div id="subapp-viewport"></div> */}

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
