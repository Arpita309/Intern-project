import React, { useState } from "react";


import StripeCheckout from "react-stripe-checkout";

function Payment() {
  const [product, setProduct] = useState({
    name: "React from FB",
    price: 10,
    productBy: "facebook"
  });
console.log(process.env.REACT_APP_KEY)
  const makePayment = token => {
    const body = {
      token,
      product
    };
    const headers = {
      "Content-Type": "application/json"
    };

    return fetch(`http://localhost:4000/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    })
      .then(response => {
        console.log("RESPONSE ", response);
        const { status } = response;
        console.log("STATUS ", status);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="App">
      <header className="App-header">
        

        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <StripeCheckout
          stripeKey='pk_test_51Gye5bDuX2TrUjLdcvRJBsFurcd4it6nM8tBV9oa4Z15n4Ww67VFhpSDr8qYDL7nLhyGpFDVZfh3aaCxg0ACtYr900EqTWJycm'
          token={makePayment}
          name="Buy React"
          amount={product.price * 100}
          shippingAddress
          billingAddress
        >
          <button className="btn-large blue">
            Buy react is just {product.price} $
          </button>
        </StripeCheckout>
      </header>
    </div>
  );
}

export default Payment;
