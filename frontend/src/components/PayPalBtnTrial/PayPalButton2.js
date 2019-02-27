import React from 'react';
import ReactDOM from 'react-dom';
import scriptLoader from 'react-async-script-loader';
import PayPalButton from 'react-paypal-button';

let PayPalButton = paypal.Buttons.driver('react', { React, ReactDOM });
class Main extends React.Component {
    createOrder(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '0.03'
                }
            }]
        });
    }
    onApprove(data, actions) {
        return actions.order.capture();
    }
    render() {
        return (
            <PayPalButton
                createOrder={ (data, actions) => this.createOrder(data, actions) }
                onApprove={ (data, actions) => this.onApprove(data, actions) }
            />
        );
    }
}
ReactDOM.render(<Main />, document.querySelector('#root'));


export default scriptLoader("https://www.paypal.com/sdk/js?client-id=sb")(PaypalBtn);