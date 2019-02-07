import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';

const router = (
    <Router>
        <div>
            <Route path="/" component={App} />
        </div>
    </Router>
)

export default router;
