import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="settings">
      <Link to="/home">home</Link>
      <Link to="/settings">settings</Link>
    </div>
  );
}

export default App;
