import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import fetchData from "./reducers";
import thunk from "redux-thunk";
import Home from "./components/common/home";
import NotFound from "./components/common/not_found";
import Login from "./components/common/login";
import Admin from "./components/admin";
import Footer from "./components/common/footer";
import Contact from "./components/static_pages/contact";
import About from "./components/static_pages/about";
import Enroll from "./components/enroll";
import Team from "./components/static_pages/team";
import Ambassadors from "./components/static_pages/ambassadors";
import Donate from "./components/donation_page";
import Events from "./components/events";
import Header from "./components/common/header";

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
              <Route exact path="/donate" component={Donate} />
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
