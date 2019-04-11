import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import fetchData from "./reducers";
import thunk from "redux-thunk";
import Home from "./components/home";
import DemoPage from "./components/DemoPage";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Admin from "./pages/admin";
import Footer from "./components/footer";
import Contact from "./components/contact";
import About from "./components/about";
import Enroll from "./components/enroll";
import Team from "./components/team";
import Ambassadors from "./components/ambassadors";
import Donate from "./components/DonationPage";
import Events from "./components/events";
import Header from "./components/Header";


let store = createStore(fetchData, applyMiddleware(thunk));

const router = (
  <Provider store={store}>
    <Router>
      <div className="site container-fluid">
        <div className="site-content">
          <Header />
          <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/fetch" component={DemoPage} />
            <Route exact path="/Donate" component={Donate} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/enrollment" component={Enroll} />
            <Route exact path="/meet-the-team" component={Team} />
            <Route exact path="/ambassadors" component={Ambassadors} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default router;
