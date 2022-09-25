import react, { useEffect } from "react";
import "antd/dist/antd.css";
import SideBar from "./components/sidebar/SideBar";
import Home from "../src/components/home/Home";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Login from "./components/loginandsignup/Login";
import Signup from "./components/loginandsignup/Signup";
import { getAllUsers, getCurrentUser } from "../src/components/Redux/adminReducer"
import { getAllResponses, getAnalyticsData } from "../src/components/Redux/responseReducer"
import Users from "./components/users/Users";
import UserResponses from "./components/responses/UserResponses";
import Privacy from "./components/Privacy/Privacy";
import Contactus from "./components/Contactus/Contactus";
import Settings from "./components/settings/Settings";
import ForgotPassword from "./components/settings/ForgotPassword";
import ResetPassword from "./components/settings/ResetPassword";
import SuccessUrl from "./components/ApplePay/SuccessUrl";
import CancelUrl from "./components/ApplePay/CancelUrl";


function App() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers())
    dispatch(getAllResponses())
    dispatch(getCurrentUser())
    dispatch(getAnalyticsData())
    dispatch(getAnalyticsData())
  }, [])

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contactus" component={Contactus} />
          <Route exact path="/privacypolicy" component={Privacy} />
          <Route exact path="/admin/login" component={Login} />
          <Route exact path="/admin/forgotpassword" component={ForgotPassword} />
          <Route exact path="/admin/resetpassword/:id" component={ResetPassword} />
          <Route exact path="/admin/signup" component={Signup} />
          <Route exact path="/successurl" component={SuccessUrl} />
          <Route exact path="/cancelurl" component={CancelUrl} />
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
              <Route exact path="/dashboard/settings" component={Settings} />
            </main>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
