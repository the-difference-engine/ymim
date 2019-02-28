import React from 'react';
import ReactDOM from 'react-dom';
import scriptLoader from 'react-async-script-loader';
import { readdirSync } from 'fs';

class PaypalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButton: false,
      price: 1.00,
    };

    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentDidMount() {
    const {
      isScriptLoaded,
      isScriptLoadSucceed
    } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed) {
      this.setState({ showButton: true });
    }
  }

  handleInputChange = event => {
    this.setState({price: event.target.value});
  };

  componentWillReceiveProps(nextProps) {
    const {
      isScriptLoaded,
      isScriptLoadSucceed,
    } = nextProps;

    const isLoadedButWasntLoadedBefore =
      !this.state.showButton &&
      !this.props.isScriptLoaded &&
      isScriptLoaded;

    if (isLoadedButWasntLoadedBefore) {
      if (isScriptLoadSucceed) {
        this.setState({ showButton: true });
      }
    }
  }


  render() {
    const paypal = window.PAYPAL
    const {
      currency,
      env,
      commit,
      client,
      onSuccess,
      onError,
      onCancel,
    } = this.props;

    const {
      showButton,
      price,
    } = this.state;

    
    const payment = () =>
      paypal.rest.payment.create(env, client, {
        transactions: [
          {
            amount: {
              total: price,
              currency,
            }
          },
        ],
      });

    const onAuthorize = (data, actions) =>
      actions.payment.execute()
        .then(() => {
          const payment = {
            paid: true,
            cancelled: false,
            payerID: data.payerID,
            paymentID: data.paymentID,
            paymentToken: data.paymentToken,
            returnUrl: data.returnUrl,
          };

          onSuccess(payment);
        });
        const style = {
          layout: 'vertical', // horizontal | vertical
          size: 'medium', // medium | large | responsive
          shape: 'rect', // pill | rect
          color: 'gold' // gold | blue | silver | white | black
        };
        const isEnabled = (this.state.price >= 1)

    return (
      <React.Fragment>
        <form>
          <h3 style={{ justifySelf: 'center' }}>Donate Amount</h3>
            <input
              name='donate'
              type='number'
              min="1"
              placeholder="1"
              value={this.state.price}
              onChange={this.handleInputChange}
              className='donationInput'
            />
        </form>
      
        {showButton && <paypal.Button.react
          disabled = {!isEnabled}
          style={style}
          env={env}
          client={client}
          commit={commit}
          payment={payment}
          onAuthorize={onAuthorize}
          onCancel={onCancel}
          onError={onError}
        />}
        </React.Fragment>
      
    );
  }
}


export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(PaypalButton);