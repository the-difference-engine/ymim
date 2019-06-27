import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";

class PaypalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButton: false,
      price: 1.0,
      priceError: true
    };

    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed) {
      this.setState({ showButton: true });
    }
  }

  handleInputChange = e => {
    const re = /^\d*\.?\d{0,2}$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ price: e.target.value });
    }
    if (this.state.price >= 1) {
      this.state.priceError = false;
    } else {
      this.state.priceError = true;
    }
    console.log(this.state.priceError);
  };

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

    const isLoadedButWasntLoadedBefore =
      !this.state.showButton && !this.props.isScriptLoaded && isScriptLoaded;

    if (isLoadedButWasntLoadedBefore) {
      if (isScriptLoadSucceed) {
        this.setState({ showButton: true });
      }
    }
  }

  render() {
    const paypal = window.PAYPAL;
    const {
      currency,
      env,
      commit,
      client,
      onSuccess,
      onError,
      onCancel
    } = this.props;

    const { showButton, price } = this.state;

    const payment = () =>
      paypal.rest.payment.create(env, client, {
        transactions: [
          {
            amount: {
              total: price,
              currency
            }
          }
        ]
      });

    const onAuthorize = (data, actions) =>
      actions.payment.execute().then(() => {
        const payment = {
          paid: true,
          cancelled: false,
          payerID: data.payerID,
          paymentID: data.paymentID,
          paymentToken: data.paymentToken,
          returnUrl: data.returnUrl
        };

        onSuccess(payment);
      });

    const style = {
      layout: "vertical", // horizontal | vertical
      size: "medium", // medium | large | responsive
      shape: "rect", // pill | rect
      color: "gold" // gold | blue | silver | white | black
    };

    return (
      <React.Fragment>
        <form>
          <h3 style={{ justifySelf: "center" }}>Donate Amount</h3>
          <input
            name="donate"
            type="text"
            placeholder="Minimum $1.00"
            value={this.state.price}
            onChange={this.handleInputChange}
            className="donationInput"
          />
        </form>

        <br />
        {showButton && (
          <paypal.Button.react
            style={style}
            env={env}
            client={client}
            commit={commit}
            payment={payment}
            onAuthorize={onAuthorize}
            onCancel={onCancel}
            onError={onError}
          />
        )}
      </React.Fragment>
    );
  }
}

export default scriptLoader("https://www.paypalobjects.com/api/checkout.js")(
  PaypalButton
);

/*Component was rendered in APP.js but is currently being stored here for future use.
const PAYPAL_CLIENT = {
  sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID_SANDBOX,
  production: process.env.PAYPAL_CLIENT_ID_PRODUCTION,
};

const ENV = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'sandbox';

  These three go in the render method

    const onSuccess = (payment) =>
    console.log('Successful payment!', payment);

  const onError = (error) =>
    console.log('Erroneous payment OR failed to load script!', error);

  const onCancel = (data) =>
    console.log('Cancelled payment!', data);

  This component goes in the return method
      <div>
        <PaypalButton
          client={PAYPAL_CLIENT}
          env={ENV}
          commit={true}
          currency={'USD'}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />
      </div>


*/
