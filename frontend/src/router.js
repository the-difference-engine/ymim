import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import fetchData from "./reducers";
import thunk from "redux-thunk";
import Home from "./components/home";
import Header from "./components/common/header";
import NotFound from "./components/common/not_found";
import Footer from "./components/common/footer";
import Login from "./components/common/login";
import Contact from "./components/static_pages/contact";
import About from "./components/static_pages/about";
import Admin from "./components/admin";
import Enroll from "./components/enroll";
import Team from "./components/static_pages/team";
import Ambassadors from "./components/static_pages/ambassadors";
import Donate from "./components/donation_page";
import Resources from "./components/resources";
import Events from "./components/events";
import Volunteer from "./components/Volunteer/volunteer.jsx";

let store = createStore(fetchData, applyMiddleware(thunk));

const router = (
  <Provider store={store}>
    <Router>
      <div className="container-fluid">
        <div className="site-content">
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/donate" component={Donate} />
              <Route exact path="/contact-us" component={Contact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/enrollment" component={Enroll} />
              <Route exact path="/meet-the-team" component={Team} />
              <Route exact path="/ambassadors" component={Ambassadors} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/resources" component={Resources} />
              <Route exact path="/volunteer" component={Volunteer} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  </Provider>
);

export default router;
