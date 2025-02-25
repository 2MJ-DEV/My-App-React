import React from "react";
import Login from "./components/Login.jsx";
import MapComponent from "./components/MapComponent.jsx";
import Sidebar from "./components/Sidebar.jsx";

const App = () => {
  return (
    <div>
      <Login />
      <MapComponent />
      <Sidebar />
    </div>
  );
};

export default App;