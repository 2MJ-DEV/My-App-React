import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login.jsx";
import MapComponent from "./components/MapComponent.jsx";
import Sidebar from "./components/Sidebar.jsx";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/map" component={MapComponent} />
        <Route path="/sidebar" component={Sidebar} />
      </Switch>sw
    </Router>
  );
};

export default App;