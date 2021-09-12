import { Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import SignUp from "./components/signup/signup";
import Login from "./components/login/login";
import OrderForm from "./components/order_form/order_form";
import MyOrder from "./components/myorder/myorder";
import Admin from "./components/admin/admin";
import Home from "./components/home/home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/signup" render={() => <SignUp />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/request/maintenance" render={() => <OrderForm />} />
        <Route path="/myorder" render={() => <MyOrder />} />
        <Route path="/admin" render={() => <Admin />} />
        <Route path="/" render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
