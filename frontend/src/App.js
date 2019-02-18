import React, { Component } from 'react';
import './App.css';
import PaypalButton from './components/PayPalButton';
require('dotenv').config();

const CLIENT = {
  sandbox: "AiYSI4dBBlv8vaSoN-0QkKMTmHq.AnWCIGMJHNCfZeZB8LHc6SMWx6Iq",
  production: process.env.PAYPAL_CLIENT_ID_PRODUCTION,
};

const ENV = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'sandbox';

class App extends Component {
  render() {
    const onSuccess = (payment) =>
    console.log('Successful payment!', payment);

  const onError = (error) =>
    console.log('Erroneous payment OR failed to load script!', error);

  const onCancel = (data) =>
    console.log('Cancelled payment!', data);

    return (
      <div className="App container">
        <header className="App-header row">
          <p>
            This will be a navbar. <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
               React Docs
            </a>
          </p>
        </header>
        <div className="row page-contents">
          <p>This is a sample component that currently lives at the root of our application.</p>
          <div>
        <PaypalButton
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={'USD'}
          total={100}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />
      </div>
        
        </div>
      </div>
    );
  }
}

export default App;
