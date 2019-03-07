import React, { Component } from 'react';
import './App.css';
import PaypalButton from './components/PayPalButton';
import dotenv from 'dotenv'
require('dotenv').config();
dotenv.config();

const CLIENT = {
  sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID_SANDBOX,
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
        <div className="row page-contents">
          <p>This is a sample component that currently lives at the root of our application.</p>
          <div>
        <PaypalButton
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={'USD'}
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