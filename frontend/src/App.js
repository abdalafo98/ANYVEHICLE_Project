import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import SignUp from "./components/signup/signup";
import Login from "./components/login/login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/signup" render={() => <SignUp />} />
        <Route path="/login" render={() => <Login />} />
      </Switch>
    </div>
  );
}

export default App;
