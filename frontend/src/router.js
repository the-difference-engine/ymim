import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import fetchData from "./reducers";
import thunk from "redux-thunk";
import App from "./components/App";
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
import Events from "./components/events";


let store = createStore(fetchData, applyMiddleware(thunk));

const router = (
  <Provider store={store}>
    <Router>
      <div className="App site">
        <div className="site-content">
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/fetch" component={DemoPage} />
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
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default router;
