import react, { useEffect } from "react";
import "antd/dist/antd.css";
import SideBar from "./components/sidebar/SideBar";
import Home from "../src/components/home/Home";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Login from "./components/loginandsignup/Login";
import Signup from "./components/loginandsignup/Signup";
import { getAllUsers, getCurrentUser } from "../src/components/Redux/adminReducer"
import { getAllResponses } from "../src/components/Redux/responseReducer"
import Users from "./components/users/Users";
import UserResponses from "./components/responses/UserResponses";
import Privacy from "./components/Privacy/Privacy";
import Contactus from "./components/Contactus/Contactus";


function App() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers())
    dispatch(getAllResponses())
    dispatch(getCurrentUser())
  }, [])

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contactus" component={Contactus} />
          <Route exact path="/privacypolicy" component={Privacy} />
          <Route exact path="/admin/login" component={Login} />
          <Route exact path="/admin/signup" component={Signup} />
          <Route path="/dashboard">
            <SideBar />
            <main
              className="main-content"
              style={{
                width: store?.navReducer?.dashboardMargin
                  ? "calc(100% - 270px)"
                  : "calc(100% - 80px)",
              }}
            >
              <Route exact path="/dashboard" component={UserResponses} />
              <Route exact path="/dashboard/users" component={Users} />
            </main>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
