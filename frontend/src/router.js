import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import fetchData from "./reducers";
import thunk from "redux-thunk";
import App from './components/App';
import DemoPage from './components/DemoPage';
import NotFound from './components/NotFound';
import Footer from './components/footer';
import Header from './components/Header/Header';
import Contact from './components/contact';


let store = createStore(fetchData, applyMiddleware(thunk));

const router = (
    <Provider store={store}>
        <Router>
            <div className='App site'>
                <div className='site-content'>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/fetch" component={DemoPage} />
                        <Route exact path="/contact-us" component={Contact} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    </Provider>
)

export default router;
