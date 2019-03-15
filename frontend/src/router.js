import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import fetchData from "./reducers";
import thunk from "redux-thunk";
import App from './components/App';
import DemoPage from './components/DemoPage';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Admin from "./pages/admin"
import Navigation from './components/Header';

let store = createStore(fetchData, applyMiddleware(thunk));

const router = (
    <Provider store={store}>
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/fetch" component={DemoPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/admin" component={Admin} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    </Provider >
)

export default router;
